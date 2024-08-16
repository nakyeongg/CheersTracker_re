import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import DrinkCreate from './components/DrinkCreate';
import DrinkDetail from './components/DrinkDetail';
import NoDrinkCreate from './components/NodrinkCreate';
import NoDrinkDetail from './components/NodrinkDetail';
import Mypage from './components/Mypage';


const App = () => {
  return (
    <div className='contanier'>
      <Sidebar/>
      <BrowserRouter>
        <Routes>
          <Route path="/drink" element={<DrinkCreate />} />
          <Route path="/drink/detail" element={<DrinkDetail />} />
          <Route path="/nodrink" element={<NoDrinkCreate />} />
          <Route path="/nodrink/detail" element={<NoDrinkDetail />} />
          <Route path="/mypage" element={<Mypage />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
