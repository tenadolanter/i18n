module.exports = {
  entry: ['example/vue-test'],
  exclude: [],
  local: 'zh-CN',
  localPath: './example/vue-test/locales',
  langs: ['en-US'],
  keyRule: '',
  i18nImport: "import { i18n } from 'i18n';",
  i18nObject: 'i18n',
  i18nMethod: 't',
  vueTemplateLabelPrefix: 'auto-i18n-prefix-',
  translate: {
    type: 'baidu',
    appId: '20230615001713359',
    secretKey: 'd4C2LAfNchZhlFKV2b1k',
    interval: 1000,
  },
};
