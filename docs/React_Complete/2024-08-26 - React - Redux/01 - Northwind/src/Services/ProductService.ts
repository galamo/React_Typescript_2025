import axios, { AxiosRequestConfig } from "axios";
import { appConfig } from "../Utils/AppConfig";
import { ProductModel } from "../Models/ProductModel";
import { store } from "../Redux/Store";
import { PayloadAction } from "@reduxjs/toolkit";
import { productActions } from "../Redux/ProductSlice";

class ProductService {

    // Get all products: 
    public async getAllProducts(): Promise<ProductModel[]> {

        // If we have products in global state: 
        if (store.getState().products.length > 0) return store.getState().products;

        // Fetch products from backend:
        const response = await axios.get<ProductModel[]>(appConfig.productsUrl);

        // Extract products from response: 
        const products = response.data;

        // Init products in global state: 
        // const action: PayloadAction<ProductModel[]> = { type: "products/initProducts", payload: products };
        const action = productActions.initProducts(products);
        store.dispatch(action);

        // Return:
        return products;
    }

    // Get one product: 
    public async getOneProduct(id: number): Promise<ProductModel> {

        // If we have that product in global state: 
        const globalProduct = store.getState().products.find(p => p.id === id);
        if (globalProduct) return globalProduct;

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

        // Send product to global state: 
        const action = productActions.addProduct(dbProduct);
        store.dispatch(action);
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

        // Update product in global state: 
        const action = productActions.updateProduct(dbProduct);
        store.dispatch(action);
    }

    public async deleteProduct(id: number): Promise<void> {

        await axios.delete<void>(appConfig.productsUrl + id);

        // Delete product from global state: 
        const action = productActions.deleteProduct(id);
        store.dispatch(action);
    }

    public clearAllProducts(): void {
        const action = productActions.clearProducts();
        store.dispatch(action);
    }

}

export const productService = new ProductService();

