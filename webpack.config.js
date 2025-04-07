const path = require("path");
const PugPlugin = require("pug-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  // entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    // filename: "bundle.js",
  },

  resolve: {
    alias: {
      Views: path.join(__dirname, "src/views/"),
      Images: path.join(__dirname, "src/assets/images/"),
      Fonts: path.join(__dirname, "src/assets/fonts/"),
      Styles: path.join(__dirname, "src/assets/styles/"),
      Scripts: path.join(__dirname, "src/assets/scripts/"),
    },
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(), // Минификатор для JavaScript
      new CssMinimizerPlugin(), // Минификатор для CSS
    ],
  },

  plugins: [
    new PugPlugin({
      pretty: "auto", // false, если нужно минификация html
      entry: {
        index: "./src/views/pages/index.pug", // => dist/index.html
        // about: './src/views/about.pug' // можно настроить несколько страниц
      },
      js: {
        // JS output filename, used if `inline` option is false (defaults)
        filename: "assets/js/[name].[contenthash:8].js",
        //inline: true, // inlines JS into HTML
      },
      css: {
        // CSS output filename, used if `inline` option is false (defaults)
        filename: "assets/css/[name].[contenthash:8].css",
        //inline: true, // inlines CSS into HTML
      },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            targets: "defaults",
            presets: [["@babel/preset-env"]],
          },
        },
      },
      {
        test: /\.(s?css|sass)$/,
        use: [
          "css-loader", // Преобразует CSS в CommonJS
          {
            loader: "postcss-loader", // Обрабатывает CSS с помощью PostCSS
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env", // Позволяет использовать современные CSS-функции
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          "sass-loader", // Преобразует SASS в CSS
        ],
      },
      {
        test: /\.(ico|png|jp?g|webp|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[name].[hash:8][ext][query]",
        },
      },
      {
        // To use fonts on pug files:
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext][query]",
        },
      },
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },
};
