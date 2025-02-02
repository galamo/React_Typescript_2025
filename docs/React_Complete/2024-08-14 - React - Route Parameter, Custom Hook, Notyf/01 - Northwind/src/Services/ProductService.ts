import axios from "axios";
import { appConfig } from "../Utils/AppConfig";
import { ProductModel } from "../Models/ProductModel";

class ProductService {
	
    // Get all products: 
    public async getAllProducts(): Promise<ProductModel[]> {

        // Fetch products from backend:
        const response = await axios.get<ProductModel[]>(appConfig.productsUrl);

        // Extract products from response: 
        const products = response.data;

        // Return:
        return products;
    }

    // Get one product: 
    public async getOneProduct(id: number): Promise<ProductModel> {

        // Fetch product from backend: 
        const response = await axios.get<ProductModel>(appConfig.productsUrl + id);

        // Extract product: 
        const product = response.data;

        // Return: 
        return product;
    }

}

export const productService = new ProductService();


