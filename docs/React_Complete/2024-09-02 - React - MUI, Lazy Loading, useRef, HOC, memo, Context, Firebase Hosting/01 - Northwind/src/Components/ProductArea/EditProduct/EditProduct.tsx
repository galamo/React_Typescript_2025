import { useNavigate, useParams } from "react-router-dom";
import { useTitle } from "../../../Utils/UseTitle";
import "./EditProduct.css";
import { useForm } from "react-hook-form";
import { ProductModel } from "../../../Models/ProductModel";
import { imageUtil } from "../../../Utils/ImageUtil";
import { notify } from "../../../Utils/Notify";
import { productService } from "../../../Services/ProductService";
import { useEffect } from "react";

export function EditProduct(): JSX.Element {

    useTitle("Northwind - Edit Product");

    const params = useParams();
    const id = +params.prodId;

    const { register, handleSubmit, setValue } = useForm<ProductModel>();
    const navigate = useNavigate();

    useEffect(() => {
        productService.getOneProduct(id)
            .then(product => {
                setValue("name", product.name);
                setValue("price", product.price);
                setValue("stock", product.stock);
            })
            .catch(err => notify.error(err));
    }, []);

    async function send(product: ProductModel) {
        try {

            // Set product id (form won't get id from the user): 
            product.id = id;

            // Extract the single file from the given list into product.image:
            product.image = (product.image as unknown as FileList)[0];

            // If illegal image: 
            if (product.image && !imageUtil.isImageFileType(product.image?.name)) {
                notify.error("Illegal image file type.");
                return;
            }

            await productService.updateProduct(product);
            notify.success("Product has been updated.");

            navigate("/products");
        }
        catch (err: any) {
            notify.error(err);
        }
    }

    return (
        <div className="EditProduct">

            <form onSubmit={handleSubmit(send)}>

                <label>Name: </label>
                <input type="text" {...register("name")} required minLength={2} maxLength={100} />

                <label>Price: </label>
                <input type="number" step="0.01" {...register("price")} required min={0} max={10000} />

                <label>Stock: </label>
                <input type="number" {...register("stock")} required min={0} max={10000} />

                <label>Image: </label>
                <input type="file" accept="image/*" {...register("image")} />

                <button>Update</button>

            </form>

        </div>
    );
}
