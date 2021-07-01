import React, { useState } from "react";
import styled from "styled-components";
import { typography } from "../shared/styles";
import { Modal } from "./Modal";
import { ModalExample } from "./ModalExample";
import { Button, TYPES } from "./Button";
import { figmaLinks } from "../shared/figmaLinks";

export default {
  title: "Design System/Modal",
  component: Modal,
};

const Main = styled.div`
  padding: 1rem;
`;

const PageHeader = styled.div`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.m3};
  line-height: 125%;
  margin-bottom: 32px;
  margin-left: 20px;
  color: #000000;
`;

const StyledButton = styled.div`
  margin-left: 20px;
`;

function ModalButton({ onClick }) {
  return (
    <StyledButton onClick={onClick}>
      <Button type={TYPES.TERTIARY} icon="filter">
        Filter ticket types
      </Button>
    </StyledButton>
  );
}

export const ModalStories = (args) => {
  const [isModalOpen, setModalState] = useState(false);

  const handleClose = () => {
    setModalState(false);
  };

  const handleOpen = () => {
    setModalState(true);
  };

  return (
    <Main>
      <PageHeader>Modal</PageHeader>
      <ModalButton onClick={handleOpen} />
      <Modal
        isOpen={isModalOpen}
        onClose={handleClose}
        onContainer={handleClose}
      >
        <ModalExample onApplyClick={handleClose} onCancelClick={handleClose} />
      </Modal>
    </Main>
  );
};

ModalStories.storyName = "Modal";

ModalStories.story = {
  parameters: {
    design: {
      type: "figma",
      url: figmaLinks.modal,
    },
  },
};
