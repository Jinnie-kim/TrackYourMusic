import { ItemListlayout, ItemList } from '../style/ItemList.styled';

interface TopItemProp {
  topArtists: TopArtists[];
  topTracks: TopTracks[];
}

const ItemLists = ({ topArtists, topTracks }: TopItemProp) => {
  return (
    <ItemListlayout>
      {topArtists.map((topArtist) => {
        return (
          <ItemList key={topArtist.id}>
            <img src={topArtist.images[2].url} alt="artist image" />
            <p>{topArtist.name}</p>
          </ItemList>
        );
      })}
    </ItemListlayout>
  );
};

export default ItemLists;
