const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: isProd ? '/LabPage' : '',
  assetPrefix: isProd ? '/LabPage/' : '',
  images: { unoptimized: true },
};