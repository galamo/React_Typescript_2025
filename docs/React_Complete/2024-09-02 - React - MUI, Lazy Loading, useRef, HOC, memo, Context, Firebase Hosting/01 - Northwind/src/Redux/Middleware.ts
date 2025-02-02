import { configureStore, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./Store";

export const loggerMiddleware = (store: ReturnType<typeof configureStore<AppState>>) => (next: Dispatch) => (action: PayloadAction) => {
    const result = next(action);
    console.log(action); // Do your logic
    return result;
}


// export function loggerMiddleware(store: ReturnType<typeof configureStore<AppState>>) {

//     return function (next: Dispatch) {

//         return function (action: PayloadAction) {

//             // Reducer not invoked yet.

//             const result = next(action);

//             // Reducer already invoked.

//             // Our logic here...
//             console.log(action);

//             return result;

//         }
//     }
// }

