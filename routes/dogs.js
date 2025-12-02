const express = require("express");
const router = express.Router();
const dogsController = require("../controllers/dogsController");
const { validateDog } = require("../schemas/dogsSchema");

// 강아지 리스트 조회
router.get("/", dogsController.getDogs);

// 강아지 추가
router.post("/", validateDog, dogsController.addDog);

// 강아지 삭제
router.delete("/:id", dogsController.deleteDog);

// 강아지 정보 업데이트
router.put("/:id", validateDog, dogsController.updateDog);

module.exports = router;
