module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "jsdoc",
        "import",
        "no-null",
        "prefer-arrow",
        "@typescript-eslint",
        "deprecation"
    ],
    "extends": ["plugin:@typescript-eslint/recommended"],
    "rules": {
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/ban-types": "warn",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-empty-function": "warn",
        "deprecation/deprecation": "warn"
    }
};
