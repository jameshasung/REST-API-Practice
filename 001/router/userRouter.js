// 모듈 삽입 및 라우터 객체 생성
const express = require( 'express' );
const router = express.Router();


// 라우터 설정 - 전체 회원 조회(10명 단위 페이징) - http://localhost:3000/user
router.get( '/', ( req, res ) => {
	res.send( `<h1>전체 회원 조회하였습니다.</h1>` );
} );


// 라우터 설정 - 특정 번호 회원 조회


// 라우터 설정 - 회원 생성
router.post( '/', ( req, res ) => {
	res.send( `<h1>회원 생성하였습니다.</h1>` );
} );


// 라우터 설정 - 회원 수정
router.put( '/:num', ( req, res ) => {
	// 넘어온 값 받기
	const userNumber = parseInt( req.params.num );
	res.send( `<h1>${ userNumber }번 회원 수정하였습니다.</h1>` );
} );


// 라우터 설정 - 회원 삭제
router.delete( '/:num', ( req, res ) => {
	// 넘어온 값 받기
	const userNumber = parseInt( req.params.num );
	res.send( `<h1>${ userNumber }번 회원 삭제하였습니다.</h1>` );
} );



// 라우터 객체 내보내기
module.exports = router;