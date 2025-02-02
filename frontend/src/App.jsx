import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './component/ProtectedRoute';
import AddFaq from './pages/FAQ/AddFaq';
import AdminLogin from './pages/AdminLogin';
import Faq from './pages/Faq';
import AdminSignup from './pages/AdminSignup';
import NotFound from './pages/NotFound';
import AdminDashboard from './pages/AdminDashboard';
import MyFaqs from './pages/FAQ/MyFaqs';
import EditFaq from './pages/FAQ/EditFaq';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          <Route
            path="/admin/add-faq"
            element={
              <ProtectedRoute>
                <AddFaq />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/my-faqs"
            element={
              <ProtectedRoute>
                <MyFaqs />
              </ProtectedRoute>
            }
          />
          <Route path="/admin-login" element={<AdminLogin />} />

          <Route path="/" element={<Faq />} />

          <Route path="/admin-signup" element={<AdminSignup />} />

          <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />

          <Route path="/admin/edit-faq/:id" element={<ProtectedRoute><EditFaq /></ProtectedRoute>} />

          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;