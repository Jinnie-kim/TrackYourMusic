import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tokenAction } from '../store/token-slice';
import SideInfo from '../components/SideInfo';
import ItemButtons from '../components/ItemButton';
import TermButtons from '../components/TermButton';
import ItemLists from '../components/ItemList';
import { Homelayout, Contentlayout, Buttonlayout } from '../style/Home.styled';
import { getTopArtists, getTopTracks } from '../api/topItem';
import { getUserProfile } from '../api/user';

interface tokenType {
  token: { accessToken: string };
}

interface termButtonType {
  button: { term: string };
}

const Home = () => {
  const [topArtists, setTopArtists] = useState<TopArtists[]>([]);
  const [topTracks, setTopTracks] = useState<TopTracks[]>([]);
  const [user, setUser] = useState<UserProfile>();

  const dispatch = useDispatch();
  const accessToken = useSelector((state: tokenType) => state.token.accessToken);
  const term = useSelector((state: termButtonType) => state.button.term);

  useEffect(() => {
    if (!accessToken && localStorage.getItem('accessToken') !== null) {
      dispatch(tokenAction.getToken(localStorage.getItem('accessToken')));
      return;
    }
    if (accessToken) {
      getUserProfile(accessToken).then((userData) => {
        setUser(userData);
      });
      getTopArtists(accessToken, term).then((artistData) => {
        setTopArtists(artistData.items as TopArtists[]);
      });
      getTopTracks(accessToken, term).then((trackData) => {
        setTopTracks(trackData.items as TopTracks[]);
      });
    }
  }, [accessToken]);

  useEffect(() => {
    if (accessToken) {
      getTopArtists(accessToken, term).then((artistData) => {
        setTopArtists(artistData.items as TopArtists[]);
      });
      getTopTracks(accessToken, term).then((trackData) => {
        setTopTracks(trackData.items as TopTracks[]);
      });
    }
  }, [term]);

  return (
    <Homelayout>
      <Contentlayout>
        <h1>Hi, {user?.display_name}</h1>
        <Buttonlayout>
          <ItemButtons />
          <TermButtons />
        </Buttonlayout>
        <ItemLists topArtists={topArtists} topTracks={topTracks} />
      </Contentlayout>
      <SideInfo userInfo={user!} />
    </Homelayout>
  );
};

export default Home;
