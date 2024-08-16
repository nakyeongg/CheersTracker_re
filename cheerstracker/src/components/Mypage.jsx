import React from 'react'
import comment from '../assets/img/mypage/comment.svg';
import like from '../assets/img/mypage/like.svg';
import write from '../assets/img/mypage/write.svg';

const Mypage = () => {
  return (
    <div className='mypage-container'>
      <h1>마이페이지</h1>
      <div className='mypage-account'>
        <h2>계정</h2>
        <div>
            <h3>아이디</h3>
            <h4>cheers2024</h4>
        </div>
        <div>
            <h3>비밀번호</h3>
            <h4>********</h4>
        </div>
        <button>
            비밀번호 변경
        </button>
      </div>
      <div className='line-container3'></div>
      <div className='mypage-collect'>
        <h2>모아보기</h2>
        <div>
            <img src={write} alt="" />
            <h3>내가 쓴 글</h3>
        </div>
        <div>
            <img src={like} alt="" />
            <h3>좋아요 누른 글</h3>
        </div>
        <div>
            <img src={comment} alt="" />
            <h3>댓글 단 글</h3>
        </div>
      </div>
      <div className='account-delete'>CheersTracker 탈퇴하기</div>
    </div>
  )
}

export default Mypage
