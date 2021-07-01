import React, { useState } from "react";
import styled from 'styled-components';
import {paginationTableData} from "./data";
import { Table } from "./Table";
import { figmaLinks } from '../shared/figmaLinks'
import {Typography} from "./Typography";

export default {
  title: "Design System/Table",
  component: Table,
}; 

const Main = styled.div`
  padding: 1rem;
`; 

export const TableComponent = () => {
  return(
    <Main>
      <Typography type="h1" text="Table component"/>
      <Table data={paginationTableData} isSortable />
    </Main>
  )
}

TableComponent.storyName="Table component";
TableComponent.story = {
  parameters: {
    design: {
      type: "figma",
      url: figmaLinks.table,
    },
  },
};
