const cors = require('cors');

const corsMiddleware = cors({
  origin: '*', // 모든 도메인 허용
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
});

module.exports = corsMiddleware;