const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: '',
  assetPrefix: '',
  images: { unoptimized: true },
};