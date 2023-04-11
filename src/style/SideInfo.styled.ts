import styled from '@emotion/styled';

export const SideInfolayout = styled.aside`
  width: 300px;
  height: 680px;
  padding: 100px 0;
  position: relative;
  text-align: center;
  background-color: #f8f8fa;
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
  color: #65d46e;
  border-bottom: 1px solid #65d46e;
  &:hover,
  focus {
    color: #32a869;
    border-bottom: 1px solid #32a869;
  }
`;
