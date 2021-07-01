import React from "react";
import styled from "styled-components";
import {
  JiraHighlight,
  HIGHLIGHT_TYPES,
} from "../../../components/JiraHighlight";

const HighlightsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
  margin-left: -18px;
`;

const StyledHighlight = styled.div`
  margin-right: 30px;
`;

export const JiraHighlightsContainer = () => (
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
);
