import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { icons } from "../shared/icons";
import { colors } from "../shared/styles";

const Svg = styled.svg`
  ${(props) =>
    (props.icon === "arrowsmallup" ||
      props.icon === "arrowsmalldown" ||
      props.icon === "arrowsmallleft" ||
      props.icon === "arrowsmallright" ||
      props.icon === "arrowup" ||
      props.icon === "arrowdown" ||
      props.icon === "arrowleft" ||
      props.icon === "arrowright") &&
    `
      fill: ${colors.neutral.Gray1};
    `}

  ${(props) =>
    (props.icon === "change" ||
      props.icon === "standardChange" ||
      props.icon === "bulletin") &&
    `
      color: ${colors.neutral.CCWhite};
    `}

  ${(props) =>
    props.icon === "pointer" &&
    `
      fill: white;
      stroke: black;
      stroke-opacity: 0.8;
    `}
  
  ${(props) =>
    (props.icon === "filter" ||
      props.icon === "menu" ||
      props.icon === "close" ||
      props.icon === "check" ||
      props.icon === "search") &&
    `
      fill: ${colors.primary.CCPurple};
    `}

  ${(props) =>
    (props.icon === "tickets" ||
      props.icon === "response" ||
      props.icon === "resolution" ||
      props.icon === "design" ||
      props.icon === "development") &&
    `
      fill: none;
    `}
`;

const Path = styled.path`
  ${(props) =>
    props.icon === "major" &&
    `
      stroke: ${colors.semantic.CCRed};
      stroke-width: 1.5;
    `}

  ${(props) =>
    props.icon === "minor" &&
    `
      stroke: ${colors.primary.CCBlue};
      stroke-width: 1.5;
    `}

  ${(props) =>
    (props.icon === "change" ||
      props.icon === "standardChange" ||
      props.icon === "bulletin" ||
      props.icon === "incident" ||
      props.icon === "problem" ||
      props.icon === "subtask" ||
      props.icon === "request" ||
      props.icon === "tickets" ||
      props.icon === "response" ||
      props.icon === "resolution" ||
      props.icon === "design" ||
      props.icon === "development") &&
    `
      fill: ${colors.neutral.CCWhite};
    `}

  ${(props) =>
    props.fill &&
    `
      fill: ${props.fill};
    `}
`;

const PathRequest = styled.path`
  ${(props) =>
    props.icon === "request" &&
    css`
      transform: translate(8px, 5px);
      fill: ${colors.neutral.CCWhite};
    `}

  ${(props) =>
    props.fill &&
    `
      fill: ${props.fill};
    `}
`;

const Circle = styled.circle`
  ${(props) =>
    props.icon === "normaldot1" &&
    `
      cx: 6;
      cy:2;
      r: 2;
      fill: ${colors.neutral.Gray2};
    `}

  ${(props) =>
    props.icon === "normaldot2" &&
    `
      cx: 11;
      cy:2;
      r: 2;
      fill: ${colors.neutral.Gray2};
    `}

  ${(props) =>
    props.icon === "normaldot3" &&
    `
      cx: 16;
      cy:2;
      r: 2;
      fill: ${colors.neutral.Gray2};
    `}

  ${(props) =>
    props.icon === "moredot1" &&
    `
      cx: 7;
      cy: 17;
      r: 1;
      fill: ${colors.neutral.Gray3};
    `}

  ${(props) =>
    props.icon === "moredot2" &&
    `
      cx: 11;
      cy: 17;
      r: 1;
      fill: ${colors.neutral.Gray3};
    `}

  ${(props) =>
    props.icon === "moredot3" &&
    `
      cx: 15;
      cy: 17;
      r: 1;
      fill: ${colors.neutral.Gray3};
    `}
`;

