import { configureStore } from "@reduxjs/toolkit";
import { ProductModel } from "../Models/ProductModel";
import { loggerMiddleware } from "./Middleware";
import { productSlice } from "./ProductSlice";
import { UserModel } from "../Models/UserModel";
import { userSlice } from "./UserSlice";

// AppState:
// Global State-טיפוס המכיל את כלל המידע המנוהל ע"י ה
export type AppState = {
    products: ProductModel[];
    user: UserModel;
};

// Store: האובייקט הראשי של רידקס, דרכו אנו מבצעים הכל
export const store = configureStore<AppState>({
    reducer: {
        products: productSlice.reducer,
        user: userSlice.reducer
    },
    middleware: (getMiddleware) => getMiddleware().concat(loggerMiddleware) as any
});
