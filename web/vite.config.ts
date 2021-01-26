module.exports = {
  port: 3040, // 服务端口
  open: true,
  proxy: {
    "/api": {
      target: "",
      changeOrigin: true,
      rewrite: (path: string) => path.replace(/^\/api/, "")
    }
  }
};
