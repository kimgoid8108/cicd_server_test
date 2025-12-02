const express = require('express');
const cors = require('./middlewares/corsMiddleware');
const indexRouter = require('./routes/index');
const dogsRouter = require('./routes/dogs');

const app = express();

// 미들웨어 설정
app.use(cors);
app.use(express.json());

// 라우트 설정
app.use('/', indexRouter);
app.use('/dogs', dogsRouter);

module.exports = app;