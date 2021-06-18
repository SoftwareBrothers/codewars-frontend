module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
  },
  collectCoverageFrom: [
    '**/{!(_app|_error|sentry|index|enums),}.{js,jsx,ts,tsx}',
    '!**/test-sentry.tsx',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/test/**',
    '!**/coverage/**',
    '!**/public/**',
    '!**/__mocks__/**',
    '!jest.config.js',
    '!postcss.config.js',
    '!tailwind.config.js',
    '!next-env.d.ts',
    '!next.config.js',
    '!next-i18next.config.js',
  ],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 80,
      lines: 80,
    },
  },
};
