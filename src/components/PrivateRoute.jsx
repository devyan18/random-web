import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute ({ children, redirect = '/auth', onlyAdmin = false }) {
  const token = useSelector(state => state.auth.token);
  const isAdmin = useSelector(state => state.auth.isAdmin);

  if (!token) {
    return <Navigate to={redirect} />;
  }

  if (onlyAdmin && !isAdmin) {
    return <Navigate to='/user'/>;
  }

  return (
    children
  );
}