const IconCircle = styled.div`
  width: 21px;
  height: 21px;
  border: none;
  border-radius: 50%;
  background: ${colors.primary.CCBlue};
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.icon === "standardChange" &&
    `
    background: #29A68A;
   `}

  ${(props) =>
    props.icon === "bulletin" &&
    `
    background: ${colors.secondary.CCDarkPurple};
   `}

  ${(props) =>
    props.icon === "incident" &&
    `
    background: ${colors.semantic.CCRed};
    `}

  ${(props) =>
    props.icon === "problem" &&
    `
    background: #E57701;
    `}

  ${(props) =>
    props.icon === "subtask" &&
    `
    background: ${colors.secondary.CCDarkBlue};
    `}

  ${(props) =>
    props.icon === "request" &&
    `
    background: ${colors.primary.CCPurple};
    `}

  ${(props) =>
    props.icon === "major" &&
    `
      background: ${colors.semantic.CCRedLight};
    `}

  ${(props) =>
    props.icon === "minor" &&
    `
      background: ${colors.secondary.CCLightBlue};
    `}

  ${(props) =>
    props.icon === "normal" &&
    `
      background: ${colors.neutral.Gray5};
    `}

  ${(props) =>
    (props.icon === "tickets" ||
      props.icon === "response" ||
      props.icon === "resolution" ||
      props.icon === "design" ||
      props.icon === "development") &&
    `
      width: 36px;
      height: 36px;
      background: ${colors.primary.CCPurple};
    `}
`;

const IconRect = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Rect = styled.rect`
  x: 4;
  y: 11;
  width: 16;
  height: 2;
  rx: 1;
  fill: ${colors.neutral.Gray3};

  ${(props) =>
    props.fill &&
    `
      fill: ${props.fill};
    `}
`;

export function Icon({ icon, fill, ...props }) {
  if (!icon) {
    return null;
  }

  const iconData = icons[icon];

  if (
    icon !== "normal" &&
    icon !== "more" &&
    icon !== "indeterminate" &&
    !iconData
  ) {
    return null;
  }

  if (icon === "normal") {
    return (
      <IconCircle icon={icon} {...props}>
        <Svg icon={icon} {...props} width="21px" height="4px">
          <Circle icon="normaldot1" {...props} />
          <Circle icon="normaldot2" {...props} />
          <Circle icon="normaldot3" {...props} />
        </Svg>
      </IconCircle>
    );
  } else if (icon === "more") {
    return (
      <IconRect width="24px" height="24px" {...props}>
        <Svg icon={icon} {...props} width="24px" height="24px">
          <Circle icon="moredot1" {...props} />
          <Circle icon="moredot2" {...props} />
          <Circle icon="moredot3" {...props} />
        </Svg>
      </IconRect>
    );
  } else if (icon === "indeterminate") {
    return (
      <IconRect width="24px" height="24px" {...props}>
        <Svg icon={icon} {...props} width="24px" height="24px">
          <Rect x="4" y="11" width="16" height="2" rx="1" fill={fill} />
        </Svg>
      </IconRect>
    );
  } else if (
    icon === "change" ||
    icon === "standardChange" ||
    icon === "bulletin" ||
    icon === "incident" ||
    icon === "problem" ||
    icon === "subtask" ||
    icon === "request" ||
    icon === "major" ||
    icon === "minor" ||
    icon === "tickets" ||
    icon === "response" ||
    icon === "resolution" ||
    icon === "design" ||
    icon === "development"
  ) {
    return (
      <IconCircle icon={icon} {...props}>
        <Svg
          icon={icon}
          {...props}
          width={iconData.width}
          height={iconData.height}
        >
          <Path d={iconData.d} icon={icon} {...props} />
          {icon === "request" && iconData.d2 && (
            <PathRequest d={iconData.d2} icon={icon} fill={fill} />
          )}
        </Svg>
      </IconCircle>
    );
  } else {
    return (
      <IconRect width={iconData.width} height={iconData.height} {...props}>
        <Svg
          icon={icon}
          {...props}
          width={iconData.width}
          height={iconData.height}
        >
          <Path d={iconData.d} icon={icon} fill={fill} {...props} />
        </Svg>
      </IconRect>
    );
  }
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  fill: PropTypes.string,
};

Icon.defaultProps = {
  fill: undefined,
};
