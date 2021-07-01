import React from "react";
import styled from "styled-components";

import { Icon } from "./Icon";
import { icons } from "../shared/icons";
import { figmaLinks } from "../shared/figmaLinks";

const Main = styled.div`
  padding: 1rem;
`;

const MetaContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
`;

const Meta = styled.div`
  color: #666;
  font-size: 12px;
  text-align: left;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  width: 200px;
  height: 40px;
  margin-bottom: 10px;
`;

const List = styled.div`
  margin-top: 32px;
  width: 800px;
  display: flex;
  flex-flow: row wrap;
`;

const IconContainer = styled.div`
  width: 50px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default {
  title: "Design System/Icon",
  component: Icon,
};

export const AllIconsWithLabels = (args) => (
  <Main>
    There are {Object.keys(icons).length + 3} icons
    <List>
      {Object.keys(icons).map((key) => (
        <Item key={key}>
          <IconContainer>
            <Icon icon={key} aria-hidden />
          </IconContainer>
          <MetaContainer>
            <Meta>{key}</Meta>
          </MetaContainer>
        </Item>
      ))}
      <Item key="normal">
        <IconContainer>
          <Icon icon="normal" aria-hidden />
        </IconContainer>
        <MetaContainer>
          <Meta>normal</Meta>
        </MetaContainer>
      </Item>
      <Item key="more">
        <IconContainer>
          <Icon icon="more" aria-hidden />
        </IconContainer>
        <MetaContainer>
          <Meta>more</Meta>
        </MetaContainer>
      </Item>
      <Item key="indeterminate">
        <IconContainer>
          <Icon icon="indeterminate" aria-hidden />
        </IconContainer>
        <MetaContainer>
          <Meta>indeterminate</Meta>{" "}
        </MetaContainer>
      </Item>
    </List>
  </Main>
);

AllIconsWithLabels.story = {
  parameters: {
    design: {
      type: "figma",
      url: figmaLinks.icons,
    },
  },
};
