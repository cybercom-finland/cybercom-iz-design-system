import React from "react";
import { JiraHighlightsContainer } from "./JiraHighlightsContainer";
import { JiraStatsTableContainer } from "./JiraStatsTableContainer";
import {JiraStatsCustomerCards} from "./JiraStatsCustomerCards";

export const JiraStatsServiceReport = () => {
  return (
    <>
      <JiraHighlightsContainer />
      <JiraStatsTableContainer />
      <JiraStatsCustomerCards />
    </>
  );
};
