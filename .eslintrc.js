/**
 * Configuración de ESLint para el proyecto React (Frontend)
 * CORRECCIÓN: Habilita el entorno Node para que el archivo de configuración
 * reconozca 'module.exports'.
 */
module.exports = {
  parser: '@babel/eslint-parser',
  ignorePatterns: ['build/', 'node_modules/'],
  env: {
    browser: true,
    jest: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: [
    'react',
    'react-hooks',
  ],
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'indent': ['error', 2],
    'semi': ['error', 'always'],
  },
};
