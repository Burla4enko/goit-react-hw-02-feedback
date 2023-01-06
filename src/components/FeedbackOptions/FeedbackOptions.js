import PropTypes from 'prop-types';
import { FeedbackBtnList, FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackBtnList>
      {options.map(option => {
        return (
          <li key={option}>
            <FeedbackButton onClick={() => onLeaveFeedback(option)}>
              {option}
            </FeedbackButton>
          </li>
        );
      })}
    </FeedbackBtnList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
