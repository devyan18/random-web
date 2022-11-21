import { createContext, useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../services/auth.service';
import { Navigate } from 'react-router-dom';
import { removeAuth, setIsAdmin } from '../store/features/auth/authSlice';

const UserContext = createContext();

function UserProvider ({ children }) {
  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const [user, setUser] = useState(null);

  const fethingUser = async (token) => {
    const response = await getUserData(token);
    return response;
  };

  const redirect = (isAdmin) => {
    return <Navigate to={`/${isAdmin ? 'admin' : 'user'}`} />;
  };

  useEffect(() => {
    if (auth.token) {
      fethingUser(auth.token)
        .then(response => {
          setUser(response);
          dispatch(setIsAdmin(response.isAdmin));
          redirect(response.isAdmin);
        })
        .catch(() => {
          setUser(null);
          dispatch(removeAuth());
        });
    }
  }, [auth.token]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

const useUser = () => useContext(UserContext).user;
const useSetUser = () => useContext(UserContext).setUser;

export { useUser, useSetUser };
export default UserProvider;
