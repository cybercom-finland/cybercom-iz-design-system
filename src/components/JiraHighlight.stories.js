import React from "react";
import styled from "styled-components";
import { colors, typography } from "../shared/styles";
import { JiraHighlight, HIGHLIGHT_TYPES } from "./JiraHighlight";
import { figmaLinks } from "../shared/figmaLinks";

export default {
  title: "Design System/Jira Highlights",
  component: JiraHighlight,
};

const Container = styled.div`
  width: 412px;
  //height: 555px;
  background: #ffffff;
  border: 1px solid ${colors.neutral.Gray4};
  margin-top: 32px;
  margin-left: 32px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const HighlightsContainer = styled.div`
  margin: 0 20px;
  padding: 20px;
`;

const StyledHighlight = styled.div`
  margin-bottom: 16px;
`;

const StyledHeader = styled.div`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.m3};
  line-height: 112%;
  text-align: center;
  margin: 10px 0;
  color: black;
`;

export const JiraHighlights = (args) => (
  <Container>
    <StyledHeader>Jira Highlights</StyledHeader>
    <HighlightsContainer>
      <StyledHighlight>
        <JiraHighlight
          type={HIGHLIGHT_TYPES.TICKETS}
          items={[{ label: "Total tickets", value: "40", unit: "" }]}
        />
      </StyledHighlight>
      <StyledHighlight>
        <JiraHighlight
          type={HIGHLIGHT_TYPES.RESPONSE}
          items={[
            { label: "Responses failed", value: "7", unit: "" },
            { label: "Response SLA", value: "82.50", unit: "%" },
          ]}
        />
      </StyledHighlight>
      <StyledHighlight>
        <JiraHighlight
          type={HIGHLIGHT_TYPES.RESOLUTION}
          items={[
            { label: "Resolution failed", value: "0", unit: "" },
            { label: "Resolution SLA", value: "100", unit: "%" },
          ]}
        />
      </StyledHighlight>
    </HighlightsContainer>
  </Container>
);

JiraHighlights.storyName = "Jira Highlights";

JiraHighlights.story = {
  parameters: {
    design: {
      type: "figma",
      url:
        figmaLinks.jiraHighlights,
    },
  },
};
