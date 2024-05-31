import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const svgUrlLoader = {
    test: /\.svg$/i,
    type: "asset",
    resourceQuery: /url/,
    exclude: /node_modules/,
  };

  const svgLoader = {
    test: /\.svg$/,
    resourceQuery: { not: [/url/] },
    use: ["@svgr/webpack"],
    exclude: /node_modules/,
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  return [typescriptLoader, svgLoader, fileLoader, svgUrlLoader];
}
