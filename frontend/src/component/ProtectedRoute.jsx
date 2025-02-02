import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/admin-login" replace />;
  }

  if (isAuthenticated && user?.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  if(isAuthenticated){
    return <Navigate to="/" replace />;
  }
  
  return children;
};

export default ProtectedRoute;