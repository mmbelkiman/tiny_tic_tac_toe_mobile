module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/babel.config.js',
    '!**/metro.config.js',
    '!**/jest.config.js',
    '!**/.detoxrc.js',
    '!**/.prettierrc.js',
    '!**/.eslintrc.js',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/?(*.)+(test).{js,jsx,ts,tsx}',
  ],
  coverageDirectory: './coverage',
  collectCoverage: true,
  verbose: true,
  projects: [
    {
      transformIgnorePatterns: [
        'node_modules/(?!(jest-)?@react-native|@react-navigation|@storybook|@unimodules|expo-|react-native|d3-|internmap|@miblanchard|@gorhom)',
      ],
      moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
      testPathIgnorePatterns: [
        '/node_modules/',
        '/android/',
        '/ios/',
        '/coverage',
      ],
      setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
      displayName: 'UNIT',
      testMatch: ['**/?(*.)+(spec).{js,jsx,ts,tsx}'],
      rootDir: './',
      cache: true,
      preset: 'react-native',
      roots: ['<rootDir>'],
      moduleNameMapper: {
        '@/(.*)': '<rootDir>/src/$1',
      },
    },
    // {
    //   displayName: 'E2E',
    //   transformIgnorePatterns: [
    //     'node_modules/(?!(jest-)?@react-native|@react-navigation|@storybook|@unimodules|expo-|react-native|d3-|internmap|@miblanchard|@gorhom)',
    //   ],
    //   moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
    //   testPathIgnorePatterns: [
    //     '/node_modules/',
    //     '/android/',
    //     '/ios/',
    //     '/coverage',
    //   ],
    //   setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    //   testMatch: ['**/?(*.)+(test).ts'],
    //   preset: 'react-native',
    //   rootDir: './',
    //   roots: ['<rootDir>'],
    //   moduleNameMapper: {
    //     '@/(.*)': '<rootDir>/src/$1',
    //   },
    // },
  ],
};
