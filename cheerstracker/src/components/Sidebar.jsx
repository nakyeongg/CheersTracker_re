import React, {useState} from 'react'
import Calander from '../assets/img/sidebar/Calander.svg';
import Chart from '../assets/img/sidebar/Chart.svg';
import Community from '../assets/img/sidebar/Community.svg';
import Drink from '../assets/img/sidebar/Drink.svg';
import Logout from '../assets/img/sidebar/Logout.svg';
import Menu from '../assets/img/sidebar/Menu.svg';
import Nodrink from '../assets/img/sidebar/Nodrink.svg';
import User from '../assets/img/sidebar/User.svg';
import BigLogo from '../assets/img/sidebar/BigLogo.svg';
import MiniLogo from '../assets/img/sidebar/MiniLogo.svg';

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const clickMenu = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`sidebar-container ${sidebarOpen ? 'open' : 'closed'}`}>
        <div>
          <img src={Menu} alt="메뉴" className={`menu ${sidebarOpen ? '' : 'menu-closed'}`} onClick={clickMenu}/>
        </div>
        <div className={`logout-container ${sidebarOpen ? '' : 'logout-container-closed'}`}>
          <div>
            {sidebarOpen && <p className='nickname'>닉네임</p>}
            {sidebarOpen && <p className='email'>이메일주소</p>}
          </div>
          <img src={Logout} alt="로그아웃" className={`logout ${sidebarOpen ? '' : 'logout-closed'}`}/>
        </div>
        <div>
          <img src={Calander} alt="캘린더" className={`calander ${sidebarOpen ? '' : 'calander-closed'}`} />
          {sidebarOpen && <p>캘린더</p>}
        </div>
        <div>
          <img src={Drink} alt="음주기록"  className={`drink ${sidebarOpen ? '' : 'drink-closed'}`}/>
          {sidebarOpen && <p>음주기록</p>}
        </div>
        <div>
          <img src={Nodrink} alt="금주기록"  className={`nodrink ${sidebarOpen ? '' : 'nodrink-closed'}`}/>
          {sidebarOpen && <p>금주기록</p>}
        </div>
        <div>
          <img src={Chart} alt="분석"  className={`chart ${sidebarOpen ? '' : 'chart-closed'}`}/>
          {sidebarOpen && <p>분석</p>}
        </div>
        <div>
          <img src={Community} alt="커뮤니티"  className={`community ${sidebarOpen ? '' : 'community-closed'}`}/>
          {sidebarOpen && <p>커뮤니티</p>}
        </div>
        <div>
          <img src={User} alt="마이페이지"  className={`mypage ${sidebarOpen ? '' : 'mypage-closed'}`}/>
          {sidebarOpen && <p>마이페이지</p>}
        </div>          
        {sidebarOpen && <img src={BigLogo} alt="큰 로고 이미지" className='big-logo'></img>}
        {!sidebarOpen && <img src={MiniLogo} alt="미니 로고 이미지" className='mini-logo'></img>}
    </div>
  )
}

export default Sidebar
