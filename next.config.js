const withCss = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
module.exports = withCss(
  withSass({
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
            fallback: {
              loader: "file-loader",
              options: {
                publicPath: "/_next/static/images",
                outputPath: "static/images"
              }
            }
          }
        }
      });

      return config;
    },
    target: "serverless"
  })
);
