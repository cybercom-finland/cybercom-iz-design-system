import React from "react";
import { SideMenu } from "./SideMenu";
import { figmaLinks } from "../shared/figmaLinks";

export default {
  title: "Design System/Side Menu",
  component: SideMenu,
};

export const SideMenuDemo = (args) => {
  return <SideMenu />;
};

SideMenuDemo.storyName = "Side Menu";

SideMenuDemo.story = {
  parameters: {
    design: {
      type: "figma",
      url: figmaLinks.sideMenu,
    },
  },
};
