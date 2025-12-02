const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("안녕하세요 강아지 서버 입니다.");
});

module.exports = router;
