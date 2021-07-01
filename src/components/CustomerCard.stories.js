import React from "react";
import styled from "styled-components";
import { typography } from "../shared/styles";
import { CustomerCard } from "./CustomerCard";
import { figmaLinks } from "../shared/figmaLinks";
import {
  SDFeedbackData1,
  SDFeedbackData3,
  KammiSC3,
  KammiSC4,
  JiraStatsAcme1,
  JiraStatsSterling2,
} from "./CustomerCardExample";

export default {
  title: "Design System/Customer Cards",
  component: CustomerCard,
};

const Main = styled.div`
  padding: 1rem;
`;

const Header = styled.div`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.m3};
  line-height: 112%;
  text-align: left;
  margin: 10px 0;
  color: black;
`;

const SubHeader = styled.div`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.semibold};
  font-size: ${typography.size.m1};
  line-height: 112%;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 32px;
  color: black;
`;

export const JiraStatistics = (args) => (
  <Main>
    <Header>Customer Cards</Header>
    <SubHeader>Jira Statistics</SubHeader>
    <CustomerCard item={JiraStatsAcme1} />
    <br />
    <CustomerCard item={JiraStatsSterling2} />
  </Main>
);

export const SDFeedback = (args) => (
  <Main>
    <Header>Customer Cards</Header>
    <SubHeader>SD Feedback</SubHeader>
    <CustomerCard item={SDFeedbackData1} />
    <br />
    <CustomerCard item={SDFeedbackData3} />
  </Main>
);

export const Kammi = (args) => (
  <Main>
    <Header>Customer Cards</Header>
    <SubHeader>Kammi Feedback</SubHeader>
    <CustomerCard item={KammiSC3} />
    <br />
    <CustomerCard item={KammiSC4} />
  </Main>
);

JiraStatistics.story = {
  parameters: {
    design: {
      type: "figma",
      url: figmaLinks.customerCards,
    },
  },
};

SDFeedback.story = {
  parameters: {
    design: {
      type: "figma",
      url: figmaLinks.customerCards,
    },
  },
};

Kammi.story = {
  parameters: {
    design: {
      type: "figma",
      url: figmaLinks.customerCards,
    },
  },
};
