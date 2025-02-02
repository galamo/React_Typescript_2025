class AppConfig {
	public readonly productsUrl = "http://localhost:3030/api/products/"; // End with / because we can concatenate more things to it
}

export const appConfig = new AppConfig();
