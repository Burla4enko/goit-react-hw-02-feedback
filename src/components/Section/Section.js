import PropTypes from 'prop-types';
import { SectionElem } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionElem>
      {title && <h2>{title}</h2>}
      {children}
    </SectionElem>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
