import globals from 'globals'
import pluginJs from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import pluginReact from 'eslint-plugin-react'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig([
  globalIgnores(['**/dist', '**/.eslintrc.cjs']),
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  eslintConfigPrettier,
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },

      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'react/display-name': 'off',
      'react/prop-types': 'off',
      'react/jsx-no-target-blank': 'off'
    }
  }
])
