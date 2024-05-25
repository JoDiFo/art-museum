import path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildMode, IBuildEnv, IBuildPaths } from "./config/build/types";

export default (env: IBuildEnv) => {
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const mode: BuildMode = env.mode || "development";
  const port: number = env.port || 3000;
  const isDev: boolean = mode === "development";

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    port,
    paths,
    isDev,
  });

  return config;
};
