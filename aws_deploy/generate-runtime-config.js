const { execFileSync } = require('child_process');
const { writeFileSync } = require('fs');
const { join } = require('path');

const secretId =
  'arn:aws:secretsmanager:us-east-1:425824217061:secret:jcarron.net/cloudflare/turnstile-EcYft4';

const secretString = execFileSync(
  'aws',
  [
    'secretsmanager',
    'get-secret-value',
    '--secret-id',
    secretId,
    '--region',
    'us-east-1',
    '--query',
    'SecretString',
    '--output',
    'text',
  ],
  { encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'] }
);

const { SITE_KEY: turnstileSiteKey } = JSON.parse(secretString);

if (typeof turnstileSiteKey !== 'string' || !turnstileSiteKey) {
  throw new Error('Turnstile secret is missing SITE_KEY');
}

const runtimeConfig = {
  contactApiUrl: 'https://api.jcarron.net/contact',
  turnstileSiteKey,
};

writeFileSync(
  join(__dirname, '..', 'build', 'config.json'),
  `${JSON.stringify(runtimeConfig, null, 2)}\n`,
  { mode: 0o644 }
);

console.log('Generated build/config.json with public browser configuration.');
