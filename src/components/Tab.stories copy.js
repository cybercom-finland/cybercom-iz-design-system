import React from "react";
import styled from "styled-components";
import { colors, typography } from "../shared/styles";
import { figmaLinks } from "../shared/figmaLinks";
import { TabServiceReport } from "./Tab.ServiceReport";

export default {
  title: "Design System/Tab",
  component: TabServiceReport,
};

const Main = styled.div`
  padding: 1rem;
`;

const PageHeader = styled.div`
  width: 1384px;
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.m3};
  line-height: 34px;
  color: #000000;
  text-align: center;
`;

const Container = styled.div`
  width: 1384px;
  height: 200px;
  border: 1px solid ${colors.neutral.Gray5};
  margin-top: 32px;
  padding-left: 32px;
  padding-top: 32px;
`;

const Header = styled.div`
  width: 1384px;
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.m2};
  line-height: 125%;
  color: ${colors.neutral.Gray4};
`;

const JiraStatisticsPage = () => {
  return (
    <Container>
      <Header>Jira Statistics...</Header>
    </Container>
  );
};

const KaemmiSlasPage = () => {
  return (
    <Container>
      <Header>Kaemmi SLAs...</Header>
    </Container>
  );
};

const SdFeedbackPage = () => {
  return (
    <Container>
      <Header>SD Feedback...</Header>
    </Container>
  );
};

const items = [
  {
    label: "Jira Statistics",
    disableButton: false,
    page: JiraStatisticsPage,
  },
  {
    label: "Kaemmi SLAs",
    disableButton: true,
    page: KaemmiSlasPage,
  },
  {
    label: "SD Feedback",
    disableButton: true,
    page: SdFeedbackPage,
  },
];

export const Tabs = (args) => {
  return (
    <Main>
      <PageHeader>Tab</PageHeader>
      <TabServiceReport items={items} />
    </Main>
  );
};

Tabs.storyName = "Tab";

Tabs.story = {
  parameters: {
    design: {
      type: "figma",
      url: figmaLinks.tab,
    },
  },
};
