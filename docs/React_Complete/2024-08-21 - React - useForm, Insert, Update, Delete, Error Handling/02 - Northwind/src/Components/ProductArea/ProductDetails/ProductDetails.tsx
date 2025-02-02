import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useEffect, useState } from "react";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import { NavLink } from "react-router-dom";
import { useTitle } from "../../../Utils/UseTitle";
import { notify } from "../../../Utils/Notify";


export function ProductDetails(): JSX.Element {

    useTitle("Northwind - Product Details");

    const params = useParams();
    const id = +params.prodId;
    const navigate = useNavigate();

    const [product, setProduct] = useState<ProductModel>();

    useEffect(() => {
        productService.getOneProduct(id)
            .then(product => setProduct(product))
            .catch(err => notify.error(err));
    }, []);

    async function deleteMe() {
        try {

            const sure = window.confirm("Are you sure?");
            if(!sure) return;

            await productService.deleteProduct(id);
            notify.success("Product has been deleted.");
            navigate(-1); // -1 --> Like clicking on the browser's "Back" button
        }
        catch(err: any) {
            notify.error(err);
        }
    }

    return (
        <div className="ProductDetails">
            
            <h3>Name: {product?.name}</h3>
            <h3>Price: {product?.price}</h3>
            <h3>Stock: {product?.stock}</h3>

            <img src={product?.imageUrl} />

            <br />
            <br />

            <NavLink to="/products">Back</NavLink>

            <span> | </span>

            <NavLink to={"/products/edit/" + product?.id}>Edit</NavLink>

            <span> | </span>

            <NavLink to="" onClick={deleteMe}>Delete</NavLink>

        </div>
    );
}
