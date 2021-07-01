import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors, typography } from "../shared/styles";
import { Icon } from "./Icon";

const ExpandButton = styled.button`
  display: flex;
  align-items: center;
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  cursor: pointer;
  padding: 0;
  border: none;
  background: none;
  color: ${(props) => props.textColor};

  svg {
    margin-left: 12px;
    fill: ${(props) => props.arrowColor};
  }
`;

ExpandButton.defaultProps = {
  textColor: colors.primary.CCPurple,
  arrowColor: colors.primary.CCPurple,
  fontWeight: typography.weight.bold,
  fontFamily: typography.type.primary,
  fontSize: "16px",
  lineHeight: "20px",
};

const StyledIcon = styled(Icon)`
  width: 26px;
`;

export function Expandable({ label, isExpanded, onClick, children, ...props }) {
  if (isExpanded) {
    return (
      <React.Fragment>
        <ExpandButton onClick={onClick} {...props}>
          {label}
          <StyledIcon icon="arrowup" />
        </ExpandButton>
        {children}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <ExpandButton onClick={onClick} {...props}>
          {label}
          <StyledIcon icon="arrowdown" />
        </ExpandButton>
      </React.Fragment>
    );
  }
}

Expandable.propTypes = {
  label: PropTypes.string,
  isExpanded: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Expandable.defaultProps = {
  label: "Expand",
  isExpanded: false,
  onClick: () => {},
};
