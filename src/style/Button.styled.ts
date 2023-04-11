import styled from '@emotion/styled';

export const ItemButtonBox = styled.div`
  width: 254px;
  height: 44px;
  border-radius: 20px;
  background-color: #f8f8fa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ItemButton = styled.button<{ clicked: boolean }>`
  width: 127px;
  height: 44px;
  border-radius: 20px;
  font-size: 14px;
  color: ${(props) => (props.clicked ? '#ffffff' : '#65d46e')};
  background-color: ${(props) => props.clicked && '#65d46e'};
`;

export const TermButtonBox = styled.div`
  display: flex;
  height: 14px;
  border-radius: 20px;
  background-color: #65d46e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const TermButton = styled.button<{ clicked: boolean }>`
  width: 70px;
  height: 14px;
  border-radius: 20px;
  font-size: 8px;
  color: ${(props) => (props.clicked ? '#65d46e' : '#ffffff')};
  background-color: ${(props) => (props.clicked ? '#ffffff' : '#65d46e')};
`;
