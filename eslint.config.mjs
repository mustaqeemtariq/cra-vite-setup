import js from '@eslint/js'
import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'

export default [
	js.configs.recommended,
	{
		ignores: ['build', 'node_modules', 'dist', 'tailwind.config.js'],
	},
	{
		env: {
			browser: true,
		},
	},
	{
		files: ['**/*.js', '**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tsParser,
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
        document: 'readonly',
        window: 'readonly',
				navigator: 'readonly'
      },
			parserOptions: {
				tsconfigRootDir: import.meta.dirname,
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			'@typescript-eslint': ts,
			react,
			prettier,
		},
		rules: {
			'prettier/prettier': 'warn',
			camelcase: 'off',
			'@typescript-eslint/no-use-before-define': 'off',
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/ban-types': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'prefer-const': 'off',
			'@typescript-eslint/prefer-const': 'off',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'react/display-name': 'warn',
			'react/no-unescaped-entities': 'warn',
			'react/no-deprecated': 'warn',
			'@typescript-eslint/no-empty-interface': 'warn',
			'react/jsx-key': 'warn',
			'no-extra-semi': 'warn',
			'@typescript-eslint/no-empty-function': 'off',
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'react/jsx-uses-react': 'off',
			'react/react-in-jsx-scope': 'off',
			semi: ['error', 'never'],
		},
		settings: {
			react: {
				version: 'detect',
			},
			'import/resolver': {
				alias: {
					map: [['@', './src']],
					extensions: ['.js', '.jsx', '.ts', '.tsx'],
				},
			},
			tailwindcss: {
				callees: ['cn', 'clsx', 'classnames'],
			},
		},
	},
]
