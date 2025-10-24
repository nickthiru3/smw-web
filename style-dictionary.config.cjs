module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/lib/styles/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            outputReferences: true
          }
        }
      ]
    },
    ts: {
      transformGroup: 'js',
      buildPath: 'src/lib/design/',
      files: [
        {
          destination: 'tokens.ts',
          format: 'typescript/tokens'
        }
      ]
    }
  }
};
