import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import {
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  HomePage,
  CatalogPage,
  ProductPage,
  ReviewsPage,
  ProfilePage,
  RecipesPage,
  ProcessPage,
  AccountingPage,
} from './pages';

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
        
        {/* Main App Routes with Layout */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="admin/recipes" element={<RecipesPage />} />
          <Route path="admin/process" element={<ProcessPage />} />
          <Route path="admin/accounting" element={<AccountingPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
