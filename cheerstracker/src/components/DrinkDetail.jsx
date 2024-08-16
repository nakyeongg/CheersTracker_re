import React from 'react'
import sun from '../assets/img/Drink/sun.svg';
import normal_weather from '../assets/img/Drink/normal_weather.svg';
import rain from '../assets/img/Drink/rain.svg';
import happy from '../assets/img/Drink/happy.svg';
import normal from '../assets/img/Drink/normal.svg';
import cry from '../assets/img/Drink/cry.svg';
import Down from '../assets/img/Drink/Down.svg';
import Up from '../assets/img/Drink/Up.svg';
import minus from '../assets/img/Drink/minus.svg';
import plus from '../assets/img/Drink/plus.svg';
import checked from '../assets/img/Drink/checked.svg';
import nocheck from '../assets/img/Drink/nocheck.svg';
import beer from '../assets/img/Drink/beer.svg';
import cocktail from '../assets/img/Drink/cocktail.svg';
import makgeolli from '../assets/img/Drink/makgeolli.svg';
import soju from '../assets/img/Drink/soju.svg';
import whisky from '../assets/img/Drink/whisky.svg';
import wine from '../assets/img/Drink/wine.svg';

const DrinkDetail = () => {
  return (
    <div className='drink-detail-container'>
        <div className='drink-create-header'>
            <h1>음주 기록</h1>
            <div>
                <button className='save-btn'>수정하기</button>
            </div>
        </div>
        <div className='drink-create-main-container'>
            <div className='drink-create-top'>
                <div className='select-date'>
                    <p>7월 16일</p>
                </div>
                <header>
                    
                <div className='drink-time-dropdown-container detail-time-container'>
                    <div className='drink-create-top-box drink-detail-time'>
                      <p>음주시간</p>
                      <p>1~2시간</p>
                    </div>
                    
                </div>
                <div className='drink-create-top-box'>
                    <p>날씨</p>
                    <div>
                        <img src={sun} alt="날씨 좋음" className='drink-clicked'/>
                        <p className='drink-clicked'>좋음</p>
                    </div>
                    <div>
                        <img src={normal_weather} alt="날씨 보통" />
                        <p>보통</p>
                    </div>
                    <div>
                        <img src={rain} alt="날씨 나쁨" />
                        <p>나쁨</p>
                    </div>
                </div>
                <div className='drink-create-top-box'>
                    <p>기분</p>                    
                    <div>
                        <img src={happy} alt="기분 좋음"  className='drink-clicked'/>
                        <p className='drink-clicked'>좋음</p>
                    </div>
                    <div>
                        <img src={normal} alt="기분 보통" />
                        <p>보통</p>
                    </div>
                    <div>
                        <img src={cry} alt="기분 나쁨" />
                        <p>나쁨</p>
                    </div>
                </div>
                </header>
            </div>             
            <div className='container-line'></div>
            <div className='drink-detail-type-container'>
                <div className='drink-detail-type clicked-drink-type'>
                  <img src={beer} alt="" />
                  <h2>맥주</h2>
                  <div>
                    <h3>3</h3>
                    <h4>잔</h4>
                  </div>
                </div>
                <div className='drink-detail-type'>
                  <img src={cocktail} alt="" />
                  <h2>기타주
                    <p>칵테일, 진, 인삼주 등</p>
                  </h2>
                  <div>
                    <h3>0</h3>
                    <h4>잔</h4>
                  </div>
                </div>
                <div className='drink-detail-type'>
                  <img src={soju} alt="" />
                  <h2>소주</h2>
                  <div>
                    <h3>0</h3>
                    <h4>잔</h4>
                  </div>
                </div>
                <div className='drink-detail-type'>
                  <img src={whisky} alt="" />
                  <h2>증류주
                    <p>소주 외 (위스키, 브랜디, 럼 등)</p>
                  </h2>
                  <div>
                    <h3>0</h3>
                    <h4>잔</h4>
                  </div>
                </div>
                <div className='drink-detail-type drink-type-bottom'>
                  <img src={wine} alt="" />
                  <h2>과실주</h2>
                  <div>
                    <h3>0</h3>
                    <h4>잔</h4>
                  </div>
                </div>
                <div className='drink-detail-type drink-type-bottom'>
                  <img src={makgeolli} alt="" />
                  <h2>발효주
                    <p>맥주, 과실주 외 (탁주, 약주, 청주 등)</p>
                  </h2>
                  <div>
                    <h3>0</h3>
                    <h4>잔</h4>
                  </div>
                </div>
            </div> 
            <div className='container-line2'></div>
            <div className='memo-container2'>
              <h2>메모</h2>
              <p>낮에 만나서 안 마실 줄 알았는데 어쩌다가 치맥을 해버렸다. 맛있긴 했지만 최소한 내일은 금주해야지!</p>
            </div>

      </div>
    </div>
  );
}

export default DrinkDetail;
