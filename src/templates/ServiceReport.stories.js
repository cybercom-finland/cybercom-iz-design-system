import React from "react";
import { ServiceReport } from "./ServiceReport";
import { figmaLinks } from "../shared/figmaLinks";

export default {
  title: "Design System/Templates",
  component: ServiceReport,
};

export const ServiceReports = (args) => {
  return <ServiceReport />;
};

ServiceReports.storyName = "Service Report";

ServiceReports.story = {
  parameters: {
    design: {
      type: "figma",
      url: figmaLinks.serviceReport,
    },
  },
};
