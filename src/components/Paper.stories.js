import React from "react";
import styled from "styled-components";
import { color, typography } from "../shared/styles";
import { Paper } from "./Paper";

export default {
  title: "Design System/Paper",
  component: Paper,
};

const Main = styled.div`
  padding: 1rem;
`;

const Container = styled.div`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.m1};
  line-height: 125%;
  color: ${color.dark};
  margin: 20px 20px;
`;

const PageHeader = styled.div`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.m3};
  line-height: 125%;
  margin-bottom: 32px;
  margin-left: 0px;
  color: #000000;
`;

const Content = (
  <Container>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
    pulvinar elit lacus, a aliquam ante efficitur sit amet.
  </Container>
);

export const PaperStories = (args) => (
  <Main>
    <PageHeader>Paper Component</PageHeader>
    <Paper children={Content} width="300px" height="" />
  </Main>
);

PaperStories.storyName = "Paper";
