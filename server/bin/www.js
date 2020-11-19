#!/usr/bin/env node
// #! Shebang 指明脚本文件的解释程序。/usr/bin/env是到环境变量里查找node的安装路径

"use strict";

const app = require("../app");
const http = require("http");
const debug = require("debug")("express:server");

// 配置网络请求模块
// 检查PORT环境变量，确定将http服务器绑定到的端口，默认为3007
const port = normalizePort(process.env.port || "3007");
// 为HTTP服务器设置端口
app.set("port", port);
// 创建HTTP服务器，传入express app
const httpServer = http.createServer(app);

httpServer.listen(port);
// 在创建应用程序期间发生错误时将触发错误事件
httpServer.on("error", onError);
// 当http服务器启动并正在侦听指定端口时，将触发侦听事件
httpServer.on("listening", onListening);

/**
 * 端口标准化
 * @param val 端口号
 */
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * 监听错误事件
 * @param error
 */
function onError(error) {
  console.log("错误", error);
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " alreay is use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * 监听侦听事件
 */
function onListening() {
  const addr = httpServer.address();
  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
  debug("Listening on " + bind);
  console.log("侦听", bind);
}
