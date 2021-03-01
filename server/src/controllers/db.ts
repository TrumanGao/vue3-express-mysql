// 该模块用于连接数据库
const mysql = require("mysql");

module.exports = {
  // 数据库配置
  config: {
    protocol: "mysql",
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "gfx93728",
    database: "sitemap"
  },
  // 使用 mysql 连接池的方式连接数据库，数据量大时可以减少数据查询时间。连接池对象
  sqlConnect(sql: string, sqlArr: string[], callback: Function) {
    const pool = mysql.createPool(this.config);
    pool.getConnection((err: any, conn: any) => {
      if (err) {
        console.log("数据库连接失败", err);
      } else {
        console.log("数据库连接成功", conn);
        // 事件驱动回调
        conn.query(sql, sqlArr, callback);
        // 释放连接
        conn.release();
      }
    });
  }
};
