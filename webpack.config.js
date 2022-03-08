const path = require("path")

module.exports = {
  mode: "development", // 配置模式
  entry: "./src/index.js", // 打包入口， 可以是相对路径
  output: {
    filename: "build.js", // 输出文件名
    path: path.resolve(__dirname, "dist"), //打包输出路径
  },
  module: {
    rules: [
      {
        test: /\.css$/, //一般为一个正则表达式，用于匹配我们需要处理的文件
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              esModule: false, // 设置在css-loader解析url的时候不转换为esModule
            },
          },
          "postcss-loader",
        ], // 会从右到左或者从后向前
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        //第一中方式
        // use: ["file-loader"], 在require的后面要跟上default
        // 第二种方式
        // use: [
        //   {
        //     loader: "file-loader",
        //     options: {
        //       esModule: false,
        //     },
        //   },
        // ],
        // 第三中方式
        // use: ["file-loader"], //但是要将图片作为模块导入
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash:8].[ext]", // 设置打包后的文件名和后缀
            outputPath: "images", // 打包后的文件夹名
          },
        },
      },
    ],
  },
}
