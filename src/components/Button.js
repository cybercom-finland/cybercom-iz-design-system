import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Icon } from "./Icon";
import { colors, typography } from "../shared/styles";

export const TYPES = {
  PRIMARY: "Primary",
  TERTIARY: "Tertiary",
};

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.semibold};
  font-size: ${typography.size.s3};
  line-height: ${typography.size.s3};
  cursor: pointer;

  ${(props) =>
    props.type === TYPES.PRIMARY &&
    css`
      border-radius: 8px;
      color: ${colors.neutral.CCWhite};
      fill: ${colors.neutral.CCWhite};
      background: ${colors.primary.CCPurple};
      border: 0px;
      width: ${(props) => (props.icon ? "167px" : "140px")};
      height: 40px;

      ${(props) =>
        props.icon &&
        css`
          padding: 10px 42px;
        `}

      &:hover:not([disabled]) {
        background: ${colors.secondary.CCDarkPurple};
        transition: all 200ms;
      }

      &:focus {
        background: ${colors.primary.CCPurple};
        border: 2px solid #6799c2;
      }

      &:focus:hover {
        background: ${colors.secondary.CCDarkPurple};
        transition: all 200ms;
      }

      &:disabled {
        cursor: not-allowed;
        background: ${colors.neutral.Gray4};
        color: ${colors.neutral.CCWhite};
        fill: ${colors.neutral.CCWhite};
      }
    `}

  ${(props) =>
    props.type === TYPES.TERTIARY &&
    css`
      padding: 0;
      background: none;
      line-height: ${typography.size.m1};
      height: ${typography.size.m1};
      color: ${colors.primary.CCPurple};
      fill: ${colors.primary.CCPurple};
      border: 2px solid transparent;

      &:hover:not([disabled]) {
        color: ${colors.secondary.CCDarkPurple};
        fill: ${colors.secondary.CCDarkPurple};
        transition: all 200ms;
      }

      &:focus {
        color: ${colors.primary.CCPurple};
        fill: ${colors.primary.CCPurple};
        border: 2px solid #6799c2;
      }

      &:focus:hover {
        color: ${colors.secondary.CCDarkPurple};
        fill: ${colors.secondary.CCDarkPurple};
        transition: all 200ms;
      }

      &:disabled {
        cursor: not-allowed;
        color: ${colors.neutral.Gray4};
        fill: ${colors.neutral.Gray4};
      }
    `}
`;

const StyledIcon = styled(Icon)`
  width: 24px;
  div {
    margin-right: 10px;
  }
  ${(props) =>
    props.disabled &&
    css`
      fill: ${colors.neutral.Gray4};
    `}
`;

export function Button({ type, icon, children, ...props }) {
  if (icon && type === TYPES.PRIMARY) {
    return (
      <StyledButton type={type} icon={icon} {...props}>
        <StyledIcon icon={icon} fill={colors.neutral.CCWhite} />
        {children}
      </StyledButton>
    );
  } else if (icon && type === TYPES.TERTIARY) {
    return (
      <StyledButton type={type} icon={icon} {...props}>
        <StyledIcon icon={icon} {...props} />
        {children}
      </StyledButton>
    );
  } else {
    return (
      <StyledButton type={type} icon={icon} {...props}>
        {children}
      </StyledButton>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  type: TYPES.PRIMARY,
  icon: undefined,
};
