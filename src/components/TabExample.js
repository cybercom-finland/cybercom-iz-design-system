import React, { useState } from "react";
import styled from "styled-components";
import { colors, typography } from "../shared/styles";
import { Tab } from "./Tab";
import { TYPES } from "./Button";

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

const JiraStatisticsPage = (
  <Container>
    <Header>Jira Statistics...</Header>
  </Container>
);

const KaemmiSlasPage = (
  <Container>
    <Header>Kaemmi SLAs...</Header>
  </Container>
);

const SdFeedbackPage = (
  <Container>
    <Header>SD Feedback...</Header>
  </Container>
);

export const TabExample = ({ handleButtonClick }) => {
  const [selectedItem, setSelectedItem] = useState(0);

  const tabButton = {
    label: "Filter ticket types",
    type: TYPES.TERTIARY,
    icon: "filter",
    disabled: false,
    onClick: handleButtonClick,
  };

  const handleClick = (index) => {
    setSelectedItem(index);
  };

  const items = [
    {
      label: "Jira Statistics",
      disableButton: false,
      onClick: handleClick,
      page: JiraStatisticsPage,
    },
    {
      label: "Kaemmi SLAs",
      disableButton: true,
      onClick: handleClick,
      page: KaemmiSlasPage,
    },
    {
      label: "SD Feedback",
      disableButton: true,
      onClick: handleClick,
      page: SdFeedbackPage,
    },
  ];

  return (
    <>
      <Tab button={tabButton} items={items} />
      {items[selectedItem].page}
    </>
  );
};
