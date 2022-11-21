import { useState } from 'react';
import { loginWithCredentials } from '../services/auth.service';

export default function useLogin () {
  const [authData, setAuthData] = useState(null);

  const [params, setParams] = useState({
    email: '',
    password: ''
  });

  const [isLoading, setLoading] = useState(false);

  const onChange = (event) => {
    setParams({
      ...params,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const response = await loginWithCredentials(params.email, params.password);
    setAuthData(response);
    setLoading(false);
  };

  return [authData, onChange, onSubmit, isLoading];
}
