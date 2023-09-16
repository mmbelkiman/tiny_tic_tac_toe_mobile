module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/babel.config.js',
    '!**/metro.config.js',
    '!**/jest.config.js',
    '!**/.prettierrc.js',
    '!**/.eslintrc.js',
    '!**/coverage/**',
    '!**/node_modules/**',
  ],
  coverageDirectory: './coverage',
  verbose: true,
  collectCoverage: true,
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|@react-navigation|@storybook|@unimodules|expo-|react-native|d3-|internmap|@miblanchard|@gorhom)',
  ],
  testMatch: ['**/?(*.)+(test).ts'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/', '/coverage'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
