import React from "react";
import Select, { components } from "react-select";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors, typography } from "../shared/styles";
import { Icon } from "./Icon";

const DefaultTitle = styled.h4`
  color: ${colors.neutral.Gray3};
  font-weight: ${typography.weight.semibold};
  font-size: ${typography.size.s3};
  line-height: ${typography.size.m1};
  margin-bottom: 3px;
`;

const InlineTitle = styled.h4`
  color: #666666;
  font-weight: 400;
  margin-right: 5px;
`;

const DefaultWrapper = styled.div``;

const InlineWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const { Option } = components;

const DefaultOption = (props) => (
  <Option {...props}>
    {props.data.label}
    <Icon icon="check" />
  </Option>
);

const InlineOption = (props) => (
  <Option {...props}>
    <Icon icon="check" />
    {props.data.label}
  </Option>
);

const DropdownIndicator = (props) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        {props.selectProps.menuIsOpen ? (
          <Icon icon="arrowsmallup" />
        ) : (
          <Icon icon="arrowsmalldown" />
        )}
      </components.DropdownIndicator>
    )
  );
};

const defaultStyles = {
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: colors.neutral.Gray2,
    fill: colors.neutral.Gray2,
    padding: "3px",
  }),
  select: (provided, state) => ({
    ...provided,
  }),
  menu: (provided, state) => ({
    ...provided,
    borderRadius: "8px",
    width: "160px",
    backgroundColor: colors.neutral.Gray7,
  }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: "none",
    width: "145px",
    height: "30px",
    fontWeight: "600",
    backgroundColor: state.isSelected
      ? colors.primary.CCPurple
      : colors.neutral.Gray7,
    color: state.isSelected ? colors.neutral.CCWhite : colors.neutral.Gray2,
    fill: state.isSelected ? colors.neutral.CCWhite : colors.neutral.Gray2,
    margin: "0px 5px 0px 3px",
    paddingTop: "4px",
    paddingBottom: "0px",
    paddingLeft: "8px",
    display: "flex",

    "&:hover": {
      color: colors.neutral.CCWhite,
      fill: colors.neutral.CCWhite,
      background: colors.primary.CCPurple,
      cursor: "pointer",
    },
    svg: {
      fill: state.isSelected ? colors.neutral.CCWhite : colors.neutral.Gray2,
      visibility: state.isSelected ? "visible" : "hidden",
      margin: "5px 0px 0px 0px",
    },
    div: {
      marginLeft: "10px",
    },
  }),
  control: (base, state) => ({
    ...base,
    boxShadow: "none",
    border: state.isFocused
      ? state.selectProps.menuIsOpen
        ? "2px solid #713188"
        : "2px solid #6799C2"
      : "1px solid colors.neutral.Gray5",
    borderRadius: "8px",
    background: colors.neutral.Gray7,
    fontWeight: "600",
    height: "39px",
    padding: "0px 9px 0px 1px",
    alignItems: "center",

    "&:hover": {
      border: "2px solid #713188",
      transition: "all 200ms",
    },
    svg: {
      color: colors.neutral.Gray2,
      fill: colors.neutral.Gray2,
    },
  }),
  singleValue: (base, state) => ({
    ...base,
    color: colors.neutral.Gray2,
    fill: colors.neutral.Gray2,
  }),
  placeholder: (base, state) => ({
    ...base,
    color: colors.neutral.Gray3,
    fill: colors.neutral.Gray3,
  }),
};

const inlineStyles = {
  indicatorsContainer: (provided, state) => ({
    ...provided,
    marginRight: "3px",
    div: {
      padding: "0px",
    },
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    width: "34px",
    height: "22px",
    padding: "0px",
    alignContent: "center",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
  }),
  select: (provided, state) => ({
    ...provided,
  }),
  menu: (provided, state) => ({
    ...provided,
    borderRadius: "8px",
    width: "80px",
    backgroundColor: colors.neutral.Gray7,
  }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: "none",
    width: "74px",
    height: "30px",
    fontWeight: "600",
    backgroundColor: colors.neutral.Gray7,
    color: state.isSelected ? colors.primary.CCPurple : colors.neutral.Gray2,
    fill: state.isSelected ? colors.primary.CCPurple : colors.neutral.Gray2,
    margin: "0px 3px 0px 3px",
    paddingTop: "4px",
    paddingBottom: "0px",
    paddingLeft: "5px",
    display: "flex",

    "&:hover": {
      color: colors.neutral.CCWhite,
      fill: colors.neutral.CCWhite,
      background: colors.primary.CCPurple,
      cursor: "pointer",
    },
    svg: {
      fill: state.isSelected ? colors.primary.CCPurple : colors.neutral.CCWhite,
      visibility: state.isSelected ? "visible" : "hidden",
      margin: "4px 0px 0px 0px",
    },
    div: {
      marginRight: "5px",
    },
  }),
  control: (base, state) => ({
    ...base,
    boxShadow: "none",
    borderRadius: "4px",
    border: state.isFocused
      ? state.selectProps.menuIsOpen
        ? "2px solid #713188"
        : "2px solid transparent"
      : "2px solid transparent",
    fontWeight: "700",
    height: "26px",
    minHeight: "26px",
    minWidth: "34px",

    "&:hover": {
      border: "2px solid #713188",
      transition: "all 200ms",
    },
    svg: {
      color: colors.neutral.Gray2,
      fill: colors.neutral.Gray2,
    },
  }),
  singleValue: (base, state) => ({
    ...base,
    color: colors.neutral.Gray2,
    fill: colors.neutral.Gray2,
    margin: "0px 0px 0px 3px",
  }),
};

export function Dropdown({
  type,
  title,
  options,
  selectedOption,
  setSelectedOption,
  ...props
}) {
  const defaultPlaceholder = "Select...";
  const inlinePlaceholder = "";
  if (type === "inline" && !selectedOption) {
    selectedOption = options && options.length > 0 ? options[0] : null;
  }

  if (type === "inline") {
    return (
      <InlineWrapper>
        <InlineTitle>{title}:</InlineTitle>
        <Select
          placeholder={inlinePlaceholder}
          styles={inlineStyles}
          selectedValue={selectedOption}
          defaultValue={selectedOption}
          value={selectedOption}
          onChange={setSelectedOption}
          options={options}
          menuPosition="fixed"
          components={{
            DropdownIndicator,
            IndicatorSeparator: null,
            Option: InlineOption,
          }}
        />
      </InlineWrapper>
    );
  } else {
    return (
      <DefaultWrapper>
        <DefaultTitle>{title}</DefaultTitle>
        <Select
          placeholder={defaultPlaceholder}
          styles={defaultStyles}
          selectedValue={selectedOption}
          defaultValue={selectedOption}
          value={selectedOption}
          onChange={setSelectedOption}
          options={options}
          menuPosition="fixed"
          components={{
            DropdownIndicator,
            IndicatorSeparator: null,
            Option: DefaultOption,
          }}
        />
      </DefaultWrapper>
    );
  }
}

Dropdown.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  options: PropTypes.array,
  selectedOption: PropTypes.object,
  setSelectedOption: PropTypes.func,
};

Dropdown.defaultProps = {
  type: "default",
  title: "Dropdown label",
};
