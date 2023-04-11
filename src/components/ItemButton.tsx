import { useState } from 'react';
import { ItemButtonBox, ItemButton } from '../style/Button.styled';

const ItemButtons = () => {
  const [isArtists, setisArtists] = useState(true);
  const [isTracks, setisTracks] = useState(false);

  const selectItemHandler = (e: React.MouseEvent) => {
    if (e.currentTarget.id === 'artist') {
      setisArtists(true);
      setisTracks(false);
    } else if (e.currentTarget.id === 'track') {
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
