import React, { Fragment, useState, useReducer } from "react";
import styled from "styled-components";
import { colors, typography, device } from "../shared/styles";
import { Checkbox } from "./Checkbox";
import { Button, TYPES } from "./Button";
import { Dropdown } from "./Dropdown";
import { Expandable } from "./Expandable";
import {
  sideMenuReducer,
  initialState,
  SIDE_MENU_ACTIONS,
} from "./SideMenuStore";

const mediaDevice = device.mobileL;

const Header = styled.div`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.bold};
  font-size: 22px;
  line-height: 28px;
  color: ${colors.neutral.Gray1};
  margin-bottom: 11px;
`;

const Dropdowns = styled.div`
  display: flex;
  flex-direction: column;

  @media ${mediaDevice} {
    flex-direction: row;
  }
`;

const DropdownBox1 = styled.div`
  width: 100%;
  margin-bottom: 15px;

  @media ${mediaDevice} {
    width: 140px;
  }
`;

const DropdownBox2 = styled.div`
  width: 100%;
  margin-bottom: 15px;

  @media ${mediaDevice} {
    width: 190px;
    margin-left: 15px;
  }
`;

const CustomersContainer = styled.div`
  width: 100%;
  background: ${colors.neutral.Gray7};
  border-radius: 8px;
  padding-top: 18px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
`;

const CheckboxContainer = styled.div`
  margin-bottom: 14px;
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

const Divider = styled.div`
  border: 1px solid ${colors.neutral.Gray6};
  height: 0px;
  width: 100%;
  margin-top: 2px;
  margin-bottom: 12px;
`;

const CustomersLabel = styled.div`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.semibold};
  font-size: 16px;
  line-height: 20px;
  color: ${colors.neutral.Gray3};
  margin-bottom: 4px;
`;
const FilterContainer = styled.div`
  margin-top: 12px;
`;

const CheckboxRow = styled.div`
  display: flex;
`;

const CheckboxLeft = styled.div`
  margin-bottom: 16px;
  width: 142px;
`;

const CheckboxRight = styled.div`
  margin-bottom: 16px;
