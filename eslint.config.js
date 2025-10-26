import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import checkFile from 'eslint-plugin-check-file'
import importPlugin from 'eslint-plugin-import'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'check-file': checkFile,
      'import': importPlugin
    },
    rules: {
      'check-file/filename-naming-convention': [
        'error',
        {
          'src/**/*.{jsx,tsx}': 'PASCAL_CASE',
          'src/**/*.{js,ts}': 'CAMEL_CASE'
        },
        {
          // NOTE: ファイル名の中間拡張子を無視 (e.g. App.stories.tsx)
          ignoreMiddleExtensions: true,
        },
      ],
      'check-file/folder-naming-convention': [
        'error',
        {
          // NOTE: src/内の"__tests__"ディレクトリはディレクトリ命名規則から除く
          'src/**/!(__tests__)': 'KEBAB_CASE'
        }
      ],
      'import/no-restricted-paths': [
        'error',
        {
          'zones': [
            {
              // NOTE: 共通コンポーネントはどの階層にも依存させない
              'target': ['./src/components'],
              'from': ['./src/features']
            }
          ]
        }
      ]
    }
  },
])
