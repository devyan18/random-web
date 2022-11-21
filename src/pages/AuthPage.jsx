import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useLogin from '../hooks/useLogin';
import { useSetUser } from '../providers/UserProvider';
import { setAuth } from '../store/features/auth/authSlice';

export default function AuthPage () {
  const [authData, onChange, onSubmit, isLoading] = useLogin();

  const dispatch = useDispatch();
  const setUser = useSetUser();
  const navigate = useNavigate();

  const redirect = (isAdmin) => {
    navigate(`/${isAdmin ? 'admin' : 'user'}`);
  };

  useEffect(() => {
    if (authData) {
      dispatch(setAuth({ token: authData.access_token, isAdmin: authData.user.isAdmin }));
      setUser(authData.user);
      redirect(authData.user.isAdmin);
    }
  }, [authData]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={onChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={onChange} />
        </div>
        <button type="submit">Login</button>
      </form>
      {
        isLoading && <p>Loading...</p>
      }
    </div>
  );
}
