import styled from '@emotion/styled';

export const Homelayout = styled.section`
  width: 980px;
  display: flex;
  justify-content: end;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Contentlayout = styled.section`
  width: 618px;
  height: 680px;
  padding-top: 20px;
  padding-left: 22px;
  border-left: 1px dashed #000000;
  h1 {
    margin-bottom: 47px;
    font-size: 48px;
    font-weight: 400;
  }
`;

export const Buttonlayout = styled.div`
  display: flex;
  align-items: end;
  gap: 20px;
`;
