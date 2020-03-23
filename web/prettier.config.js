module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  tabWidth: 2,
  useTabs: false,
  overrides: [
    {
      files: '*.html',
      options: {
        htmlWhitespaceSensitivity: 'css',
        printWidth: 160,
      },
    },
  ],
};
