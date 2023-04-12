import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tokenAction } from '../store/token-slice';
import SideInfo from '../components/SideInfo';
import ItemButtons from '../components/ItemButton';
import TermButtons from '../components/TermButton';
import ItemLists from '../components/ItemList';
import { Homelayout, Contentlayout, Buttonlayout } from '../style/Home.styled';

interface tokenType {
  token: { accessToken: string };
}

const Home = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state: tokenType) => state.token.accessToken);

  useEffect(() => {
    if (!accessToken && localStorage.getItem('accessToken') !== null) {
      dispatch(tokenAction.getToken(localStorage.getItem('accessToken')));
    }
  }, [accessToken]);

  return (
    <Homelayout>
      <Contentlayout>
        <h1>Hi, JINNIE</h1>
        <Buttonlayout>
          <ItemButtons />
          <TermButtons />
        </Buttonlayout>
        <ItemLists />
      </Contentlayout>
      <SideInfo />
    </Homelayout>
  );
};

export default Home;
