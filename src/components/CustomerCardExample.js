import React from "react";
import ACLogo  from "../shared/logos/AcmeCorp.svg";
import  SCLogo from "../shared/logos/SterlingCooper.svg";
import { CUSTOMERCARD_TYPES } from "./CustomerCard";
import { colors } from "../shared/styles";

// Jira Stats Data begins ====================================================

export const JiraStatsAcme1 = {
  type: CUSTOMERCARD_TYPES.JIRA_STATS,
  logo: <img src={ACLogo} alt="ACLogo"/>,
  backgroundColor: colors.primary.CCBlue,
  dividerColor: colors.secondary.CCDarkBlue,
  totalLabel: "Total tickets",
  totalNumber: 1,
  customer: "Acme Corp.",
  service: "Data Center",
  stats: [
    {
      statsName: "Response stats",
      values: [
        {
          label: "Failed",
          number: "1",
          unit: "",
        },
        {
          label: "SLA",
          number: "100",
          unit: "%",
        },
        {
          label: "Credit SLA",
          number: "100",
          unit: "%",
        },
      ],
    },
    {
      statsName: "Resolution stats",
      values: [
        {
          label: "Failed",
          number: "0",
          unit: "",
        },
        {
          label: "SLA",
          number: "100",
          unit: "%",
        },
        {
          label: "Credit SLA",
          number: "100",
          unit: "%",
        },
      ],
    },
  ],
};

export const JiraStatsAcme2 = {
  type: CUSTOMERCARD_TYPES.JIRA_STATS,
  logo: <img src={ACLogo} alt="ACLogo"/>,
  backgroundColor: colors.primary.CCBlue,
  dividerColor: colors.secondary.CCDarkBlue,
  totalLabel: "Total tickets",
  totalNumber: 1,
  customer: "Acme Corp.",
  service: "Service 2 name",
  stats: [
    {
      statsName: "Response stats",
      values: [
        {
          label: "Failed",
          number: "4",
          unit: "",
        },
        {
          label: "SLA",
          number: "100",
          unit: "%",
        },
        {
          label: "Credit SLA",
          number: "100",
          unit: "%",
        },
      ],
    },
    {
      statsName: "Resolution stats",
      values: [
        {
          label: "Failed",
          number: "0",
          unit: "",
        },
        {
          label: "SLA",
          number: "100",
          unit: "%",
        },
        {
          label: "Credit SLA",
          number: "100",
          unit: "%",
        },
      ],
    },
  ],
};

export const JiraStatsAcme3 = {
  type: CUSTOMERCARD_TYPES.JIRA_STATS,
  logo: <img src={ACLogo} alt="ACLogo"/>,
  backgroundColor: colors.primary.CCBlue,
  dividerColor: colors.secondary.CCDarkBlue,
  totalLabel: "Total tickets",
  totalNumber: 1,
  customer: "Acme Corp.",
  service: "Service 3 name",
  stats: [
    {
      statsName: "Response stats",
      values: [
        {
          label: "Failed",
          number: "0",
          unit: "",
        },
        {
          label: "SLA",
          number: "100",
          unit: "%",
        },
        {
          label: "Credit SLA",
          number: "100",
          unit: "%",
        },
      ],
    },
    {
      statsName: "Resolution stats",
      values: [
        {
          label: "Failed",
          number: "0",
          unit: "",
        },
        {
          label: "SLA",
          number: "100",
          unit: "%",
        },
        {
          label: "Credit SLA",
          number: "100",
          unit: "%",
        },
      ],
    },
  ],
};

export const JiraStatsSterling1 = {
  type: CUSTOMERCARD_TYPES.JIRA_STATS,
  logo: <img src={SCLogo} alt="SCLogo"/>,
  backgroundColor: colors.primary.CCPurple,
  dividerColor: colors.secondary.CCDarkPurple,
  totalLabel: "Total tickets",
  totalNumber: 0,
  customer: "Sterling Cooper",
  service: "Service name",
  stats: [
    {
      statsName: "Response stats",
      values: [
        {
          label: "Failed",
          number: "0",
          unit: "",
        },
        {
          label: "SLA",
          number: "100",
          unit: "%",
        },
        {
          label: "Credit SLA",
          number: "100",
          unit: "%",
        },
      ],
    },
    {
      statsName: "Resolution stats",
      values: [
        {
          label: "Failed",
          number: "0",
          unit: "",
        },
        {
          label: "SLA",
          number: "100",
          unit: "%",
        },
        {
          label: "Credit SLA",
          number: "100",
          unit: "%",
        },
      ],
    },
  ],
};

