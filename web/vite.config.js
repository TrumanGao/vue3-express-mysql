module.exports = {
  port: 3040, // 服务端口
  proxy: {
    // "/api": {
    //   target: "http://jsonplaceholder.typicode.com",
    //   changeOrigin: true,
    //   rewrite: path => path.replace(/^\/api/, "")
    // }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#1DA57A",
            "link-color": "#1DA57A",
            "border-radius-base": "2px"
          },
          javascriptEnabled: true
        }
      }
    }
  }
};
