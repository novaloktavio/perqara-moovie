// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  presets: [
    require('./src/preset'),
  ],
};
