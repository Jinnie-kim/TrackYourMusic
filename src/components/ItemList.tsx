import { useSelector } from 'react-redux';
import { ItemListlayout, ItemList } from '../style/ItemList.styled';

interface TopItemProp {
  topArtists: TopArtists[];
  topTracks: TopTracks[];
}

interface ButtonProp {
  button: { isArtist: boolean; isTrack: boolean };
}

const ItemLists = ({ topArtists, topTracks }: TopItemProp) => {
  const isArtist = useSelector((state: ButtonProp) => state.button.isArtist);
  const isTrack = useSelector((state: ButtonProp) => state.button.isTrack);

  return (
    <ItemListlayout>
      {isArtist &&
        topArtists.map((topArtist) => {
          return (
            <ItemList key={topArtist.id}>
              <img src={topArtist.images[2].url} alt="artist image" />
              <p>{topArtist.name}</p>
            </ItemList>
          );
        })}
      {isTrack &&
        topTracks.map((topTrack) => {
          return (
            <ItemList key={topTrack.id}>
              <img src={topTrack.album.images[0].url} alt="artist image" />
              <p>{topTrack.name}</p>
            </ItemList>
          );
        })}
    </ItemListlayout>
  );
};

export default ItemLists;
