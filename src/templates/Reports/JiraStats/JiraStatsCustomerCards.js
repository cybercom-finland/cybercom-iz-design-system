import React from "react";
import {CustomerCards} from "../CustomerCards";
import {
  JiraStatsAcme1,
  JiraStatsAcme2,
  JiraStatsAcme3,
  JiraStatsSterling1,
  JiraStatsSterling2,
  JiraStatsWayne,
} from "../../../components/CustomerCardExample";

const JiraStatsCards = [
  JiraStatsAcme1,
  JiraStatsAcme2,
  JiraStatsAcme3,
  JiraStatsSterling1,
  JiraStatsSterling2,
  JiraStatsWayne,
];

export const JiraStatsCustomerCards = () => (
  <CustomerCards cards={JiraStatsCards} />
);
