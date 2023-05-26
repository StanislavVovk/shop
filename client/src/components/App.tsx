import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Shop } from './common';
import { Layout } from './UI/common';
import { API_ENUM, useAppDispatch } from '../common/common';
import { CartPage } from './Pages/Cart/CartPage';
import { getShops } from '../store/shop/actions/actions';
import { getCoupons } from '../store/coupons/actions/actions';
import { CouponsPage } from './Pages/Coupons/CouponsPage';
import { HistoryPage } from './Pages/History/HistoryPage';

function App () {
  const dispatch = useAppDispatch()
  useEffect(() => {
    void dispatch(getShops({}))
    void dispatch(getCoupons({}))
  }, [dispatch])

  return (
    <Layout>
      <Routes>
        <Route path={API_ENUM.SHOP} element={<Shop/>}/>
        <Route path={API_ENUM.CART} element={<CartPage/>}/>
        <Route path={API_ENUM.COUPONS} element={<CouponsPage/>}/>
        <Route path={API_ENUM.HISTORY} element={<HistoryPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
