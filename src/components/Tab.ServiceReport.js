import React, { useState } from "react";
import { Tab } from "./Tab";
import { Modal } from "./Modal";
import { ModalExample } from "./ModalExample";
import { TYPES } from "./Button";
import PropTypes from "prop-types";

const TabMenu = ({ handleButtonClick, items }) => {
  const [selectedItem, setSelectedItem] = useState(0);

  const tabButton = {
    label: "Filter ticket types",
    type: TYPES.TERTIARY,
    icon: "filter",
    disabled: false,
    onClick: handleButtonClick,
  };

  const handleClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <>
      <Tab button={tabButton} items={items} onTabClick={handleClick} />
      {items[selectedItem].page && items[selectedItem].page()}
    </>
  );
};

export const TabServiceReport = ({ items, positionLeft, positionTop }) => {
  const [isModalOpen, setModalState] = useState(false);

  const handleClose = () => {
    setModalState(false);
  };

  const handleOpen = () => {
    setModalState(true);
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={handleClose}
        onContainer={handleClose}
        positionLeft={positionLeft}
        positionTop={positionTop}
      >
        <ModalExample onApplyClick={handleClose} onCancelClick={handleClose} />
      </Modal>
      <TabMenu handleButtonClick={handleOpen} items={items} />
    </>
  );
};

TabServiceReport.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  positionLeft: PropTypes.string,
  positionTop: PropTypes.string,
};

TabServiceReport.defaultProps = {
  items: null,
  positionLeft: "1021px",
  positionTop: "135px",
};
