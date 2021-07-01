import React from "react";
import styled from "styled-components";
import { paginationTableData } from "../../../components/data";
import { Table } from "../../../components/Table";
import { colors, typography } from "../../../shared/styles";
import { Paper } from "../../../components/Paper";

const Title = styled.div`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.bold};
  font-size: 22px;
  line-height: 28px;
  color: ${colors.neutral.Gray1};
  margin-top: 30px;
  margin-bottom: 17px;
`;

const TableContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  background: ${colors.neutral.CCWhite};
`;

export const JiraStatsTableContainer = () => {
  return (
    <>
      <Title>Failed to response</Title>
      <Paper width="1384px" height="">
        <TableContainer>
          <Table data={paginationTableData} isSortable />
        </TableContainer>
      </Paper>
    </>
  );
};
