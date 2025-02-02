import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './component/ProtectedRoute';
import AddFaq from './pages/AddFaq';
import AdminLogin from './pages/AdminLogin';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/admin-dashboard" 
            element={
              <ProtectedRoute>
                <AddFaq />
              </ProtectedRoute>
            } 
          />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/" element={<AddFaq />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;