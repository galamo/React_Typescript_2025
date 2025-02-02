import { configureStore } from "@reduxjs/toolkit";
import { ProductModel } from "../Models/ProductModel";
import { loggerMiddleware } from "./Middleware";
import { productSlice } from "./ProductSlice";

// AppState:
// Global State-טיפוס המכיל את כלל המידע המנוהל ע"י ה
export type AppState = {
    products: ProductModel[];
    // employees: EmployeeModel[];
    // suppliers: SupplierModel[];
};

// Store: האובייקט הראשי של רידקס, דרכו אנו מבצעים הכל
export const store = configureStore<AppState>({
    reducer: {
        products: productSlice.reducer,
        // employees: employeeSlice.reducer,
        // suppliers: supplierSlice.reducer,
    },
    middleware: (getMiddleware) => getMiddleware().concat(loggerMiddleware) as any
});
