import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Shop, CouponsPage, CartPage, HistoryPage } from './Pages/common';
import { Layout } from './UI/common';
import { API_ENUM, useAppDispatch } from '../common/common';
import { getShops, getCoupons } from '../store/actions';

function App () {
  const dispatch = useAppDispatch()
  useEffect(() => {
    void dispatch(getShops({}))
    void dispatch(getCoupons({}))
  }, [dispatch])

  return (
    <Layout>
      <Routes>
        <Route path={'/'} element={<Shop/>}/>
        <Route path={API_ENUM.SHOP} element={<Shop/>}/>
        <Route path={API_ENUM.CART} element={<CartPage/>}/>
        <Route path={API_ENUM.COUPONS} element={<CouponsPage/>}/>
        <Route path={API_ENUM.HISTORY} element={<HistoryPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
