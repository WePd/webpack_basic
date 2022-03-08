import images from "../assert/2.jpg"

const packImg = () => {
  const container = document.createElement("div")
  // 图片是通过src
  const image = document.createElement("img")
  // image.src = require("../assert/2.jpg").default // 这个时候是一个对象，需要其中的default属性
  // image.src = require("../assert/2.jpg") // 在webpack.config.js中配置file-laoder的option属性就可以不要写default
  image.src = images
  image.width = 500
  container.appendChild(image)

  // 通过背景图片
  const bgimage = document.createElement("div")
  bgimage.className = "Bgimg"
  container.appendChild(bgimage)
  return container
}

document.body.appendChild(packImg())
