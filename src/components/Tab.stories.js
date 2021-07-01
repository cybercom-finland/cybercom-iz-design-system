import React, { useState } from "react";
import styled from "styled-components";
import { typography } from "../shared/styles";
import { Tab } from "./Tab";
import { TabExample } from "./TabExample";
import { Modal } from "./Modal";
import { ModalExample } from "./ModalExample";
import { figmaLinks } from "../shared/figmaLinks";

export default {
  title: "Design System/Tab",
  component: Tab,
};

const Main = styled.div`
  padding: 1rem;
`;

const PageHeader = styled.div`
  width: 1384px;
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.m3};
  line-height: 34px;
  color: #000000;
  text-align: center;
`;

export const Tabs = (args) => {
  const [isModalOpen, setModalState] = useState(false);

  const handleClose = () => {
    setModalState(false);
  };

  const handleOpen = () => {
    setModalState(true);
  };

  return (
    <Main>
      <Modal
        isOpen={isModalOpen}
        onClose={handleClose}
        onContainer={handleClose}
        positionLeft="1021px"
        positionTop="135px"
      >
        <ModalExample onApplyClick={handleClose} onCancelClick={handleClose} />
      </Modal>
      <PageHeader>Tab</PageHeader>
      <TabExample handleButtonClick={handleOpen} />
    </Main>
  );
};

Tabs.storyName = "Tab";

Tabs.story = {
  parameters: {
    design: {
      type: "figma",
      url: figmaLinks.tab,
    },
  },
};
