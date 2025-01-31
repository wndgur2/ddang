import {
  initFCM,
  MyPage,
  HomePage,
  ProductDetailPage,
  ProductRegisterPage,
  BiddingListPage,
  SearchPage,
  WelcomePage,
} from './features'
import { Route, Routes } from 'react-router-dom'
import ExploreLayout from './layouts/ExploreLayout'
import DefaultLayout from './layouts/DefaultLayout'
import NotFoundPage from './pages/NotFoundPage'
import SignupPage from './features/user/pages/SignupPage'
import LoginPage from './features/user/pages/LoginPage'
import ProductListPage from './features/product/pages/ProductListPage'
import EditProfilePage from './features/user/pages/EditProfilePage'
import ChargePage from './features/user/pages/ChargePage'
import PaymentHistory from './features/payment/pages/PaymentHistory'

function App() {
  initFCM()

  return (
    <div className={`w-full h-dvh mx-auto bg-white max-w-lg overflow-x-hidden`}>
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/explore' element={<ExploreLayout />}>
          <Route index element={<HomePage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='search/products' element={<ProductListPage />} />
        </Route>
        <Route path='/' element={<DefaultLayout />}>
          <Route path='bidding-list' element={<BiddingListPage />}>
            <Route
              index
              element={
                <ProductListPage filter={product => product.myBidPrice} />
              }
            />
            <Route
              path='sell'
              element={
                <ProductListPage
                  filter={product => product.endTime < new Date().toISOString()}
                />
              }
            />
          </Route>
          <Route path='mypage' element={<MyPage />} />
        </Route>
        <Route path='/popup' element={<DefaultLayout back />}>
          <Route path='product/register' element={<ProductRegisterPage />} />
          <Route path='product/:id' element={<ProductDetailPage />} />
          <Route path='signup' element={<SignupPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='mypage/edit-profile' element={<EditProfilePage />} />
          <Route path='mypage/charge' element={<ChargePage />} />
        </Route>
        <Route path='/mypage' element={<DefaultLayout back />}>
          <Route path='payment-history' element={<PaymentHistory />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
