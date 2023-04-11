import SideInfo from '../components/SideInfo';
import ItemButtons from '../components/ItemButton';
import TermButtons from '../components/TermButton';
import ItemLists from '../components/ItemList';
import { Homelayout, Contentlayout, Buttonlayout } from '../style/Home.styled';

const Home = () => {
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
