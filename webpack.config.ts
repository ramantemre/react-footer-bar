import * as path from "path";
import * as webpack from "webpack";
// in case you run into any typescript error when configuring `devServer`
import "webpack-dev-server";

const config: webpack.Configuration = {
  mode: "production",
  entry: "./src/lib/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.ts",
  },
  module: {
    rules: [
      //   {
      //     test: /\.[tj]sx?$/,
      //     loader: "ts-loader",
      //   },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
    ],
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".js", ".ts", ".tsx"],
  },
};

export default config;
