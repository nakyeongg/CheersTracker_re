import React, { useState, useEffect } from 'react';
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

const DrinkCreate = () => {

    const data = {
        duration: '음주 시간 선택'
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(data.duration || '음주 시간 선택');
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const handleOptionSelect = (option) => {
      setSelectedOption(option);
      setIsDropdownOpen(false);
    };

    const [drinkOptions, setDrinkOptions] = useState([
        { type: '맥주', isChecked: false, quantity: 0, descriptio2: '', description: '', img: beer },
        { type: '소주', isChecked: false, quantity: 0, description2: '', description: '', img: soju },
        { type: '과실주', isChecked: false, quantity: 0, description2: '', description: '(와인, 포도주)', img: wine },
        { type: '기타주', isChecked: false, quantity: 0, description2: '칵테일, 진, 인삼주 등', description: '', img: cocktail },
        { type: '증류주', isChecked: false, quantity: 0, description2: '소주 외 (위스키, 브랜디, 럼 등)', description: '', img: whisky },
        { type: '발효주', isChecked: false, quantity: 0, description2: '맥주, 과실주 외 (탁주, 약주, 청주 등)', description: '(막걸리)', img: makgeolli },
    ]);

    useEffect(() => {
        if (data && data.drinks) {
          const updatedOptions = drinkOptions.map((option) => {
            const found = data.drinks.find((drink) => drink.type === option.type);
            return {
              ...option,
              isChecked: found ? found.isChecked : option.isChecked,
              quantity: found ? found.quantity : option.quantity,
              description: found ? found.description : option.description
            };
          });
          setDrinkOptions(updatedOptions);
        }
      }, [data]);

    const handleCheckboxChange = (index) => {
        setDrinkOptions((prevOptions) =>
          prevOptions.map((option, i) =>
            i === index ? { ...option, isChecked: !option.isChecked } : option
          )
        );
    };

    const handleIncrement = (index) => {
        setDrinkOptions((prevOptions) =>
          prevOptions.map((option, i) =>
            i === index && option.isChecked
              ? { ...option, quantity: option.quantity + 1 }
              : option
          )
        );
    };

    const handleDecrement = (index) => {
        setDrinkOptions((prevOptions) =>
          prevOptions.map((option, i) =>
            i === index && option.isChecked && option.quantity > 0
              ? { ...option, quantity: option.quantity - 1 }
              : option
          )
        );
    };

    const firstColumn = drinkOptions.slice(0, 3);
    const secondColumn = drinkOptions.slice(3, 6);

    return (
        <div className='drink-create-container'>
            <div className='drink-create-header'>
                <h1>음주 기록</h1>
                <div>
                    <button className='cancel-btn'>취소하기</button>
                    <button className='save-btn'>저장하기</button>
                </div>
            </div>
            <div className='drink-create-main-container'>
                <div className='drink-create-top'>
                    <div className='select-date'>
                        <p>7월 16일</p>
                        <img src={Down} alt="" className='down-icon'/>
                    </div>
                    <header>
                        
                    <div className='drink-time-dropdown-container'>
                        <div className='drink-time-dropdown-toggle drink-create-top-box' onClick={toggleDropdown}>
                            {selectedOption}
                            <img src={Down} alt="드롭다운 아이콘" className='down-icon'/>
                        </div>
                        {isDropdownOpen && (
                            <div className='drink-time-dropdown-options'>
                                <div className='drink-time-dropdown-option line' onClick={() => handleOptionSelect('음주 시간 선택')}>
                                    음주 시간 선택
                                    <img src={Up} alt="" />
                                </div>
                                <div className='drink-time-dropdown-option line' onClick={() => handleOptionSelect('1시간 미만')}>
                                    1시간 미만
                                </div>
                                <div className='drink-time-dropdown-option line' onClick={() => handleOptionSelect('1~2시간')}>
                                    1~2시간
                                </div>
                                <div className='drink-time-dropdown-option line' onClick={() => handleOptionSelect('2~3시간')}>
                                    2~3시간
                                </div>
                                <div className='drink-time-dropdown-option line' onClick={() => handleOptionSelect('3~4시간')}>
                                    3~4시간
                                </div>
                                <div className='drink-time-dropdown-option line' onClick={() => handleOptionSelect('4시간 이상 6시간 미만')}>
                                    4시간 이상 6시간 미만
                                </div>
                                <div className='drink-time-dropdown-option line' onClick={() => handleOptionSelect('6시간 이상 12시간 미만')}>
                                    6시간 이상 12시간 미만
                                </div>
                                <div className='drink-time-dropdown-option line' onClick={() => handleOptionSelect('12시간 이상 18시간 미만')}>
                                    12시간 이상 18시간 미만
                                </div>
                                <div className='drink-time-dropdown-option' onClick={() => handleOptionSelect('18시간 이상 24시간 미만')}>
                                    18시간 이상 24시간 미만
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='drink-create-top-box'>
                        <p>날씨</p>
                        <div>
                            <img src={sun} alt="날씨 좋음" />
                            <p>좋음</p>
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
                            <img src={happy} alt="기분 좋음" />
                            <p>좋음</p>
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

                <div className='drink-options-big-container'>
                    <div className='drink-options-group'>
                        {firstColumn.map((drink, index) => (
                            <div className='alcohol-quantity' key={index}>
                                <img
                                    src={drink.isChecked ? checked : nocheck}
                                    alt={drink.isChecked ? "Checked" : "Unchecked"}
                                    className="checkbox-icon"
                                    onClick={() => handleCheckboxChange(index)}
                                />
                                <div className={`drink-type ${drink.isChecked ? 'active' : ''}`}>
                                    <p className={`drink-type-name ${drink.isChecked ? 'active' : ''}`}>{drink.type}
                                        <span className='drink-description'>{drink.description}</span>
                                    </p>
                                    <p className={`drink-description2 ${drink.isChecked ? 'active' : ''}`}>{drink.description2}</p>
                                </div>
                                <div className="quantity-control">
                                    <img src={minus} alt="Minus" className="quantity-btn" onClick={() => handleDecrement(index)} />
                                    <span className="quantity">{drink.quantity}</span>
                                    <img src={plus} alt="Plus" className="quantity-btn" onClick={() => handleIncrement(index)} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='drink-options-group'>
                        {secondColumn.map((drink, index) => (
                            <div className='alcohol-quantity' key={index + 3}>
                                <img
                                    src={drink.isChecked ? checked : nocheck}
                                    alt={drink.isChecked ? "Checked" : "Unchecked"}
                                    className="checkbox-icon"
                                    onClick={() => handleCheckboxChange(index + 3)}
                                />
                                <div className={`drink-type ${drink.isChecked ? 'active' : ''}`}>
                                    <p className={`drink-type-name ${drink.isChecked ? 'active' : ''}`}>{drink.type}
                                        <span className='drink-description'>{drink.description}</span>
                                    </p>
                                    <p className={`drink-description2 ${drink.isChecked ? 'active' : ''}`}>{drink.description2}</p>
                                </div>
                                <div className="quantity-control">
                                    <img src={minus} alt="Minus" className={`quantity-btn ${drink.isChecked ? 'active' : ''}`} onClick={() => handleDecrement(index + 3)} />
                                    <span className={`quantity ${drink.isChecked ? 'active' : ''}`}>{drink.quantity}</span>
                                    <img src={plus} alt="Plus" className={`quantity-btn ${drink.isChecked ? 'active' : ''}`} onClick={() => handleIncrement(index + 3)} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='ment-container'>
                    <p className='ment1'>음주 기록을 자세히 입력할 수록 나의 음주 습관을 더 자세히 분석할 수 있어요!</p>
                    <div>
                        <p>단위 : 잔</p>
                        <div>
                            <p>1병 기준</p>
                            <span>
                            <p>맥주 </p> 2~3잔 <p>소주 </p> 7잔 <p>와인 </p> 5잔
                            </span>
                        </div>
                    </div>
                </div>
                <div className='container-line2'></div>

                <div className='memo-container'>
                    <h2>메모</h2>
                    <input type="text" placeholder='메모를 입력하세요. (250자 이내)'/>
                </div>
            </div>
        </div>
    );
}

export default DrinkCreate;
