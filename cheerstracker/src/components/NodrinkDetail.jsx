import React from 'react'
import run from '../assets/img/Nodrink/run.svg'
import logo from '../assets/img/Nodrink/Logo_long.svg'
const NodrinkDetail = () => {
  return (
    <div className='nodrink-detail-big-container'>
      <div className='nodrink-detail-header'>
        <h1>OOO님의 금주 기록</h1>
        <div className='nodrink-toggle'>
          <div className='nodrink-toggle-public'></div>
          <div>공개</div>
        </div>
      </div>
      <div className='nodrink-detail-top'>
        <div>
            오늘,
            <p>13일</p>
            째 금주 중
        </div>
        <div>
            <img src={run} alt="" />
        </div>
        <div>
            목표인 <p>31일</p>까지 <p>18일</p> 남았어요!
        </div>
      </div>
      <div className='nodrink-detail-container nodrink1'>
        <div>
            <h3>금주 시작</h3>
            <div>
                2024. 07. 04. 목요일
            </div>
        </div>
        <span></span>
        <div>
            <h3>금주 종료(목표)</h3>
            <div>
                2024. 08. 03. 토요일
            </div>
        </div>
      </div>
      <div className='nodrink-detail-container nodrink2'>
        <div>
            <h3>절약비용</h3>
            <h4>221,000
                <p>\</p>
            </h4>
        </div>
        <span></span>
        <div>
            <h3>섭취하지 않은 칼로리</h3>
            <h4>7,200
                <p>kcal</p>
            </h4>
        </div>
      </div>
      <div className='nodrink-detail-container nodrink3'>
        <h3>금주 목표</h3>
        <h4>건강검진 결과에서 꼭 금주하라고 나왔으니까 금주하고 돈도 아끼자!</h4>
      </div>
      <img src={logo} alt="가로 로고 이미지" className='long-logo' />
    </div>
  )
}

export default NodrinkDetail
