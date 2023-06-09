import styled from '@emotion/styled';

export const Loginlayout = styled.section`
  width: auto;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 180px;
  text-align: center;
`;

export const LoginTitle = styled.h1`
  font-size: 40px;
`;

export const LoginButton = styled.a`
  width: 140px;
  height: 49px;
  margin: 0 auto;
  border-radius: 20px;
  font-size: 14px;
  line-height: 49px;
  color: #ffffff;
  background-color: #1dda59;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover,
  :focus {
    background-color: #17ad46;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`;
