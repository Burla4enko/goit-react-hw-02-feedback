import PropTypes from 'prop-types';
import { StatisticsEl } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul>
        <li>
          <StatisticsEl>
            Good: <span>{good}</span>
          </StatisticsEl>
        </li>
        <li>
          <StatisticsEl>
            Neutral: <span>{neutral}</span>
          </StatisticsEl>
        </li>
        <li>
          <StatisticsEl>
            Bad: <span>{bad}</span>
          </StatisticsEl>
        </li>
        <li>
          <StatisticsEl>
            Total: <span>{total}</span>
          </StatisticsEl>
        </li>
        <li>
          <StatisticsEl>
            Positive percentage: <span>{positivePercentage}%</span>
          </StatisticsEl>
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
