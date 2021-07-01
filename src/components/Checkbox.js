import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { colors, typography } from "../shared/styles";
import { Icon } from "./Icon";

const FocusProps = css`
  outline: none;
  border: 2px solid #6799c2;
`;

const HoverDefaultProps = css`
  background: rgba(170, 131, 184, 0.2);
  box-shadow: 0px 0px 3px 5px rgba(170, 131, 184, 0.2);
  cursor: pointer;
`;

const HoverWithIconProps = css`
  background: ${colors.secondary.CCDarkPurple};
  box-shadow: 0px 0px 3px 5px rgba(170, 131, 184, 0.2);
  cursor: pointer;
`;

const StyledCheckbox = styled.div`
  width: 24px;
  height: 24px;
  background: ${colors.neutral.CCWhite};
  border: 1px solid ${colors.neutral.Gray5};
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;


  ${(props) =>
    props.isDisabled &&
    (props.isChecked || props.isIndeterminate) &&
    `background: ${colors.neutral.Gray4};`}

  ${(props) =>
    !props.isDisabled &&
    (props.isChecked || props.isIndeterminate) &&
    `background: ${colors.primary.CCPurple};`}

  
  svg {
    display: ${(props) => (props.showIcon ? "" : "none")};
  }

  ${(props) =>
    !props.isEventsDisabled &&
    (props.isChecked || props.isIndeterminate) &&
    css`
      &:hover {
        ${HoverWithIconProps}
      }
    `}

  ${(props) =>
    !props.isEventsDisabled &&
    !props.isChecked &&
    !props.isIndeterminate &&
    css`
      &:hover {
        ${HoverDefaultProps}
      }
    `}

  ${(props) =>
    props.isEventsDisabled &&
    (props.isChecked || props.isIndeterminate) &&
    props.forceHover &&
    HoverWithIconProps}

  ${(props) =>
    props.isEventsDisabled &&
    !props.isChecked &&
    !props.isIndeterminate &&
    props.forceHover &&
    HoverDefaultProps}

  &:focus {
    ${FocusProps}
  }

  ${(props) => props.isEventsDisabled && props.forceFocus && FocusProps}
`;

const StyledIcon = styled.div`
  margin-left: 8px;
`;

const StyledLabel = styled.div`
  margin-left: 5px;

  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.semibold};
  font-size: ${typography.size.s3};
  line-height: 112%; /* identical to box height, or 112% */

  color: ${(props) =>
    props.isDisabled ? colors.neutral.Gray4 : colors.neutral.Gray2};
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledArrow = styled.div`
  margin-left: 10px;
  margin-top: 5px;
  width: 8px;
  height: 6px;
  overflow: hidden;

  ${(props) =>
    props.onClick &&
    css`
      &:hover {
        cursor: pointer;
      }
    `}
`;

export function Checkbox({
  isDisabled,
  isChecked,
  isIndeterminate,
  label,
  icon,
  isTreeNode,
  isTreeOpen,
  isEventsDisabled,
  forceHover,
  forceFocus,
  onClick,
  onArrowClick,
  ...props
}) {
  return (
    <CheckboxContainer {...props}>
      <StyledCheckbox
        isDisabled={isDisabled}
        isChecked={isChecked}
        isIndeterminate={isIndeterminate}
        isTreeNode={isTreeNode}
        isEventsDisabled={isEventsDisabled}
        forceHover={forceHover}
        forceFocus={forceFocus}
        showIcon={isChecked || isIndeterminate}
        onClick={onClick}
        
      >
        {isIndeterminate ? (
          <Icon icon="indeterminate" fill="white" aria-hidden />
        ) : (
          <Icon icon="check" fill="white" aria-hidden />
        )}
      </StyledCheckbox>
      {icon && (
        <StyledIcon>
          <Icon icon={icon} aria-hidden />
        </StyledIcon>
      )}
      <StyledLabel isDisabled={isDisabled}>{label}</StyledLabel>
      {isTreeNode && (
        <StyledArrow onClick={onArrowClick}>
          {isTreeOpen ? (
            <Icon icon="arrowsmallup" aria-hidden />
          ) : (
            <Icon icon="arrowsmalldown" aria-hidden />
          )}
        </StyledArrow>
      )}
    </CheckboxContainer>
  );
}

Checkbox.propTypes = {
  isDisabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  isIndeterminate: PropTypes.bool,
  label: PropTypes.string,
  icon: PropTypes.string,
  isTreeNode: PropTypes.bool,
  isTreeOpen: PropTypes.bool,
  isEventsDisabled: PropTypes.bool,
  forceHover: PropTypes.bool,
  forceFocus: PropTypes.bool,
  onClick: PropTypes.func,
  onArrowClick: PropTypes.func,
};

Checkbox.defaultProps = {
  isDisabled: false,
  isChecked: false,
  isIndeterminate: false,
  label: "",
  icon: "",
  isTreeNode: false,
  isTreeOpen: false,
  isEventsDisabled: false,
  forceHover: false,
  forceFocus: false,
  onClick: () => {},
  onArrowClick: () => {},
};
