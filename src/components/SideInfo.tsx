import { SideInfolayout, InfoLists, InfoList, PersonalLink } from '../style/SideInfo.styled';

const SideInfo = () => {
  return (
    <SideInfolayout>
      <img src="https://picsum.photos/200" alt="random image" />
      <InfoLists>
        <InfoList>
          <dt>Member id</dt>
          <dd>n2eiaztdvow9l85pm9tbxez5r</dd>
        </InfoList>
        <InfoList>
          <dt>Membership</dt>
          <dd>premium</dd>
        </InfoList>
        <InfoList>
          <dt>Email</dt>
          <dd>hjk7639@gmail.com</dd>
        </InfoList>
        <InfoList>
          <dt>Service Country</dt>
          <dd>KR 🇰🇷</dd>
        </InfoList>
      </InfoLists>
      <PersonalLink href="">go to Spotify web 🌐</PersonalLink>
    </SideInfolayout>
  );
};

export default SideInfo;
