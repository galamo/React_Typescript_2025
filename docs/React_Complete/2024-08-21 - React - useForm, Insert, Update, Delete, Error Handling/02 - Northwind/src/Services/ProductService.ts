import axios, { AxiosRequestConfig } from "axios";
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

    public async addProduct(product: ProductModel): Promise<void> {

        // Add header for sending json + files:
        const options: AxiosRequestConfig = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        };
        
        // Send product to backend: 
        const response = await axios.post<ProductModel>(appConfig.productsUrl, product, options);

        // Extract the product from the response: 
        const dbProduct = response.data;

        // הכנה למזגן dbProduct
    }

    public async updateProduct(product: ProductModel): Promise<void> {

        // Add header for sending json + files:
        const options: AxiosRequestConfig = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        };
        
        // Send product to backend: 
        const response = await axios.put<ProductModel>(appConfig.productsUrl + product.id, product, options);

        // Extract the product from the response: 
        const dbProduct = response.data;

        // הכנה למזגן dbProduct
    }

    public async deleteProduct(id: number): Promise<void> {

        await axios.delete<void>(appConfig.productsUrl + id);

    }


}

export const productService = new ProductService();

