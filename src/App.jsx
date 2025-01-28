import {
  initFCM,
  MyPage,
  HomePage,
  ProductDetailPage,
  ProductRegisterPage,
  BiddingListPage,
  SearchPage,
} from './features'
import { Navigate, Route, Routes } from 'react-router-dom'
import ExploreLayout from './layouts/ExploreLayout'
import DefaultLayout from './layouts/DefaultLayout'
import style from './App.module.css'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  initFCM()

  return (
    <div className={`max-w-lg ${style.container}`}>
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
        <Route path='/popup' element={<DefaultLayout back />}>
          <Route path='product/register' element={<ProductRegisterPage />} />
          <Route path='product/:id' element={<ProductDetailPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