`;

const yearOptions = [
  { value: "2020", label: "2020" },
  { value: "2021", label: "2021" },
  { value: "2022", label: "2022" },
  { value: "2023", label: "2023" },
  { value: "2024", label: "2024" },
];

const monthOptions = [
  { value: "January", label: "January" },
  { value: "February", label: "February" },
  { value: "March", label: "March" },
  { value: "April", label: "April" },
  { value: "May", label: "May" },
  { value: "June", label: "June" },
  { value: "July", label: "July" },
  { value: "August", label: "August" },
  { value: "September", label: "September" },
  { value: "October", label: "October" },
  { value: "November", label: "November" },
  { value: "December", label: "December" },
];

function YearDropDown() {
  const [selectedOption, setSelectedOption] = useState(yearOptions[1]);
  return (
    <Dropdown
      title="Year"
      options={yearOptions}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
    />
  );
}

function MonthDropDown() {
  const [selectedOption, setSelectedOption] = useState(monthOptions[0]);
  return (
    <Dropdown
      title="Month"
      options={monthOptions}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
    />
  );
}

function TicketTypeCheckboxes() {
  const [state, dispatch] = useReducer(sideMenuReducer, initialState);

  function handleCheckClick(index) {
    dispatch({
      type: SIDE_MENU_ACTIONS.TOGGLE_FILTER_CHECKMARK,
      payload: index,
    });
  }

  return (
    <FilterContainer>
      {state.checkboxItems.map((item, index, items) => {
        if (index % 2 === 0) {
          return (
            <CheckboxRow key={index}>
              <CheckboxLeft>
                <Checkbox
                  isChecked={item.checked}
                  key={index}
                  label={item.label}
                  onClick={() => handleCheckClick(index)}
                />
              </CheckboxLeft>
              {items[index + 1] && (
                <CheckboxRight>
                  <Checkbox
                    isChecked={items[index + 1].checked}
                    key={index + 1}
                    label={items[index + 1].label}
                    onClick={() => handleCheckClick(index + 1)}
                  />
                </CheckboxRight>
              )}
            </CheckboxRow>
          );
        } else {
          return null;
        }
      })}
    </FilterContainer>
  );
}

export function CustomerContent() {
  const [state, dispatch] = useReducer(sideMenuReducer, initialState);

  return (
    <>
      <CustomersLabel>Customers</CustomersLabel>
      <CustomersContainer>
        {state.customers.map((level1, index) => {
          return (
            <Fragment key={index}>
              <CheckboxContainer>
                <Checkbox
                  label={level1.name}
                  isChecked={level1.checked}
                  onClick={() =>
                    dispatch({
                      type: SIDE_MENU_ACTIONS.TOGGLE_CUSTOMER_CHECKMARK,
                      payload: level1.id,
                    })
                  }
                  isTreeNode={level1.tree !== undefined}
                  isTreeOpen={level1.treeOpen}
                  isIndeterminate={(level1.tree !== undefined) && level1.indeterminate}
                  onArrowClick={() =>
                    dispatch({
                      type: SIDE_MENU_ACTIONS.TOGGLE_SUBTREE,
                      payload: level1.id,
                    })
                  }
                />
              </CheckboxContainer>
              {level1.treeOpen &&
                level1.tree !== undefined &&
                level1.tree.map((level2, index) => {
                  return (
                    <Fragment key={index + 100}>
                      <CheckboxContainer>
                        <Checkbox
                          style={{ marginLeft: "24px" }}
                          label={level2.name}
                          isChecked={level2.checked}
                          onClick={() =>
                            dispatch({
                              type: SIDE_MENU_ACTIONS.TOGGLE_CUSTOMER_CHECKMARK,
                              payload: level2.id,
                            })
                          }
                          isTreeNode={level2.tree !== undefined}
                          isTreeOpen={level2.treeOpen}
                          isIndeterminate={(level2.tree !== undefined) && level2.indeterminate}
                          onArrowClick={() =>
                            dispatch({
                              type: SIDE_MENU_ACTIONS.TOGGLE_SUBTREE,
                              payload: level2.id,
                            })
                          }
                        />
                      </CheckboxContainer>
                      {level2.treeOpen &&
                        level2.tree !== undefined &&
                        level2.tree.map((level3, index) => {
                          return (
                            <CheckboxContainer key={index + 200}>
                              <Checkbox
                                style={{ marginLeft: "48px" }}
                                label={level3.name}
                                isChecked={level3.checked}
                                onClick={() =>
                                  dispatch({
                                    type:
                                      SIDE_MENU_ACTIONS.TOGGLE_CUSTOMER_CHECKMARK,
                                    payload: level3.id,
                                  })
                                }
                              />
                            </CheckboxContainer>
                          );
                        })}
                    </Fragment>
                  );
                })}
            </Fragment>
          );
        })}
      </CustomersContainer>
    </>
  );
}

export function MenuContent({ showTicketTypeFilter = false }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandableClick = () => {
    setExpanded(!expanded);
  };

  const handleApplyClick = () => {
    alert("You pressed Apply button.");
  };

  const handleExportClick = () => {
    alert("You pressed Export button.");
  };

  return (
    <>
      <Header>Filter results</Header>
      <Dropdowns>
        <DropdownBox1>
          <YearDropDown />
        </DropdownBox1>
        <DropdownBox2>
          <MonthDropDown />
        </DropdownBox2>
      </Dropdowns>
      <CustomerContent />
      {showTicketTypeFilter && (
        <>
          <Expandable
            label="Filter ticket types"
            isExpanded={expanded}
            onClick={handleExpandableClick}
            style={{ marginTop: "17px" }}
          >
            <TicketTypeCheckboxes />
          </Expandable>
          <Divider />
        </>
      )}
      <ButtonContainer>
        <Button onClick={handleApplyClick}>Apply</Button>
        <CancelButton type={TYPES.TERTIARY} onClick={handleExportClick}>
          Export as CSV
        </CancelButton>
      </ButtonContainer>
    </>
  );
}
