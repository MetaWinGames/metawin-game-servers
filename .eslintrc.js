module.exports = {
    root: true,
    ignorePatterns: "lib/*",
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
    ],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    env: {
        node: true,
        jest: true,
        mocha: true,
    },
    rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-empty-function": "off",
        "semi": ["error", "always"],
        "comma-dangle": ["error", "always-multiline"],
        "quotes": ["error", "double", {"allowTemplateLiterals": true}],
        "@typescript-eslint/no-non-null-assertion": "off",
        "no-empty-pattern": "off",
        "@typescript-eslint/no-unused-vars": ["error", {"ignoreRestSiblings": true}],
        "prefer-const": ["error", {"destructuring": "all"}],
        "no-case-declarations": "off",
    },
};
