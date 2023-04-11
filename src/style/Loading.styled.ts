import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const Loadinglayout = styled.section`
  width: auto;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 180px;
  text-align: center;
  h1 {
    font-size: 40px;
    font-weight: 400;
  }
`;

const scaleUp = keyframes`
  0% { transform: translate(-50%, -50%) scale(0) }
  60% , 100% { transform: translate(-50%, -50%)  scale(1)}
`;

const pulse = keyframes`
  0% , 60% , 100%{ transform:  scale(1) }
  80% { transform:  scale(1.2)}
`;

export const LoadSpinner = styled.span`
  width: 48px;
  height: 48px;
  margin: 0 auto;
  border: 5px solid #1dda59;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  animation: ${pulse} 1s linear infinite;
  &::after {
    content: '';
    position: absolute;
    width: 48px;
    height: 48px;
    border: 5px solid #1dda59;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: ${scaleUp} 1s linear infinite;
  }
`;
