#!/usr/bin/env node

const path = require('path');
const SD = require('style-dictionary');
const StyleDictionary = SD && SD.default ? SD.default : SD;

const configPath = path.resolve(__dirname, '..', 'style-dictionary.config.cjs');
const config = require(configPath);

const formatTokens = (node) => {
  if (node && Object.prototype.hasOwnProperty.call(node, 'value')) {
    return node.value;
  }

  return Object.fromEntries(
    Object.entries(node || {}).map(([key, value]) => [key, formatTokens(value)])
  );
};

StyleDictionary.registerFormat({
  name: 'typescript/tokens',
  format({ dictionary }) {
    const objectString = JSON.stringify(formatTokens(dictionary.tokens), null, 2);

    return `export const tokens = ${objectString} as const;\nexport type Tokens = typeof tokens;\n`;
  }
});

async function run() {
  const sd = new StyleDictionary(config);
  await sd.buildAllPlatforms();
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
