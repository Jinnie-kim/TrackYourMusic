import styled from '@emotion/styled';

export const ItemListlayout = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 40px;
  padding-left: 30px;
`;

export const ItemList = styled.li`
  display: flex;
  align-items: end;
  gap: 17px;
  img {
    width: 55px;
    height: auto;
  }
  p {
    font-size: 14px;
  }
  &:first-child {
    img {
      width: 125px;
      height: auto;
    }
    p {
      font-size: 32px;
    }
  }
`;
