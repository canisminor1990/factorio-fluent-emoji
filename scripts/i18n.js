const { writeFileSync, readdirSync, mkdirSync, existsSync } = require('node:fs');
const config = require('../.i18nrc');
const { readJsonSync } = require('fs-extra');
const path = require('node:path');
const { distDir, localeDir } = require('./const');
const { consola } = require('consola');

const genLocaleCfg = () => {
  const files = readdirSync(path.resolve(localeDir, config.entryLocale));

  for (const file of files) {
    if (path.extname(file).toLowerCase() !== '.json') continue;
    const filename = path.basename(file, '.json');
    for (const locale of [config.entryLocale, ...config.outputLocales]) {
      const data = readJsonSync(path.resolve(localeDir, `${locale}/${filename}.json`));
      const cfg = [];
      for (const [key, value] of Object.entries(data)) {
        cfg.push(`[${key}]`);
        for (const [k, v] of Object.entries(value)) {
          cfg.push(`${k}=${v}`);
        }
        cfg.push('');
      }
      if (!existsSync(path.resolve(distDir, 'locale', locale)))
        mkdirSync(path.resolve(distDir, 'locale', locale), { recursive: true });
      writeFileSync(
        path.resolve(distDir, `locale/${locale}/${filename}.cfg`),
        cfg.join('\n'),
        'utf8',
      );

      consola.start(`Generated ${locale}/${filename}.cfg`);
    }
  }
};

module.exports = { genLocaleCfg };
