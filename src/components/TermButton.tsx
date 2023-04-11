import { useState } from 'react';
import { TermButtonBox, TermButton } from '../style/Button.styled';

const TermButtons = () => {
  const [isShort, setIsShort] = useState(true);
  const [isMedium, setIsMedium] = useState(false);
  const [isLong, setIsLong] = useState(false);

  const selectTermHandler = (e: React.MouseEvent) => {
    if (e.currentTarget.id === 'short') {
      setIsShort(true);
      setIsMedium(false);
      setIsLong(false);
    } else if (e.currentTarget.id === 'medium') {
      setIsShort(false);
      setIsMedium(true);
      setIsLong(false);
    } else if (e.currentTarget.id === 'long') {
      setIsShort(false);
      setIsMedium(false);
      setIsLong(true);
    }
  };

  return (
    <TermButtonBox>
      <TermButton id="short" clicked={isShort} onClick={selectTermHandler}>
        Last Month
      </TermButton>
      <TermButton id="medium" clicked={isMedium} onClick={selectTermHandler}>
        Last 6 Month
      </TermButton>
      <TermButton id="long" clicked={isLong} onClick={selectTermHandler}>
        All Time
      </TermButton>
    </TermButtonBox>
  );
};

export default TermButtons;
