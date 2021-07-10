import React, { useState } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';

const MessageStyle = styled(animated.div)`
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
  const [items, setItems] = useState([{ key: 0 }]);
  const transitions = useTransition(items, {
    from: { opacity: 0, top: -70, life: '100%' },
    keys: item => item.key,
    enter: item => async (next, cancel) => {
      await next({ opacity: 1, top: 20 });
      await next({ life: '0%' });
    },
    leave: { opacity: 0, top: -70 },
    config: (item, index, phase) => key =>
      phase === 'enter' && key === 'life'
        ? { duration: delay * 1000 }
        : { tension: 125, friction: 20, precision: 0.1 },
    onRest: (result, ctrl, item) => {
      setItems(state => state.filter(i => i.key !== item.key));
    },
    onDestroyed: () => {
      onClose && onClose();
    },
  });
  return transitions(({ life, ...styles }) => (
    <MessageStyle style={styles} className="cm-shadow">
      <div className="left"></div>
      <div className="center">
        <div className="title">{title}</div>
        <div className="detail">{detail}</div>
      </div>
      <div className="right"></div>
    </MessageStyle>
  ));
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
    render(<MessageCom title={title} detail={detail} delay={delay} onClose={onClose} />, wrapper);
  },
};

export default Message;
