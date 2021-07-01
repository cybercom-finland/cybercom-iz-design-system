import React, { useState } from "react";
import styled from "styled-components";
import { typography } from "../shared/styles";
import { Checkbox } from "./Checkbox";
import { Button, TYPES } from "./Button";

const ModalHeader = styled.div`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.s3};
  line-height: 125%;
  margin-bottom: 16px;
  color: #000000;
`;

const CheckboxRow = styled.div`
  display: flex;
`;

const CheckboxContainer = styled.div`
  margin-bottom: 16px;
  width: 142px;
`;

const CheckboxContainer2 = styled.div`
  margin-bottom: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 25px;
`;

const CancelButton = styled(Button)`
  margin-left: 25px;
`;

export function ModalExample({ onApplyClick = null, onCancelClick = null }) {
  const [checkedState, setChecked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const checkboxItems = [
    { label: "Bulletin", icon: "bulletin" },
    { label: "Request", icon: "request" },
    { label: "Change", icon: "change" },
    { label: "Standard Change", icon: "standardChange" },
    { label: "Incident", icon: "incident" },
    { label: "Subchange", icon: "subtask" },
    { label: "Problem", icon: "problem" },
    { label: "Sub-task", icon: "subtask" },
  ];

  function handleCheckClick(index) {
    setChecked({ ...checkedState, [index]: !checkedState[index] });
  }

  return (
    <>
      <ModalHeader>Filter ticket types</ModalHeader>
      {checkboxItems.map((item, index, items) => {
        if (index % 2 === 0) {
          return (
            <CheckboxRow key={index}>
              <CheckboxContainer>
                <Checkbox
                  isChecked={checkedState[index]}
                  key={index}
                  label={item.label}
                  icon={item.icon}
                  onClick={() => handleCheckClick(index)}
                />
              </CheckboxContainer>
              {items[index + 1] && (
                <CheckboxContainer2>
                  <Checkbox
                    isChecked={checkedState[index + 1]}
                    key={index + 1}
                    label={items[index + 1].label}
                    icon={items[index + 1].icon}
                    onClick={() => handleCheckClick(index + 1)}
                  />
                </CheckboxContainer2>
              )}
            </CheckboxRow>
          );
        } else {
          return null;
        }
      })}
      <ButtonContainer>
        <Button onClick={onApplyClick} disabled={false}>
          Apply
        </Button>
        <CancelButton
          type={TYPES.TERTIARY}
          onClick={onCancelClick}
          disabled={false}
        >
          Cancel
        </CancelButton>
      </ButtonContainer>
    </>
  );
}