export const JiraStatsSterling2 = {
  type: CUSTOMERCARD_TYPES.JIRA_STATS,
  logo: <img src={SCLogo} alt="SCLogo"/>,
  backgroundColor: colors.primary.CCPurple,
  dividerColor: colors.secondary.CCDarkPurple,
  totalLabel: "Total tickets",
  totalNumber: 0,
  customer: "Sterling Cooper",
  service: "Much longer Service name goes here",
  stats: [
    {
      statsName: "Response stats",
      values: [
        {
          label: "Failed",
          number: "0",
          unit: "",
        },
        {
          label: "SLA",
          number: "100",
          unit: "%",
        },
        {
          label: "Credit SLA",
          number: "100",
          unit: "%",
        },
      ],
    },
    {
      statsName: "Resolution stats",
      values: [
        {
          label: "Failed",
          number: "0",
          unit: "",
        },
        {
          label: "SLA",
          number: "100",
          unit: "%",
        },
        {
          label: "Credit SLA",
          number: "100",
          unit: "%",
        },
      ],
    },
  ],
};

export const JiraStatsWayne = {
  type: CUSTOMERCARD_TYPES.JIRA_STATS,
  logo: <img src={SCLogo} alt="SCLogo"/>,
  backgroundColor: colors.primary.CCPurple,
  dividerColor: colors.secondary.CCDarkPurple,
  totalLabel: "Total tickets",
  totalNumber: 0,
  customer: "Wayne Enterprices",
  service: "Batcave Data Center",
  stats: [
    {
      statsName: "Response stats",
      values: [
        {
          label: "Failed",
          number: "0",
          unit: "",
        },
        {
          label: "SLA",
          number: "100",
          unit: "%",
        },
        {
          label: "Credit SLA",
          number: "100",
          unit: "%",
        },
      ],
    },
    {
      statsName: "Resolution stats",
      values: [
        {
          label: "Failed",
          number: "0",
          unit: "",
        },
        {
          label: "SLA",
          number: "100",
          unit: "%",
        },
        {
          label: "Credit SLA",
          number: "100",
          unit: "%",
        },
      ],
    },
  ],
};

// Jira Stats Data ends ====================================================

export const SDFeedbackData0 = {
  type: CUSTOMERCARD_TYPES.SD_FEEDBACK,
  logo: <img src={ACLogo} alt="ACLogo"/>,
  backgroundColor: colors.primary.CCBlue,
  dividerColor: colors.secondary.CCDarkBlue,
  totalLabel: "Feedback",
  totalNumber: 0,
  customer: "Acme Corp.",
  service: "SD + ISITHD Total",
  feedbackAverage: "3.5",
  feedbackMax: "5",
  dimColor: "#AA83B8",
  feedbacks: [],
};

export const SDFeedbackData1 = {
  type: CUSTOMERCARD_TYPES.SD_FEEDBACK,
  logo: <img src={ACLogo} alt="ACLogo"/>,
  backgroundColor: colors.primary.CCBlue,
  dividerColor: colors.secondary.CCDarkBlue,
  totalLabel: "Feedback",
  totalNumber: 1,
  customer: "Acme Corp.",
  service: "SD",
  feedbackAverage: "3",
  feedbackMax: "5",
  dimColor: "#AA83B8",
  feedbacks: [
    {
      jiraCode: "OPSSOK-968",
      jiraLink: "",
      stars: 3,
      text: "Hienoa palvelua!",
    },
  ],
};

