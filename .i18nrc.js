const { defineConfig } = require('@lobehub/i18n-cli');

module.exports = defineConfig({
  entry: 'locale/zh-CN',
  entryLocale: 'zh-CN',
  output: 'locale',
  outputLocales: [
    'en',
    'zh-TW',
    'ja',
    'ko',
    'de',
    'es',

    'fr',
    'pt-BR',
    'ru',

    'pl',
    'nl',
    'it',
    'bg',
  ],
  temperature: 0,
  modelName: 'gpt-4o-mini',
  experimental: {
    jsonMode: true,
  },
  markdown: {
    entry: ['./README.zh-CN.md'],
    entryLocale: 'zh-CN',
    outputLocales: ['en-US'],
    outputExtensions: (locale) => {
      if (locale === 'en-US') return '.md';
      return `.${locale}.md`;
    },
  },
});
