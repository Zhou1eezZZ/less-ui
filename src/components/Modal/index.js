import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '../index';
import { useTransition, animated } from 'react-spring';

const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.1);
`;
const ModalStyle = styled(animated.div)`
  min-width: 500px;
  width: 60%;
  position: fixed;
  left: 20%;
  top: 100px;
  z-index: 1001;
  background-color: white;
  .md-title {
    width: 100%;
    padding: 10px 10px;
    font-size: 24px;
    font-weight: bold;
  }
  .md-body {
    width: 100%;
    padding: 0 10px;
    min-height: 100px;
  }
  .md-foot {
    width: 100%;
    padding: 10px 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    box-sizing: border-box;
  }
`;

const Modal = ({
  show = false,
  title = 'Modal',
  onClose = () => {},
  onOk = () => {},
  onCancel = () => {},
  children,
}) => {
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return (
    <>
      {show && <Mask />}
      {transitions(
        (style, show) =>
          show && (
            <ModalStyle style={style} className="cm-radius cm-shadow">
              <div className="md-title">{title}</div>
              <div className="md-body">{children}</div>
              <div className="md-foot">
                <Button primary onClick={onOk}>
                  OK
                </Button>
                <Button onClick={onCancel}>Cancel</Button>
              </div>
            </ModalStyle>
          ),
      )}
    </>
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.any,
  onClose: PropTypes.func,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
};

export default Modal;
