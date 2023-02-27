// 모듈 삽입 및 라우터 객체 생성
const express = require( 'express' );
const router = express.Router();


// 라우터 설정
router.get( '/', ( req, res ) => {
	res.send( '<h1>Express .. ♣</h1>' );
} );


// 라우터 객체 내보내기
module.exports = router;