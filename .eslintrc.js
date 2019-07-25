module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "vue/no-unused-vars": "warning",
    "vue/no-use-v-if-with-v-for": "warning",
    semi: "off",
    quotes: "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
