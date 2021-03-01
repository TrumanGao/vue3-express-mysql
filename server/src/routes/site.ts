var express = require("express");
var router = express.Router();
const site = require("../controllers/siteController");

/* GET site */
router.get("/sites", site.getSites);

module.exports = router;
