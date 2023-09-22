module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '^@/(.+)': './src/\\1',
          '^@menu/(.+)': './src/screens/menu/\\1',
          '^@game/(.+)': './src/screens/game/\\1',
        },
        cwd: 'packagejson',
      },
    ],
  ],
};
