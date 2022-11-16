import React from 'react'
import { Route, Navigate  } from 'react-router-dom';


function ProtectedRoute({ children }) {

  const  currentUser  = true;
  
  if (!currentUser) {
      return <Navigate to="/" />
  }
  return children;
  }

  export default ProtectedRoute;