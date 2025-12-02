const app = require("./app");
const dotenv = require("dotenv");

// .env 파일 경로 명시
dotenv.config({ path: "./backend/.env" });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
