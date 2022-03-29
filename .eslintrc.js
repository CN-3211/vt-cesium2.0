/*
 * @Date: 2022-03-29 16:52:36
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-03-29 20:07:17
 * @FilePath: /vt-cesium2.0/.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    // '@vue/typescript/recommended'
  ],
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
    document: 'writable', 
    window: 'writable',
    requestAnimationFrame: 'writable',
    HTMLElement: 'writable'
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off', // 允许在import中使用require
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-this-alias": [
      "off",
      "error",
      {
        "allowDestructuring": true, // Allow `const { props, state } = this`; false by default
        "allowedNames": ["vm", "$this"] // Allow `const vm= this`; `[]` by default
      }
    ]
  }
}
