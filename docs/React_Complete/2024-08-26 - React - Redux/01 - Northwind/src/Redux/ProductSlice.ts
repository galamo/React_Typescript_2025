import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductModel } from "../Models/ProductModel";

// Reducers: 
// Reducer - פונקציה המבצעת פעולה אחת על המידע הגלובלי
// המתאימה Reducer-והיא קוראת לפונקציית ה Redux שזה שליחת מידע לספריית dispatch אנו לא קוראים ישירות לפונקציות אלו, אלא מבצעים 
// המתאר את הפעולה לביצוע Action-ואת אובייקט ה Current State-שני דברים: את ה Reducer-שולחת לפונקציית ה Redux ספריית
// אלא עליה לבנות אובייקט חדש ורק אותו לשנות Current State-חשוב: אסור לפונקציה לשנות ישירות את ה


// Init entire products once: 
export function initProducts(currentState: ProductModel[], action: PayloadAction<ProductModel[]>): ProductModel[] {

    const newState = action.payload; // Given products are the new state.

    return newState; // Return the new state.
}


// Add product to global state: 
export function addProduct(currentState: ProductModel[], action: PayloadAction<ProductModel>): ProductModel[] {
    // currentState.push(action.payload); // Current State-אסור לשנות בצורה ישירה את ה

    const newState = [...currentState]; // Duplicate current state.

    newState.push(action.payload); // Add product.

    return newState; // Return the new state.
}

// Update product in global state: 
export function updateProduct(currentState: ProductModel[], action: PayloadAction<ProductModel>): ProductModel[] {

    const newState = [...currentState]; // Duplicate current state.

    const index = newState.findIndex(p => p.id === action.payload.id); // Locate index.

    newState[index] = action.payload; // Update - replace old product with given product.

    return newState; // Return the new state.
}

// Delete product from global state: 
export function deleteProduct(currentState: ProductModel[], action: PayloadAction<number>): ProductModel[] {

    const newState = [...currentState]; // Duplicate current state.

    const index = newState.findIndex(p => p.id === action.payload); // Locate index.

    newState.splice(index, 1); // Delete given product.

    return newState; // Return the new state.
}

// Clear all products from global state: 
export function clearProducts(currentState: ProductModel[], action: PayloadAction): ProductModel[] {
    return [];
}


// Slice: 
// Global State-אובייקט המתאר חלק מכלל המידע הקיים ב
// כאן אנו רוצים לתאר את מערך המוצרים

export const productSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: { initProducts, addProduct, updateProduct, deleteProduct, clearProducts }
});


// Action creator
// מתאימים Action פונקציות המייצרות אובייקטי

export const productActions = productSlice.actions;

