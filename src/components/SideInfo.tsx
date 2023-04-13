import { SideInfolayout, InfoLists, InfoList, PersonalLink } from '../style/SideInfo.styled';

interface userInfoProp {
  userInfo: UserProfile;
}

const SideInfo = ({ userInfo }: userInfoProp) => {
  return (
    <SideInfolayout>
      <img src={userInfo?.images[0].url} alt="user image" />
      <InfoLists>
        <InfoList>
          <dt>Member id</dt>
          <dd>{userInfo?.id}</dd>
        </InfoList>
        <InfoList>
          <dt>Membership</dt>
          <dd>{userInfo?.product}</dd>
        </InfoList>
        <InfoList>
          <dt>Email</dt>
          <dd>{userInfo?.email}</dd>
        </InfoList>
        <InfoList>
          <dt>Service Country</dt>
          <dd>{userInfo?.country}</dd>
        </InfoList>
      </InfoLists>
      <PersonalLink href={userInfo?.external_urls.spotify} target="_blank" rel="noopener noreferrer">
        go to Spotify web 🌐
      </PersonalLink>
    </SideInfolayout>
  );
};

export default SideInfo;
