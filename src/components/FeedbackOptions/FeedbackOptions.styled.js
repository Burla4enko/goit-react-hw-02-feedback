import styled from 'styled-components';

export const FeedbackBtnList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const FeedbackButton = styled.button`
  padding: 8px 16px;

  font-weight: 500;
  text-transform: capitalize;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  :hover,
  :focus {
    color: white;
    background-color: darkgray;
  }
`;
