import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminProtectWrapper = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/admin-login');
    }
  }, [token, navigate]);

  return 
  <div>
    {children}
  </div>;
};

export default AdminProtectWrapper;
