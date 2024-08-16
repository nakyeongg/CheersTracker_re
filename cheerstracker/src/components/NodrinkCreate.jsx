import React, {useState, useEffect}  from 'react'
import down from '../assets/img/Drink/Down.svg'
import minus from '../assets/img/Drink/minus.svg';
import plus from '../assets/img/Drink/plus.svg';
import checked from '../assets/img/Drink/checked.svg';
import nocheck from '../assets/img/Drink/nocheck.svg';

const NodrinkCreate = () => {

  const [drinkOptions, setDrinkOptions] = useState([
    { type: '맥주', isChecked: false, quantity: 0, descriptio2: '', description: ''},
    { type: '과실주', isChecked: false, quantity: 0, description2: '', description: '(와인, 포도주)'},
    { type: '발효주', isChecked: false, quantity: 0, description2: '맥주, 과실주 외 (탁주, 약주, 청주 등)', description: '(막걸리)'},
    { type: '소주', isChecked: false, quantity: 0, description2: '', description: ''},
    { type: '위스키', isChecked: false, quantity: 0, description2: '', description: ''},
    { type: '증류주', isChecked: false, quantity: 0, description2: '소주 외 (위스키, 브랜디, 럼 등)', description: '' },
    { type: '칵테일', isChecked: false, quantity: 0, description2: '', description: ''},
    { type: '혼성주', isChecked: false, quantity: 0, description2: '칵테일 외 혼성주 (인삼주, 매실주, 진 등)', description: '' },
  ]);



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
const thirdColumn = drinkOptions.slice(6, 9);

  return (
    <div className='nodrink-big-container'>
      <div className='nodrink-create-header'>
        <div>
          <h1>금주 기록</h1>
          <h2>금주를 시작해볼까요?</h2>
        </div>
        <button>저장하기</button>
      </div>
      <div className='nodrink-create-main-container'>
        <div className='nodrink-create-goal'>
          <div className='nodrink-create-goal-top'>
            <h3>금주 목표 설정</h3>
            <h4>한 번 입력한 목표는 수정할 수 없어요!</h4>
          </div>
          <div className='nodrink-create-goal-main'>
            <p>시작</p>
            <div>
              <p>2024. 07. 06. 화요일</p>
              <img src={down} alt="" />
            </div>
            <p>~</p>
            <p>종료</p>
            <div>
              <p>2024. 07. 06. 화요일</p>
              <img src={down} alt="" />
            </div>
          </div>
        </div>
        <div className='line-container'></div>
        <div className='nodrink-create-cost'>
          <div>
            <h2>평균 음주 지출 비용</h2>
            <h3>(1일 기준)</h3>            
          </div>
          <input type="text" placeholder='금액을 입력하세요.' />
          <p>\</p>
        </div>
        <div className='line-container'></div>
        <div className='nodrink-create-amount'>
          <div className='nodrink-create-amount-top'>
            <h2>평균 음주량</h2>
            <h3>(1일 기준)</h3>
          </div>

          <div className='drink-options-big-container nodrink-options'>
                    <div className='drink-options-group'>
                        {firstColumn.map((drink, index) => (
                            <div className='alcohol-quantity nodrink-alcohol-quantity' key={index}>
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
                            <div className='alcohol-quantity nodrink-alcohol-quantity' key={index+3}>
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
                        {thirdColumn.map((drink, index) => (
                            <div className='alcohol-quantity nodrink-alcohol-quantity' key={index+6}>
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
                </div>
                <div className='line-container'></div>
                <div className='nodrink-goal-container'>
                  <h2>금주 목표 (나에게 한마디)</h2>
                  <input type="text" placeholder='목표를 입력하세요. (50자 이내)'/>

                </div>


        </div>
      </div>
    </div>
  )
}

export default NodrinkCreate
