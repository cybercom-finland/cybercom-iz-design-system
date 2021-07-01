import React from "react";
import { SideMenu } from "../components/SideMenu";
import styled from "styled-components";
import { TabServiceReport } from "../components/Tab.ServiceReport";
import { colors, typography } from "../shared/styles";
import {Chart}  from "../shared/logos/chart.svg";
import { JiraStatsServiceReport } from "./Reports/JiraStats/JiraStatsServiceReport";
import { KammiSlasServiceReport } from "./Reports/KaemmiSlas/KaemmiSlaServiceReport";
import { SDFeedbackServiceReport } from "./Reports/SDFeedback/SDFeedbackServiceReport";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #f3f7f9;
`;

const RightContainer = styled.div`
  width: 1508px;
  display: flex;
  flex-direction: column;
  padding-top: 49px;
  padding-left: 42px;
`;

const TabContainer = styled.div`
  margin-left: 12px;
`;

const Title = styled.div`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.l1};
  line-height: 125%;
  color: ${colors.neutral.Gray1};
  margin-left: 12px;
  margin-bottom: 10px;
`;

const SubTitle = styled.div`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.s3};
  line-height: ${typography.size.m1};
  color: ${colors.neutral.Gray1};
  margin-left: 5px;
`;

const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 12px;
  margin-bottom: 9px;
`;

const items = [
  {
    label: "Jira Statistics",
    disableButton: false,
    page: JiraStatsServiceReport,
  },
  {
    label: "Kaemmi SLAs",
    disableButton: true,
    page: KammiSlasServiceReport,
  },
  {
    label: "SD Feedback",
    disableButton: true,
    page: SDFeedbackServiceReport,
  },
];

export const ServiceReport = () => {
  return (
    <MainContainer>
      <SideMenu />
      <RightContainer>
        <Title>Service Report</Title>
        <SubTitleContainer>
          <img src={Chart} alt="Chart"/>
          <SubTitle>SLA reporting service</SubTitle>
        </SubTitleContainer>
        <TabContainer>
          <TabServiceReport
            items={items}
            positionLeft="1470px"
            positionTop="220px"
          />
        </TabContainer>
      </RightContainer>
    </MainContainer>
  );
};

ServiceReport.propTypes = {};

ServiceReport.defaultProps = {};
