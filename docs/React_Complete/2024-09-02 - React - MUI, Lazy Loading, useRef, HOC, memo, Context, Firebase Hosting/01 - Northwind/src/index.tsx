import { ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './Components/LayoutArea/Layout/Layout';
import { theme } from './Components/Theme/theme';
import './index.css';
import { store } from './Redux/Store';
import reportWebVitals from './reportWebVitals';
import { productService } from './Services/ProductService';
import { interceptor } from './Utils/Interceptor';
import { location, LocationContext } from './Utils/LocationContext';
import { notify } from './Utils/Notify';

// Init all products when app starts - first way:
// productService.getAllProducts().then().catch(err => notify.error(err));

// Init all products when app starts - second way:
(async () => {
    try {
        interceptor.registerInterceptor();
        await productService.getAllProducts();
    }
    catch (err: any) {
        notify.error(err);
    }
})();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    // Context tunneling
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <LocationContext.Provider value={location}>
                    <Layout />
                </LocationContext.Provider>
            </ThemeProvider>
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
