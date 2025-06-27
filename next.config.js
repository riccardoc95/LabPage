const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: isProd ? '' : '',
  assetPrefix: isProd ? '' : '',
  images: { unoptimized: true },
};