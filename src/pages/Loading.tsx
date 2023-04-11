import { Loadinglayout, LoadSpinner } from '../style/Loading.styled';

const Loading = () => {
  return (
    <Loadinglayout>
      <h1>Login ...</h1>
      <LoadSpinner />
    </Loadinglayout>
  );
};

export default Loading;
