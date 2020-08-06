const path = require('path');
const { lstatSync, readdirSync } = require('fs');
const glob = require('glob');
const basePath = path.resolve(__dirname, '../', 'packages');
const sassPath = path.resolve(__dirname, '../', 'packages', 'node_modules');
const packages = readdirSync(basePath).filter((name) =>
  lstatSync(path.join(basePath, name)).isDirectory()
);

module.exports = ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.scss$/,
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            sourceMap: true,
            localIdentName: '[name]_[local]_[hash:base64:5]'
          }
        },

        {
          loader: 'sass-loader'
        }
      ]
    },

    {
      test: /\.stories\.tsx?$/,
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: { parser: 'typescript' }
        }
      ],
      enforce: 'pre'
    },

    {
      test: /\.(ts|tsx)$/,
      loader: require.resolve('awesome-typescript-loader')
    }
  );

  config.resolve.extensions.push('.ts', '.tsx');
  Object.assign(config.resolve.alias, {
    ...packages.reduce(
      (acc, name) => ({
        ...acc,
        [`@hi5/${name}`]: path.join(basePath, name, 'src')
      }),
      {}
    )
  });

  return config;
};
