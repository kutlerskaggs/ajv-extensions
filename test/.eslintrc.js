module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "after": true,
        "afterEach": true,
        "ajv": true,
        "before": true,
        "beforeEach": true,
        "context": true,
        "describe": true,
        "it": true,
        "request": true,
        "utils": true
    },
    "rules": {
        "no-console": ["error", {allow: ["log", "warn", "error"]}],
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single",
            {
                "allowTemplateLiterals": true
            }
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
