import React, { useState } from "react";
import styled from "styled-components";
import { Dropdown } from "./Dropdown";
import { figmaLinks } from "../shared/figmaLinks";

export default {
  title: "Design System/Dropdown",
  component: Dropdown,
};

const yearOptions = [
  { value: "2020", label: "2020" },
  { value: "2021", label: "2021" },
  { value: "2022", label: "2022" },
  { value: "2023", label: "2023" },
  { value: "2024", label: "2024" },
];

const monthOptions = [
  { value: "January", label: "January" },
  { value: "February", label: "February" },
  { value: "March", label: "March" },
  { value: "April", label: "April" },
  { value: "May", label: "May" },
  { value: "June", label: "June" },
  { value: "July", label: "July" },
  { value: "August", label: "August" },
  { value: "September", label: "September" },
  { value: "October", label: "October" },
  { value: "November", label: "November" },
  { value: "December", label: "December" },
];

const amountOptions = [
  { value: "5", label: "5" },
  { value: "10", label: "10" },
  { value: "25", label: "25" },
  { value: "50", label: "50" },
  { value: "100", label: "100" },
];

const DropdownBox = styled.div`
  width: 160px;
  padding: 1rem;
`;

const Main = styled.div`
  padding: 1rem;
`;

export const DefaultPlaceholder = (args) => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <DropdownBox>
      <Dropdown
        title="Year"
        options={yearOptions}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </DropdownBox>
  );
};
DefaultPlaceholder.story = {
  parameters: {
    design: {
      type: "figma",
      url: figmaLinks.dropdown,
    },
  },
};

export const DefaultSelected = (args) => {
  const [selectedOption, setSelectedOption] = useState({
    value: "May",
    label: "May",
  });
  return (
    <DropdownBox>
      <Dropdown
        title="Month"
        options={monthOptions}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </DropdownBox>
  );
};
DefaultSelected.story = {
  parameters: {
    design: {
      type: "figma",
      url: figmaLinks.dropdown,
    },
  },
};

export const InlineNotSelected = (args) => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <Main>
      <Dropdown
        type="inline"
        title="Tickets per page"
        options={amountOptions}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </Main>
  );
};
InlineNotSelected.story = {
  parameters: {
    design: {
      type: "figma",
      url: figmaLinks.dropdown,
    },
  },
};

export const InlineSelected = (args) => {
  const [selectedOption, setSelectedOption] = useState({
    value: "25",
    label: "25",
  });
  return (
    <Main>
      <Dropdown
        type="inline"
        title="Tickets per page"
        options={amountOptions}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </Main>
  );
};
InlineSelected.story = {
  parameters: {
    design: {
      type: "figma",
      url: figmaLinks.dropdown,
    },
  },
};
