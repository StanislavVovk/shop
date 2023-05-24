import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Shop } from './common';
import { Layout } from './UI/common';
import { API_ENUM } from '../common/common';

function App () {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={API_ENUM.SHOP} element={<Shop/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
