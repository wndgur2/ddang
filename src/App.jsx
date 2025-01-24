import Navbar from './components/navbar/Navbar'
import { initFCM } from './features'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import ExploreLayout from './layouts/ExploreLayout'
import ProductRegisterPage from './pages/ProductRegisterPage'
import PopupLayout from './layouts/PopupLayout'
import BiddingListPage from './pages/BiddingListPage'
import DefaultLayout from './layouts/DefaultLayout'
import MyPage from './pages/MyPage'
import ProductDetailPage from './pages/ProductDetailPage'
import style from './App.module.css'

function App() {
  initFCM()

  return (
    <div className={`flex flex-col h-screen ${style.container}`}>
      <Routes>
        <Route path='/explore' element={<ExploreLayout />}>
          <Route index element={<HomePage />} />
          <Route path='search' element={<SearchPage />} />
        </Route>
        <Route path='/' element={<Navigate to='/explore' />} />
        <Route path='/' element={<DefaultLayout />}>
          <Route path='bidding-list' element={<BiddingListPage />} />
          <Route path='mypage' element={<MyPage />} />
        </Route>
        <Route path='/popup' element={<PopupLayout />}>
          <Route path='product/register' element={<ProductRegisterPage />} />
          <Route path='product/:id' element={<ProductDetailPage />} />
        </Route>
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
      <Navbar />
    </div>
  )
}

export default App
