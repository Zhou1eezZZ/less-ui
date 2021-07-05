import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardStyle = styled.div`
  padding: 10px 10px;
  width: fit-content;
  transition: all 0.2s;
  background-color: white;
  box-sizing: border-box;
  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.animation && ` 0 2px 12px 0 rgb(0 0 0 / 20%)`};
  }
`;

const Card = ({ animation = true, children }) => {
  return (
    <CardStyle animation={animation} className="cm-radius cm-shadow">
      {children}
    </CardStyle>
  );
};

Card.propTypes = {
  animation: PropTypes.bool,
};

export default Card;
