let config: any;

export async function loadConfig(envFile = "development.json") {
  const response = await fetch(`/${envFile}`);
  config = await response.json();
}

export function getConfig() {
  if (!config) {
    throw new Error("Configuration not loaded. Call loadConfig() first.");
  }
  return config;
}

export function getApiBaseUrl(): string {
  return getConfig().api.browserUrl;
}
