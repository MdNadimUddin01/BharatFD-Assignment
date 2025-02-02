import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const NavButtons = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
      {isAuthenticated ? (
        <>
          <button
            onClick={() => navigate('/admin')}
            className="group relative inline-flex items-center gap-1.5 px-4 py-2 text-gray-700 rounded-md transition-colors duration-200 shadow-sm"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            Admin Dashboard
            
            <span className="absolute hidden group-hover:block -bottom-12 left-1/2 -translate-x-1/2 w-max px-3 py-2 bg-gray-900 text-white text-sm rounded-md">
              Go to admin dashboard
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></span>
            </span>
          </button>

          <button
            onClick={handleLogout}
            className="group relative inline-flex items-center gap-1.5 px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200 shadow-sm border border-gray-200"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
              />
            </svg>
            Logout
            
            <span className="absolute hidden group-hover:block -bottom-12 left-1/2 -translate-x-1/2 w-max px-3 py-2 bg-gray-900 text-white text-sm rounded-md">
              Sign out of your account
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></span>
            </span>
          </button>
        </>
      ) : (
        <button
          onClick={() => navigate('/admin-login')}
          className="group relative inline-flex items-center gap-1.5 px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200 shadow-sm border border-gray-200"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
            />
          </svg>
          Admin Login
          
          <span className="absolute hidden group-hover:block -bottom-12 left-1/2 -translate-x-1/2 w-max px-3 py-2 bg-gray-900 text-white text-sm rounded-md">
            Login to admin panel
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></span>
          </span>
        </button>
      )}
    </div>
  );
};

export default NavButtons; 