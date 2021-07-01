import React, { useState } from "react";
import styled from "styled-components";
import { figmaLinks } from "../shared/figmaLinks";
import { colors, typography } from "../shared/styles";

import { Checkbox } from "./Checkbox";
import { CheckboxTreeExample } from "./CheckboxTreeExample";

export default {
  title: "Design System/Checkbox",
  component: Checkbox,
};

const Container = styled.div`
  width: 385px;
  height: 1000px;
  background: #ffffff;
  border: 1px solid ${colors.neutral.Gray4};
  margin-top: 32px;
  margin-left: 32px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const CheckboxesContainer = styled.div`
  margin: 0 20px;
  padding: 20px;
`;

const CheckboxContainer = styled.div`
  margin-bottom: 16px;
`;

const StyledHeader = styled.div`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.m3};
  line-height: 112%; /* identical to box height, or 112% */
  text-align: center;
  margin: 10px 0;
  color: black;
`;

const Spacer = styled.div`
  height: 16px;
`;

const CheckboxStateful = ({ isChecked }) => {
  const [value, setValue] = useState(isChecked);
  const label = value ? "Checkbox Checked (live)" : "Checkbox Default (live)";
  return (
    <Checkbox
      isChecked={value}
      label={label}
      onClick={() => setValue(!value)}
    />
  );
};

export const Checkboxes = (args) => (
  <Container>
    <StyledHeader>Checkbox</StyledHeader>
    <CheckboxesContainer>
      <CheckboxContainer>
        <CheckboxStateful isChecked={false} />
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox label={"Checkbox Icon"} icon="change" isEventsDisabled />
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox
          label={"Checkbox Default Focus"}
          isEventsDisabled
          forceFocus
        />
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox
          label={"Checkbox Default Tree"}
          isEventsDisabled
          isTreeNode
          isTreeOpen={false}
        />
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox
          label={"Checkbox Default Hover"}
          isEventsDisabled
          forceHover
        />
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox
          label={"Checkbox Default Disabled"}
          isDisabled
          isEventsDisabled
        />
      </CheckboxContainer>

      <Spacer />

      <CheckboxContainer>
        <Checkbox label={"Checkbox Checked"} isChecked isEventsDisabled />
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox
          label={"Checkbox Checked Focus"}
          isChecked
          isEventsDisabled
          forceFocus
        />
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox
          label={"Checkbox Checked Tree"}
          isChecked
          isEventsDisabled
          isTreeNode
          isTreeOpen={false}
        />
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox
          label={"Checkbox Checked Hover"}
          isChecked
          isEventsDisabled
          forceHover
        />
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox
          label={"Checkbox Checked Disabled"}
          isChecked
          isDisabled
          isEventsDisabled
        />
      </CheckboxContainer>

      <Spacer />

      <CheckboxContainer>
        <Checkbox
          label={"Checkbox Indeterminate"}
          isIndeterminate
          isEventsDisabled
        />
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox
          label={"Checkbox Indeterminate Focus"}
          isIndeterminate
          isEventsDisabled
          forceFocus
        />
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox
          label={"Checkbox Indeterminate Tree"}
          isIndeterminate
          isEventsDisabled
          isTreeNode
          isTreeOpen={false}
        />
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox
          label={"Checkbox Indeterminate Hover"}
          isIndeterminate
          isEventsDisabled
          forceHover
        />
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox
          label={"Checkbox Indeterminate Disabled"}
          isIndeterminate
          isDisabled
          isEventsDisabled
        />
      </CheckboxContainer>
    </CheckboxesContainer>

    <StyledHeader>Pattern example</StyledHeader>
    <CheckboxesContainer>
      <CheckboxTreeExample />
    </CheckboxesContainer>
  </Container>
);

Checkboxes.storyName = "Checkbox";

Checkboxes.story = {
  parameters: {
    design: {
      type: "figma",
      url: figmaLinks.checkbox,
    },
  },
};
