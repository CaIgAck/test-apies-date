import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";


export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"]
  },
  {
    languageOptions: {
       globals: globals.browser 
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/strongly-recommended"],
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser
      }
    },
    rules: {
      semi: "error",
      "prefer-const": "error",
      "no-unused-vars": "warn",
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: ["const", "let", "var"], next: "return" }
      ],
      "no-mixed-spaces-and-tabs": ["error", "smart-tabs"]
    }
  },
];