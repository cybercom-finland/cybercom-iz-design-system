import React from "react";
import styled from "styled-components";
import {Typography} from "./Typography";

export default {
  title: "Design System/TypographyComponent",
  component: Typography,
};

const Main = styled.div`
  padding: 1rem;
`;

export const TypographyComponent = () => (
  <Main>
    <Typography type="h1" text="I'm an H1"/>
    <Typography type="h2" text="I'm an H2"/>
    <Typography type="h3" text="I'm an H3"/>
    <Typography type="h4" text="I'm an H4"/>
    <Typography type="body1" text="I'm a body1"/>
    <Typography type="body2" text="I'm a body2"/>
    <Typography type="body1" withIcon iconName="standardChange" text="I'm a body1 with an icon on the left"/>
    <br/>
    <Typography type="body1" withIcon iconRight iconName="development" text="I'm a body1 with an icon on the right"/>
  </Main>
);
 
