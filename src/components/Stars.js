import React from "react";
import styled from "styled-components";
import Star from "../shared/logos/Star.svg";

const IconRect = styled.div`
  width: 15px;
  height: 15px;
  border: none;
  margin-left: 5px;

  path {
    fill: ${(props) => (props.dimColor ? props.dimColor : "white")};
    opacity: ${(props) => (props.dimColor ? 0.2 : 1)};
  }
`;

export function Stars({ starCount, dimColor }) {
  if (starCount > 5) {
    starCount = 5;
  }

  const dimmedStars = 5 - starCount;
  let content = [];

  for (let i = 0; i < starCount; i++) {
    content.push(
      <IconRect key={i}>
        <img src={Star} alt="Star"/>
      </IconRect>
    );
  }
  for (let i = 0; i < dimmedStars; i++) {
    content.push(
      <IconRect dimColor={dimColor} key={i + 5}>
        <img src={Star} alt="Star"/>
      </IconRect>
    );
  }
  return content;
}
