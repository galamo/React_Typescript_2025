import axios from "axios";
import { appConfig } from "../Utils/AppConfig";
import { ProductModel } from "../Models/ProductModel";

class ProductService {
	
    public async getAllProducts(): Promise<ProductModel[]> {

        // Fetch products from backend:
        const response = await axios.get<ProductModel[]>(appConfig.productsUrl);

        // Extract products from response: 
        const products = response.data;

        // Return:
        return products;
    }


}

export const productService = new ProductService();


