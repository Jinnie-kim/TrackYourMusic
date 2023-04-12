import { Loginlayout, LoginTitle, LoginButton } from '../style/Login.styled';

const { VITE_AUTH_URL } = import.meta.env;

const Login = () => {
  return (
    <Loginlayout>
      <LoginTitle>Track Your Listening History</LoginTitle>
      <LoginButton href={VITE_AUTH_URL}>Login With Spotify</LoginButton>
    </Loginlayout>
  );
};

export default Login;
