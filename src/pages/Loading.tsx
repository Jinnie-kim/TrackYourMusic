import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useAuth from '../hooks/useAuth';
import { tokenAction } from '../store/token-slice';
import { Loadinglayout, LoadSpinner } from '../style/Loading.styled';

const code = new URLSearchParams(window.location.search).get('code');

const Loading = () => {
  const accessToken = useAuth(code!);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  localStorage.setItem('accessToken', accessToken);
  dispatch(tokenAction.getToken(accessToken));

  useEffect(() => {
    if (!accessToken) return;

    const loadTime = setTimeout(() => {
      navigate('/home');
    }, 1500);

    return () => clearTimeout(loadTime);
  }, [accessToken]);

  return (
    <Loadinglayout>
      <h1>Login ...</h1>
      <LoadSpinner />
    </Loadinglayout>
  );
};

export default Loading;
