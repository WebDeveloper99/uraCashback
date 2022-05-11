import React from 'react'
import Login from '../components/login'
import Main from '../components/main';
import 'antd/dist/antd.css';
import { Route, Routes } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path={'/main'} element={<Main/>} />
      </Routes>
    </div>
  )
}

export default Root