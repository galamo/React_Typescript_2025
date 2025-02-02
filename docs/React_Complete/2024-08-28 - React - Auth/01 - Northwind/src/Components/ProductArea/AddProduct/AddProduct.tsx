import { useForm } from "react-hook-form";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import { notify } from "../../../Utils/Notify";
import { useTitle } from "../../../Utils/UseTitle";
import "./AddProduct.css";
import { useNavigate } from "react-router-dom";
import { imageUtil } from "../../../Utils/ImageUtil";

export function AddProduct(): JSX.Element {

    useTitle("Northwind - Add Product");

    const { register, handleSubmit } = useForm<ProductModel>();
    const navigate = useNavigate();

    async function send(product: ProductModel) {
        try {

            // Extract the single file from the given list into product.image:
            product.image = (product.image as unknown as FileList)[0];

            // If illegal image: 
            if(product.image && !imageUtil.isImageFileType(product.image?.name)) {
                notify.error("Illegal image file type.");
                return;
            }

            await productService.addProduct(product);
            notify.success("Product has been added.");

            navigate("/products");
        }
        catch(err: any) {
            notify.error(err);
        }
    }

    return (
        <div className="AddProduct">

            <form onSubmit={handleSubmit(send)}>

                <label>Name: </label>
                <input type="text" {...register("name")} required minLength={2} maxLength={100} />

                <label>Price: </label>
                <input type="number" step="0.01" {...register("price")} required min={0} max={10000} />

                <label>Stock: </label>
                <input type="number" {...register("stock")} required min={0} max={10000} />

                <label>Image: </label>
                <input type="file" accept="image/*" {...register("image")} required />

                <button>Add</button>

            </form>

        </div>
    );
}
