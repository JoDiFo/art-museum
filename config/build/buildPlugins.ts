import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { IBuildOptions } from "./types";

export function buildPlugins({
  paths,
  isDev,
}: IBuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ];
}
