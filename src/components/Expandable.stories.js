import React, { useState } from "react";
import styled from "styled-components";
import { Expandable } from "./Expandable";
import { Button } from "./Button";
import { figmaLinks } from "../shared/figmaLinks";

export default {
  title: "Design System/Expandable",
  component: Expandable,
};

const Content = styled.div`
  margin: 10px;
`;

const Main = styled.div`
  padding: 1rem;
`;

export const ExpandableStories = (args) => {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Main>
      <Expandable
        label="Expand"
        isExpanded={expanded}
        onClick={() => handleClick()}
      >
        <Content>
          <h4>
            This expandable content can contain any components, e.g. buttons.
          </h4>
          <br />
          <Button icon="close">Example</Button>
        </Content>
      </Expandable>
    </Main>
  );
};
ExpandableStories.storyName = "Expandable";
ExpandableStories.story = {
  parameters: {
    design: {
      type: "figma",
      url: figmaLinks.buttons,
    },
  },
};
