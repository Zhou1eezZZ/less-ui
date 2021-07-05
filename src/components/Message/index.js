import React, { useEffect } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MessageStyle = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1002;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  width: fit-content;
  height: 50px;
  border-radius: 25px;
  transition: all 0.2s;
  background-color: white;
  box-sizing: border-box;
  .left,
  .right {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
    .title {
      font-size: 16px;
      font-weight: bold;
    }
    .detail {
      font-size: 14px;
    }
  }
`;

const MessageCom = ({
  title = 'Info',
  detail = 'This is detail.',
  delay = 3,
  onClose = () => {},
}) => {
  useEffect(() => {
    delay &&
      setTimeout(() => {
        onClose();
      }, delay * 1000);
  }, [delay, onClose]);
  return (
    <MessageStyle className="cm-shadow">
      <div className="left"></div>
      <div className="center">
        <div className="title">{title}</div>
        <div className="detail">{detail}</div>
      </div>
      <div className="right"></div>
    </MessageStyle>
  );
};

MessageCom.propTypes = {
  title: PropTypes.any,
  detail: PropTypes.any,
  delay: PropTypes.number,
  onClose: PropTypes.func,
};

const Message = {
  show: ({ title, detail, delay, onClose }) => {
    const bodyEle = document.getElementsByTagName('body')[0];
    const wrapper = document.createElement('div');
    bodyEle.appendChild(wrapper);
    render(
      <MessageCom
        title={title}
        detail={detail}
        delay={delay}
        onClose={() => {
          bodyEle.removeChild(wrapper);
          onClose && onClose();
        }}
      />,
      wrapper,
    );
  },
};

export default Message;
