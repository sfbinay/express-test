module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: ["plugin:@typescript-eslint/recommended", "prettier"],
  plugins: ["@typescript-eslint/eslint-plugin", "prettier"],
  env: {
    node: true,
  },
  rules: {
    "no-console": "warn",
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "prettier/prettier": ["error"],
    "no-multi-spaces": "error",
    "space-in-parens": "error",
    "no-multiple-empty-lines": "error",
    "prefer-const": "error",
  },
};
