import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${props => (props.disabled ? '#eee' : props.primary ? 'black' : 'white')};
  color: ${props => (props.disabled ? '#ccc' : props.primary ? 'white' : 'black')};
  border-color: ${props => (props.disabled ? '#eee' : props.primary ? 'black' : '#ccc')};
  & + & {
    margin-left: 10px;
  }
`;

const Button = ({ disabled = false, primary = false, onClick = () => {}, children }) => {
  return (
    <ButtonStyle disabled={disabled} primary={primary} className="cm-radius" onClick={onClick}>
      {children}
    </ButtonStyle>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
