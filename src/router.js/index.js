import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Home from '../container/Home';
import Login from '../container/Login';
import ProtectedRoute from './ProtectedRoute';

function RouterApp() {
  return (
    <BrowserRouter>
    <Routes>
      
  
          <Route exact path='/' element={<Login />} />
          <Route
                    path="/home"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                /> 
                <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          </BrowserRouter>
    
  )
}

export default RouterApp