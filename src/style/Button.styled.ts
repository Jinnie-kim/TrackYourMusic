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
  color: ${(props) => (props.clicked ? '#ffffff' : '#1dda59')};
  background-color: ${(props) => props.clicked && '#1dda59'};
`;

export const TermButtonBox = styled.div`
  display: flex;
  height: 14px;
  border-radius: 20px;
  background-color: #1dda59;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const TermButton = styled.button<{ clicked: boolean }>`
  width: 70px;
  height: 14px;
  border-radius: 20px;
  font-size: 8px;
  color: ${(props) => (props.clicked ? '#1dda59' : '#ffffff')};
  background-color: ${(props) => (props.clicked ? '#f8f8fa' : '#1dda59')};
`;
