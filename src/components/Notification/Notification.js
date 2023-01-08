import { StatisticsEl } from 'components/Statistics/Statistics.styled';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <StatisticsEl>{message}</StatisticsEl>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
