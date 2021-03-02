const CracoLessPlugin = require('craco-less');
module.exports = {
  webpack: {},
  babel: {
    presets: [],
    plugins: [
      [
        'import',
        { libraryName: 'antd', libraryDirectory: 'es', style: true },
        'antd',
      ],
    ],
    loaderOptions: (babelLoaderOptions, { env, paths }) => {
      return babelLoaderOptions;
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  devServer: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://placeholder.com/',
        changeOrigin: true,
        secure: false,
        xfwd: false,
      },
    },
  },
};
