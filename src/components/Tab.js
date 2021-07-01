import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { colors, typography } from "../shared/styles";
import { Button } from "./Button";

const TabContainer = styled.div`
  width: 1384px;
  height: 54px;
`;

const ItemContainer = styled.div`
  position: absolute;
  width: 1384px;
  height: 35px;
  display: flex;
  margin-top: 19px;
`;

const TextItem = styled.div`
  width: 150px;
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.semibold};
  font-size: ${typography.size.s3};
  color: #666666;
  line-height: 20px;
  ${(props) =>
    props.selected &&
    css`
      color: ${colors.primary.CCPurple};
      font-weight: ${typography.weight.bold};
    `}

  &:hover {
    cursor: pointer;
  }
`;

const StyledButton = styled.div`
  position: absolute;
  right: 0px;
  top: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DividerContainer = styled.div`
  width: 1384px;
  height: 16px;
  position: absolute;
`;

const Divider = styled.div`
  height: 1px;
  background: ${colors.neutral.Gray5};
  border-radius: 8px;
  margin-top: 2px;
`;

const ActiveTab = styled.div`
  width: 30px;
  height: 5px;
  background: ${colors.primary.CCPurple};
  box-shadow: 0px 4px 6px rgba(170, 131, 184, 0.3);
  border-radius: 8px;
  position: absolute;
  left: ${(props) => props.tabPosition};
  top: 0px;
`;

export function Tab({ button, items }) {
  const [selectedItem, setSelectedItem] = useState(0); // first item selected by default
  const [buttonDisabledState, setButtonDisabled] = useState(false);

  function handleIconClick(index) {
    if (selectedItem !== index) {
      setSelectedItem(index);
      setButtonDisabled(items[index].disableButton);
      if (items[index].onClick) {
        items[index].onClick(index);
      }
    }
  }

  const activeTabPosition = `${150 * selectedItem}px`;

  return (
    <>
      <TabContainer>
        <ItemContainer>
          {items.map((item, index) => {
            return (
              <TextItem
                key={index}
                selected={index === selectedItem}
                onClick={() => handleIconClick(index)}
              >
                {item.label}
              </TextItem>
            );
          })}
          <StyledButton>
            <Button
              type={button.type}
              icon={button.icon}
              onClick={button.onClick}
              disabled={buttonDisabledState}
            >
              {button.label}
            </Button>
          </StyledButton>
        </ItemContainer>
      </TabContainer>
      <DividerContainer>
        <Divider />
        <ActiveTab tabPosition={activeTabPosition} />
      </DividerContainer>
    </>
  );
}

Tab.propTypes = {
  button: PropTypes.object,
  items: PropTypes.arrayOf(PropTypes.object),
};

Tab.defaultProps = {
  button: null,
  items: null,
};
