module.exports = {
  retainLines: true,
  sourceMaps: true,
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          electron: '13',
        },
      },
    ],
  ],
};
