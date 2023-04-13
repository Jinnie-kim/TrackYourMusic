import styled from '@emotion/styled';

export const SideInfolayout = styled.aside`
  width: 300px;
  height: 680px;
  padding: 100px 0;
  position: relative;
  text-align: center;
  background-color: #f8f8fa;
  img {
    width: 200px;
    height: auto;
  }
`;

export const InfoLists = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-top: 36px;
  padding: 0 21px;
  font-size: 14px;
`;

export const InfoList = styled.div`
  display: flex;
  gap: 17px;
`;

export const PersonalLink = styled.a`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 14px;
  padding-bottom: 3px;
  color: #1dda59;
  border-bottom: 1px solid #1dda59;
  &:hover,
  focus {
    color: #17ad46;
    border-bottom: 1px solid #17ad46;
  }
`;
