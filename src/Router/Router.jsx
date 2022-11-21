import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import AdminPage from '../pages/AdminPage';
import AuthPage from '../pages/AuthPage';
import UserPage from '../pages/UserPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/public" element={<p>landing page</p>}>
          <Route path="careers" element={<p>career page</p>} />
          <Route path="careers/:id" element={<p>career with id page</p>} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />

        {/* ADMIN PAGES */}
        <Route
          path="/admin"
          element={
            <PrivateRoute onlyAdmin={true}>
              <AdminPage />
            </PrivateRoute>
          }
        >
          <Route path="dashboard" element={<p>admin dashboard</p>} />
        </Route>

        {/* USER PAGES */}
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<p>404 not found</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
