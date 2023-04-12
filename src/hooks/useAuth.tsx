import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = (code: string) => {
  const [accessToken, setAccessToken] = useState<string>('');
  const [refreshToken, setRefreshToken] = useState<string>('');
  const [expiresIn, setExpiresIn] = useState<number>(0);

  const navigate = useNavigate();

  useEffect(() => {
    async function getAccessToken() {
      const response = await fetch('http://127.0.0.1:5174/loading', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ code: code }),
      });

      const data = await response.json();

      if (data.status !== 200) {
        console.log('토큰을 가져오지 못했습니다.');
        navigate('/');
      }
      setAccessToken(data.accessToken);
      setRefreshToken(data.refresgToken);
      setExpiresIn(data.expiresIn);
    }

    getAccessToken();
  }, [code]);

  return accessToken;
};

export default useAuth;
