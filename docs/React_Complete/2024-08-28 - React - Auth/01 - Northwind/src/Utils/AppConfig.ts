class AppConfig {
	public readonly registerUrl = "http://localhost:3030/api/register/";
	public readonly loginUrl = "http://localhost:3030/api/login/";
	public readonly productsUrl = "http://localhost:3030/api/products/";
	public readonly topProductsUrl = "http://localhost:3030/api/products/top-three/";
	public readonly outOfStockProductsUrl = "http://localhost:3030/api/products/out-of-stock/";
}

export const appConfig = new AppConfig();
