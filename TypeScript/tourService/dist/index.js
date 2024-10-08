"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const tourRoutes_1 = __importDefault(require("./routes/tourRoutes"));
dotenv_1.default.config(); //.env 파일에서 환경 변수 로딩
const PORT = process.env.PORT || 3333;
const app = (0, express_1.default)();
//미들웨어 설정
app.use(express_1.default.json()); //json요청을 파싱
app.use((0, morgan_1.default)('dev')); //로깅
app.use(express_1.default.static(path_1.default.join(__dirname, 'public'))); //정적인 파일 경로 설정
console.log(__dirname); //src까지의 경로 출력됨
//기본 라우트 설정
app.get('/', (req, res) => {
    res.send(`<h1>Tour API 실행중..</h1>`);
});
//관광정보 관련 라우트
app.get('/api/tours', tourRoutes_1.default);
//서버 실행
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
