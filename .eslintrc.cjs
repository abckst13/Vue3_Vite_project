/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript/recommended',
        '@vue/eslint-config-prettier',
        'plugin:prettier/recommended'
    ],
    env: {
        'vue/setup-compiler-macros': true
    },
    rules: {
        // indent: ['error', 2],
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                semi: true,
                tabWidth: 4,
                trailingComma: 'none',
                printWidth: 140,
                bracketSpacing: true,
                arrowParens: 'avoid'
            }
        ],
        'vue/multi-word-component-names': 'off'
    },
    overrides: [
        {
            files: ['cypress/integration/**.spec.{js,ts,jsx,tsx}'],
            extends: ['plugin:cypress/recommended']
        }
    ]
};
