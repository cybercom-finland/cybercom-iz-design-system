import React, { useState } from "react";
import styled from "styled-components";

import { Checkbox } from "./Checkbox";

const TreeCheckbox = styled.div`
  padding-bottom: 12px;
`;

const NestedCheckbox = styled.div`
  padding-left: 24px;
  padding-bottom: 12px;
`;

const NestedCheckbox2 = styled.div`
  padding-left: 48px;
  padding-bottom: 12px;
`;

export function CheckboxTreeExample() {
  const [treeOpen, setTreeState] = useState(false);
  const [subTreeOpen, setSubTreeState] = useState(false);

  return (
    <>
      <TreeCheckbox>
        <Checkbox
          label={"Checkbox Indeterminate Tree"}
          isEventsDisabled
          isIndeterminate
          isTreeNode
          isTreeOpen={treeOpen}
          onArrowClick={() => setTreeState(!treeOpen)}
        />
      </TreeCheckbox>
      {treeOpen && (
        <>
          <NestedCheckbox>
            <Checkbox
              label={"Nested Checkbox"}
              isEventsDisabled
              isTreeNode
              isTreeOpen={subTreeOpen}
              onArrowClick={() => setSubTreeState(!subTreeOpen)}
            />
          </NestedCheckbox>
          {subTreeOpen && (
            <NestedCheckbox2>
              <Checkbox label={"Nested Checkbox"} isChecked isEventsDisabled />
            </NestedCheckbox2>
          )}
          <NestedCheckbox>
            <Checkbox label={"Nested Checkbox"} isChecked isEventsDisabled />
          </NestedCheckbox>
        </>
      )}
    </>
  );
}
