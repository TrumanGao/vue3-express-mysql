const dataConfig = require("../controllers/db");

// 获取网站
module.exports = {
  getSites(req: any, res: any) {
    const sql = "select * from site";

    dataConfig.sqlConnect(sql, [], (err: any, data: any) => {
      if (err) {
        console.log("site表连接失败", err);
      } else {
        console.log("site表连接成功", data);
        res.send({
          list: data
        });
      }
    });
  }
};
