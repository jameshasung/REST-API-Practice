/* 
	- 디렉토리 : /FrontEnd/REST-API/001/App.js
	- 주요내용 : REST API 웹 서비스 JSON Server 구축
				npm install express --save
				npm install json-server --save

				[ ★ json-server 모듈 없이 구축하기 ]
				1. Express 모듈 설치
				2. 라우터 객체의 route() 메서드 사용하여 라우팅 처리
				3. REST 요청에 대한 간단한 응답을 구현
*/
// 모듈 삽입 및 서버 객체 생성
const express = require("express");
const app = express();
const port = 3000;

// 라우터 파일들
const mainRouter = require("./router/mainRouter.js");
const userRouter = require("./router/userRouter.js");

// 미들웨어 설정 - 정적파일, 바디파서, 쿠키파서, 세션, 파비콘 등..
app.use("/favicon.ico", (req, res) => res.status(204)); // No Content
app.use("/", mainRouter);
app.use("/user", userRouter);

// 클라이언트 요청 수신 대기
app.listen(port, (err) => {
  if (err) throw err;

  console.log(`Server Running at ${port} Port from App.js ~~~ ★`);
});
