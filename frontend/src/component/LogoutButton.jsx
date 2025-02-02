import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin-login');
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-700"
    >
      Logout
    </button>
  );
};

export default LogoutButton; 