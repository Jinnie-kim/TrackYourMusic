import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ItemButtonBox, ItemButton } from '../style/Button.styled';
import { buttonAction } from '../store/button-slice';

const ItemButtons = () => {
  const [isArtists, setisArtists] = useState(true);
  const [isTracks, setisTracks] = useState(false);

  const dispatch = useDispatch();

  const selectItemHandler = (e: React.MouseEvent) => {
    if (e.currentTarget.id === 'artist') {
      dispatch(buttonAction.isArtist(true));
      setisArtists(true);
      setisTracks(false);
    } else if (e.currentTarget.id === 'track') {
      dispatch(buttonAction.isTrack(true));
      setisTracks(true);
      setisArtists(false);
    }
  };

  return (
    <ItemButtonBox>
      <ItemButton id="artist" clicked={isArtists} onClick={selectItemHandler}>
        Top Artists
      </ItemButton>
      <ItemButton id="track" clicked={isTracks} onClick={selectItemHandler}>
        Top Tracks
      </ItemButton>
    </ItemButtonBox>
  );
};

export default ItemButtons;
