import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className='fixed top-4 right-4 z-60 '>

      <button
        onClick={handleLogout}
        className="group relative inline-flex items-center gap-1.5 px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200 shadow-sm border border-gray-200"
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton; 