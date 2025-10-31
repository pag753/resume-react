/**
 * Configuración de ESLint para el proyecto React (Frontend)
 * CORRECCIÓN: Habilita el entorno Node para que el archivo de configuración
 * reconozca 'module.exports'.
 */
module.exports = {
  // 1. Indicar el parser de Babel
  parser: '@babel/eslint-parser', 
  
  // 2. Entornos
  env: {
    browser: true, // Esto es para los archivos JSX/JS de la aplicación
    node: true,    // <-- ¡AÑADIDO! Esto permite que el archivo .eslintrc.js use module.exports
    es2021: true,
  },
  
  // 3. Reglas y Plugins
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', 
    'plugin:react-hooks/recommended', 
  ],
  plugins: [
    'react',
    'react-hooks',
  ],

  // 4. Configuración crítica del Parser
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
  
  // 5. Configuración de React
  settings: {
    react: {
      version: 'detect', 
    },
  },
  
  // 6. Reglas (ejemplos)
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'indent': ['error', 2],
    'semi': ['error', 'always'],
  },
};