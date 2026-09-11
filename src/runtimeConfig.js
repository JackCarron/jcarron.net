const CONFIG_URL = '/config.json';

export async function loadRuntimeConfig() {
  const response = await fetch(CONFIG_URL, { cache: 'no-store' });

  if (!response.ok) {
    throw new Error(`Runtime config request failed with ${response.status}`);
  }

  const config = await response.json();

  if (
    typeof config.contactApiUrl !== 'string' ||
    !config.contactApiUrl.startsWith('https://') ||
    typeof config.turnstileSiteKey !== 'string' ||
    !config.turnstileSiteKey
  ) {
    throw new Error('Runtime config is incomplete');
  }

  return config;
}