export const SDFeedbackData2 = {
  type: CUSTOMERCARD_TYPES.SD_FEEDBACK,
  logo: <img src={ACLogo} alt="ACLogo"/>,
  backgroundColor: colors.primary.CCBlue,
  dividerColor: colors.secondary.CCDarkBlue,
  totalLabel: "Feedback",
  totalNumber: 1,
  customer: "Acme Corp.",
  service: "Service Desk",
  feedbackAverage: "3",
  feedbackMax: "5",
  dimColor: "#AA83B8",
  feedbacks: [
    {
      jiraCode: "OPSSOK-968",
      jiraLink: "",
      stars: 4,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
};

export const SDFeedbackData3 = {
  type: CUSTOMERCARD_TYPES.SD_FEEDBACK,
  logo: <img src={ACLogo} alt="ACLogo"/>,
  backgroundColor: colors.primary.CCPurple,
  dividerColor: colors.secondary.CCDarkPurple,
  totalLabel: "Feedback",
  totalNumber: 2,
  customer: "Acme Corp.",
  service: "Service Desk",
  feedbackAverage: "3.5",
  feedbackMax: "5",
  dimColor: "#EEE6F1",
  feedbacks: [
    {
      jiraCode: "OPSSOK-968",
      jiraLink: "",
      stars: 3,
      text: "Hienoa palvelua!",
    },
    {
      jiraCode: "OPSSOK-969",
      jiraLink: "",
      stars: 4,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
};

export const SDFeedbackData4 = {
  type: CUSTOMERCARD_TYPES.SD_FEEDBACK,
  logo: <img src={ACLogo} alt="ACLogo"/>,
  backgroundColor: colors.primary.CCPurple,
  dividerColor: colors.secondary.CCDarkPurple,
  totalLabel: "Feedback",
  totalNumber: 2,
  customer: "Acme Corp.",
  service: "OPSVIOT",
  feedbackAverage: "3.5",
  feedbackMax: "5",
  dimColor: "#EEE6F1",
  feedbacks: [
    {
      jiraCode: "OPSSOK-968",
      jiraLink: "",
      stars: 3,
      text: "Hienoa palvelua!",
    },
    {
      jiraCode: "OPSSOK-969",
      jiraLink: "",
      stars: 4,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
};

// Kammi Data begins ====================================================

const buildSlas = () => {
  let content = [];
  let row = {};
  for (let i = 1; i <= 28; i++) {
    let num = i.toString();
    if (num.length < 2) {
      num = "0" + num;
    }
    const incident = `OPSSOK-82${num}`;
    const sla = 100;
    row = { date: `${num}.02.2021`, sla: sla, incident: incident };
    content.push(row);
  }
  content[0].sla = 99.98;
  content[2].sla = 98.84;
  return content;
};

export const KammiSC1 = {
  type: CUSTOMERCARD_TYPES.KAMMI,
  logo: <img src={SCLogo} alt="SCLogo"/>,
  backgroundColor: colors.primary.CCBlue,
  dividerColor: colors.secondary.CCDarkBlue,
  totalLabel: "Average SLA",
  totalNumber: 99.98,
  totalUnit: "%",
  customer: "Sterling Cooper",
  service: "Service 1 name",
  month: "February",
  year: 2021,
  slas: buildSlas(),
};

export const KammiSC2 = {
  type: CUSTOMERCARD_TYPES.KAMMI,
  logo: <img src={SCLogo} alt="SCLogo"/>,
  backgroundColor: colors.primary.CCBlue,
  dividerColor: colors.secondary.CCDarkBlue,
  totalLabel: "Average SLA",
  totalNumber: 99.98,
  totalUnit: "%",
  customer: "Sterling Cooper",
  service: "Kamu",
  month: "February",
  year: 2021,
  slas: buildSlas(),
};

export const KammiSC3 = {
  type: CUSTOMERCARD_TYPES.KAMMI,
  logo: <img src={SCLogo} alt="SCLogo"/>,
  backgroundColor: colors.primary.CCBlue,
  dividerColor: colors.secondary.CCDarkBlue,
  totalLabel: "Average SLA",
  totalNumber: 99.98,
  totalUnit: "%",
  customer: "Sterling Cooper",
  service: "Kamu Prod Launcher API",
  month: "February",
  year: 2021,
  slas: buildSlas(),
};

export const KammiSC4 = {
  type: CUSTOMERCARD_TYPES.KAMMI,
  logo: <img src={SCLogo} alt="SCLogo"/>,
  backgroundColor: colors.primary.CCPurple,
  dividerColor: colors.secondary.CCDarkPurple,
  totalLabel: "Average SLA",
  totalNumber: 99.98,
  totalUnit: "%",
  customer: "Sterling Cooper",
  service: "Service 1 name",
  month: "February",
  year: 2021,
  slas: buildSlas(),
};

export const KammiSC5 = {
  type: CUSTOMERCARD_TYPES.KAMMI,
  logo: <img src={SCLogo} alt="SCLogo"/>,
  backgroundColor: colors.primary.CCBlue,
  dividerColor: colors.secondary.CCDarkBlue,
  totalLabel: "Average SLA",
  totalNumber: 99.98,
  totalUnit: "%",
  customer: "Sterling Cooper",
  service: "Jupa",
  month: "February",
  year: 2021,
  slas: buildSlas(),
};

// Kammi Data ends ====================================================
