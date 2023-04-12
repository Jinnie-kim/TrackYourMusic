import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { Loadinglayout, LoadSpinner } from '../style/Loading.styled';

const code = new URLSearchParams(window.location.search).get('code');

const Loading = () => {
  const result = useAuth(code!);
  const navigate = useNavigate();

  useEffect(() => {
    if (!result) return;

    const loadTime = setTimeout(() => {
      navigate('/home');
    }, 2000);

    return () => clearTimeout(loadTime);
  }, [result]);

  return (
    <Loadinglayout>
      <h1>Login ...</h1>
      <LoadSpinner />
    </Loadinglayout>
  );
};

export default Loading;
