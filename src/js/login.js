//将css文件作为一个模块导入
// import "../style/login.css" // 这样导入打包会出现错误
// import "../style/login.less"

function login() {
  const oH2 = document.createElement("h2")
  oH2.innerHTML = "css-loader的使用"
  oH2.className = "title"
  return oH2
}

document.body.appendChild(login())
