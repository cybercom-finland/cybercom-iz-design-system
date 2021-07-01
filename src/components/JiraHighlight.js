import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { color, colors, typography } from "../shared/styles";
import { Icon } from "./Icon";

export const HIGHLIGHT_TYPES = {
  TICKETS: "tickets",
  RESPONSE: "response",
  RESOLUTION: "resolution",
};

const LabelText = css`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.s3};
  line-height: 18px;
  color: ${color.dark};
`;

const ValueText = css`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.m3};
  line-height: 34px;
  color: ${colors.neutral.Gray1};
`;

const UnitText = css`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.s2};
  line-height: 24px;
  color: ${colors.neutral.Gray1};
`;

const Container = styled.div`
  width: ${(props) => (props.columns === 1 ? "217px" : "332px")};
  height: 126px;
  border: 1px solid white;
`;

Container.defaultProps = {
  columns: 1,
};

const InnerContainer = styled.div`
  width: ${(props) => (props.columns === 1 ? "201px" : "316px")};
  height: 110px;
  margin-left: 16px;
  margin-top: 16px;
  background: #ffffff;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: ${(props) => (props.columns === 1 ? "column" : "row")};
`;

InnerContainer.defaultProps = {
  columns: 1,
};

const IconContainer = styled.div`
  position: absolute;
  width: 36px;
  height: 36px;
`;

const Label = styled.div`
  ${LabelText}
  margin-left: 40px;
  margin-top: 15px;
  max-width: ${(props) => (props.columns === 1 ? "140px" : "90px")};
  max-height: 36px;
  height: 36px;
  overflow: hidden;
`;

Label.defaultProps = {
  columns: 1,
};

const Value = styled.div`
  ${ValueText}
  margin-left: 40px;
  margin-top: 7px;
`;

const Unit = styled.div`
  ${UnitText}
  margin-left: 5px;
  margin-top: 7px;
`;

const ItemContainer = styled.div`
  width: ${(props) => (props.position === "left" ? "152px" : "165px")};
`;

ItemContainer.defaultProps = {
  position: "left",
};

const Divider = styled.div`
  width: 0;
  height: 43px;
  border: 1px solid #e0e0e0;
  margin-top: 41px;
`;

const ValueContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

function JiraHighlightOne({ type, items }) {
  return (
    <Container>
      <IconContainer>
        <Icon icon={type} aria-hidden />
      </IconContainer>
      <InnerContainer>
        <Label>{items[0].label}</Label>
        <ValueContainer>
          <Value>{items[0].value}</Value>
          <Unit>{items[0].unit}</Unit>
        </ValueContainer>
      </InnerContainer>
    </Container>
  );
}

function JiraHighlightTwo({ type, items }) {
  return (
    <Container columns={2}>
      <IconContainer>
        <Icon icon={type} aria-hidden />
      </IconContainer>
      <InnerContainer columns={2}>
        <ItemContainer>
          <Label columns={2}>{items[0].label}</Label>
          <ValueContainer>
            <Value>{items[0].value}</Value>
            <Unit>{items[0].unit}</Unit>
          </ValueContainer>
        </ItemContainer>
        <Divider />
        <ItemContainer position="right">
          <Label columns={2}>{items[1].label}</Label>
          <ValueContainer>
            <Value>{items[1].value}</Value>
            <Unit>{items[1].unit}</Unit>
          </ValueContainer>
        </ItemContainer>
      </InnerContainer>
    </Container>
  );
}

export function JiraHighlight({ type, items }) {
  if (!items || items.length === 0) {
    return null;
  }

  const itemsCount = items.length > 2 ? 2 : items.length;

  if (itemsCount === 1 && type === HIGHLIGHT_TYPES.TICKETS) {
    return <JiraHighlightOne type={type} items={items} />;
  } else if (
    itemsCount === 2 &&
    (type === HIGHLIGHT_TYPES.RESPONSE || type === HIGHLIGHT_TYPES.RESOLUTION)
  ) {
    return <JiraHighlightTwo type={type} items={items} />;
  } else {
    return null;
  }
}

JiraHighlight.propTypes = {
  type: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
};

JiraHighlight.defaultProps = {
  type: "none",
  items: [{ label: "", value: "", unit: "" }],
};
