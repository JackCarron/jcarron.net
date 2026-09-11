import { loadRuntimeConfig } from './runtimeConfig';

const validConfig = {
  contactApiUrl: 'https://api.jcarron.net/contact',
  turnstileSiteKey: 'public-site-key',
};

afterEach(() => {
  jest.restoreAllMocks();
});

test('loads public contact configuration without caching', async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => validConfig,
  });

  await expect(loadRuntimeConfig()).resolves.toEqual(validConfig);
  expect(global.fetch).toHaveBeenCalledWith('/config.json', {
    cache: 'no-store',
  });
});

test('rejects incomplete runtime configuration', async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => ({ contactApiUrl: validConfig.contactApiUrl }),
  });

  await expect(loadRuntimeConfig()).rejects.toThrow(
    'Runtime config is incomplete'
  );
});
