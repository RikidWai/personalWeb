module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },

        'import/resolver': {
            typescript: {
                project: './tsconfig.json',
            },
        },
    },
    extends: [
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended', // accessibility rules
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    plugins: ['import-path'],
    rules: {
        '@typescript-eslint/no-unused-vars': [
            'error',
            { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'react/prop-types': 'off',
        'eol-last': ['error', 'always'],
        'spaced-comment': ['error', 'always', { exceptions: ['-', '+'] }],
        'jsx-a11y/anchor-is-valid': 'off', // It does not work with Next.js
        // See https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
        'import/order': [
            'error',
            {
                groups: [
                    ['builtin', 'external'], // Built-in imports, e.g. from Node.js
                    'internal', // Absolute imports
                    'parent',
                    ['sibling', 'index'],
                    'unknown',
                ],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'builtin',
                        position: 'before',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        // See https://github.com/andrienko/eslint-plugin-import-path/blob/master/README.md
        'import-path/parent-depth': ['error', 2],
        'import-path/forbidden': ['error', ['/index$', '/$']],
    },
}
