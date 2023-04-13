import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { buttonAction } from '../store/button-slice';
import { TermButtonBox, TermButton } from '../style/Button.styled';

const TermButtons = () => {
  const [isShort, setIsShort] = useState(true);
  const [isMedium, setIsMedium] = useState(false);
  const [isLong, setIsLong] = useState(false);

  const dispatch = useDispatch();

  const selectTermHandler = (e: React.MouseEvent) => {
    if (e.currentTarget.id === 'short_term') {
      dispatch(buttonAction.selectTerm(e.currentTarget.id));
      setIsShort(true);
      setIsMedium(false);
      setIsLong(false);
    } else if (e.currentTarget.id === 'medium_term') {
      dispatch(buttonAction.selectTerm(e.currentTarget.id));
      setIsShort(false);
      setIsMedium(true);
      setIsLong(false);
    } else if (e.currentTarget.id === 'long_term') {
      dispatch(buttonAction.selectTerm(e.currentTarget.id));
      setIsShort(false);
      setIsMedium(false);
      setIsLong(true);
    }
  };

  return (
    <TermButtonBox>
      <TermButton id="short_term" clicked={isShort} onClick={selectTermHandler}>
        Last Month
      </TermButton>
      <TermButton id="medium_term" clicked={isMedium} onClick={selectTermHandler}>
        Last 6 Month
      </TermButton>
      <TermButton id="long_term" clicked={isLong} onClick={selectTermHandler}>
        All Time
      </TermButton>
    </TermButtonBox>
  );
};

export default TermButtons;
