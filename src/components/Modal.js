import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../shared/styles";
import { Icon } from "./Icon";

const ModalContainer = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(51, 51, 51, 0.4);
  z-index: 99;

  &:hover {
    cursor: pointer;
  }
`;

const ModalMain = styled.div`
  position: fixed;
  background: ${colors.neutral.CCWhite};
  width: ${(props) => props.width};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  padding-top: 20px;
  padding-bottom: 4px;
  padding-left: 30px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  &:hover {
    cursor: auto;
  }
`;

const StyledCloseMark = styled.div`
  width: 24px;
  height: 24px;
  overflow: hidden;
  background: ${colors.neutral.CCWhite};
  border: none;
  position: absolute;
  right: 15px;
  top: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background: rgba(170, 131, 184, 0.2);
    box-shadow: 0px 0px 5px 5px rgba(170, 131, 184, 0.2);
    border-radius: 50%;
  }

  svg {
    fill: ${colors.primary.CCPurple};
  }
`;

export function Modal({
  isOpen,
  onClose,
  onContainer,
  modalWidth = "379px",
  positionLeft = "40px",
  positionTop = "80px",
  children,
}) {
  return (
    <ModalContainer isOpen={isOpen} onClick={onContainer}>
      <ModalMain
        width={modalWidth}
        left={positionLeft}
        top={positionTop}
        onClick={(e) => e.stopPropagation()}
      >
        <StyledCloseMark onClick={onClose}>
          <Icon icon="close" aria-hidden />
        </StyledCloseMark>
        {children}
      </ModalMain>
    </ModalContainer>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onContainer: PropTypes.func,
  modalWidth: PropTypes.string,
  positionLeft: PropTypes.string,
  positionTop: PropTypes.string,
};

Modal.defaultProps = {
  isOpen: false,
  onClose: () => {},
  onContainer: () => {},
  modalWidth: "379px",
  positionLeft: "40px",
  positionTop: "80px",
};
