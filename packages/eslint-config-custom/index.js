/** eslint 기본 */
module.exports = {
  root: true,
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/']
    }
  },
  extends: ['next', 'turbo', 'prettier'],
  overrides: [
    // js 파일에 대한 rule override
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ],
  rules: {
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    "no-console": "warn",
  },
  ignorePatterns: ['**/.yarn/*', '**/dist/*', '**/node_modules/*', '**/.turbo/*']
};
