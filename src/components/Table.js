import React,{useState, useMemo, useEffect} from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import { colors, device, typography } from '../shared/styles';
import {Dropdown} from "./Dropdown";
import { Icon } from "./Icon";
import {Typography} from "./Typography";

const TableContainer= styled.div`
  width: 1200px;
  overflow-x: auto;
  display: none;
  @media ${device.mobileL} {
    display: block;
  }
`;

/*TODO: use adaptive font depending on screensize eg. font-size calc(.5rem + .5vw);*/
const StyledTable = styled.table`
  border-collapse: collapse;
  border-bottom: 1px solid ${colors.neutral.Gray6};
  thead {
    border-bottom: 1px solid ${colors.neutral.Gray6};
    color: ${colors.neutral.Gray3};
    font-weight: ${typography.weight.semibold};
  }
  td,
  th {
    border: none;
    text-align: left;
    padding: 13px 20px;
    button {
      background: transparent;
      border: 0;
      color: ${colors.neutral.Gray3};
      font-weight: ${typography.weight.semibold};
      &:hover{
        cursor: pointer;
      }
      .sorting-header {
        display: flex;
        .sorting-direction-arrow-container {
          margin-left: 5px;
          align-self: center;
          svg{ 
            fill: ${colors.neutral.Gray3};
          }
          .ascending {
            margin-bottom: 3px;
          }
        }
      }      
    }
  }
  td {
    padding: 13px 20px;
  }
  tbody{ 
    border-bottom: 1px solid ${colors.neutral.Gray6};
    :before{
      content: "-";
      display: block;
      line-height: 22px;
      color: transparent
    }
    tr {
      border-bottom: 2px solid ${colors.neutral.CCWhite};
      height: 56px;
      :nth-of-type(even) {
        background-color: ${colors.neutral.Gray7};
      }
      :hover {
        cursor: pointer;
        background-color: ${colors.secondary.CCLightPurple};
      }
      td {
        &.issue-key{
          font-weight: ${typography.weight.semibold};
          color:${colors.neutral.Gray1};
          text-decoration: underline;
        }
        &.response-time{
          div{
            background-color: ${colors.semantic.CCRedLight};
            color: ${colors.semantic.CCRed};
            font-weight: ${typography.weight.bold};
            display: inline;
            padding: 3px 8px;
            border-radius: 4px;
          }
        }
        &.type,&.priority,&.summary{
          font-weight: ${typography.weight.regular}; 
        }
        &.type,&.priority{
          div{
            display: inline-flex !important;
          }
          span{
            margin-left: 5px;
          }
        }
      }
  }
}
`;

const StyledPagination = styled.div`
max-width:45%;
display: flex;
align-items: center;
padding:13px 20px;

.page-numbers-dropdown{
  h4{
    display: none;
  }
}
justify-content: space-between;
color: ${colors.neutral.Gray3};
.arrows {
  display: inline-flex;
  align-items: center;
  &:hover{
    cursor: pointer;
  }
  svg{ 
    fill: ${colors.neutral.Gray1}
  }
  .disabled {
    &:hover{
      cursor: not-allowed;
    }
    svg{ 
      fill: ${colors.neutral.Gray4}
    }
  }
  hr {
    border: 1px solid ${colors.neutral.Gray5};
    height: 24px;
    margin: 0 10px;
  }
}
`;

const ResponsiveDataGrid = styled.div`
display:block;
.pagination-separator {
  margin:1em 0 1em -1em;
  width: calc(100% + 2em);
}
.pagination {
  max-width: 100%;
  padding: 0;
}
.items-information,
.page-numbers-dropdown,
.number-of-pages {
      display: none;
}
@media ${device.mobileL} {
  display: none;
}
dd {
  margin-inline-start: 0 !important;
  &.issue-key {
    font-weight: ${typography.weight.semibold};
    color:${colors.neutral.Gray1}
    text-decoration: underline;
  }
  &.response-time {
    color: ${colors.semantic.CCRed}
    font-weight: ${typography.weight.bold}
  }
  &.issue-key,
  &.response-time,
  &.type,
  &.priority {
    display: inline-table;
  }
  &.response-time,
  &.type,
  &.priority{
    padding-left: 15px;
  }
  &.type,
  &.priority{
    p {
      display: none;
    }
  }
}
`;

export function Table(props) {
  //TODO: make table more generic to be reused. It's supposed to work despite the context and be agnostic, 
  //so getCellElement() shouldn't be necessary. 
  //Can components be served from the database?
  const getCellElement = (element, content, size) => {
    const elementClassName = element === 0 ?  "issue-key"
    : element === 1 ? "response-time"
    : element === 2 ? "type"
    : element === 3 ? "priority" 
    : "summary";
    
    const getPriorityAndType = elementClassName === "type" || elementClassName === "priority" ? <Typography type="body1" withIcon iconName={content ? content.toLowerCase() : "incident"} text={content}/>
    : "";
    const getRowContent = elementClassName !== "type" && elementClassName !== "priority" ? content : null;
    let component="";
    const ElementSize = size === "fullscreen" ? "td" : "dd"; 
    component = <ElementSize key={element} className={elementClassName}><div>{getPriorityAndType}<span>{getRowContent}</span></div></ElementSize>;
    return component;
  }
  // Table headers passed as props
  const providedTableHeaders = props.headers !== undefined ? props.headers : Object.keys(props.data[0]);
  // Data props object headers to access the values of the object and order them
  const providedDataKeys = Object.keys(props.data[0]);
  // providedTableHeaders length can't be longer than providedDataKeys length
  providedTableHeaders.length = providedDataKeys.length;
  // To initialize the table not ordering by any key or direction, we can change it easily as follows: 
  // const useSortedItems = (items, config = null) => {
  // const [sortingItemConfig, setSortingItemConfig] = useState(config);
  const useSortedItems = (items) => {
    const [sortingItemConfig, setSortingItemConfig] = useState(
      {
        key: providedDataKeys[0], 
        direction: 'descending'
      }
    );
  //useMemo is a way to cache — or memoize — expensive computations. 
  //useMemo is similar to useCallback except it allows you to apply memoization to any value type or functions.
  //It does this by accepting a function which returns the value and then that function is only called when the value
  //needs to be retrieved   
  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortingItemConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortingItemConfig.key] < b[sortingItemConfig.key]) {
          return sortingItemConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortingItemConfig.key] > b[sortingItemConfig.key]) {
          return sortingItemConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortingItemConfig]);

  const sortItemsBy = (key) => {      
    let direction = 'ascending';
    if (
      sortingItemConfig &&
      sortingItemConfig.key === key &&
      sortingItemConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortingItemConfig({ key, direction });
  };
    return { items: sortedItems, sortItemsBy, sortingItemConfig };
  };
  const { items, sortItemsBy, sortingItemConfig } = useSortedItems(props.data);
  const getSortingDirectionIcon = (header) => {
    if (!sortingItemConfig) {
      return <><Icon className="ascending" icon="arrowsmallup"/><Icon className="descending" icon="arrowsmalldown"/></>;
    }
    return sortingItemConfig.key === header && sortingItemConfig.direction ==="descending" ? <Icon className="descending" icon="arrowsmalldown"/>
    : sortingItemConfig.key === header && sortingItemConfig.direction ==="ascending" ? <Icon className="ascending" icon="arrowsmallup"/>
    : <><Icon className="ascending" icon="arrowsmallup"/> <Icon className="descending" icon="arrowsmalldown"/></>;
  };

  const [currentPage, setCurrentPage] = useState({value: '1', label: '1'});
  const [rowsPerPage, setRowsPerPage] = useState({value: '5', label: '5'});
  const currentPageValue = parseInt(currentPage.value);
  const rowsPerPageValue = parseInt(rowsPerPage.value);
  const lastRowIndex = currentPageValue * rowsPerPageValue;
  const firstRowIndex = lastRowIndex - rowsPerPageValue;
  const currentRows = items.slice(firstRowIndex,lastRowIndex);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(items.length/rowsPerPageValue); i++){
    pageNumbers.push({value: `${i}`, label: `${i}`});
  }
  // Observe changes in rowsPerPage state and change currentPage state back to a value of an existing page
  useEffect(() => {
    setCurrentPage({value: '1', label: '1'});
  },[rowsPerPage]);

  const renderItems = (screenSize) => {
    let TableElement = screenSize === "fullscreen" ? "tr" : "dl";
    const items = currentRows.map((item, index) => {
    return <TableElement key={index}>
    { providedDataKeys.map((title, index) => (
      getCellElement(index,item[title],screenSize)
    ))}
  </TableElement>
  });
return items;
}

const setTablePage = (direction) => {
  if (direction === "back" && currentPageValue > 1){
    setCurrentPage({value: `${currentPageValue - 1}`, label:`${currentPageValue - 1}`});
  } 
  if (direction ==="forward" && currentPageValue < pageNumbers.length) {
    setCurrentPage({value: `${currentPageValue + 1}`, label:`${currentPageValue + 1}`});

  }
}

const ticketsPerPage = [
  { value: '5', label: '5' },
  { value: '10', label: '10' },
  { value: '15', label: '15' },
  { value: '20', label: '20' },
  { value: '25', label: '25' },
];

const pagination = <StyledPagination className="pagination">
  <Dropdown 
    type="inline"
    title="Tickets per page"
    options={ticketsPerPage}
    selectedOption={rowsPerPage}
    setSelectedOption={setRowsPerPage}
    className="tickets-dropdown"
  />
  <div className="items-information">
  {`${currentPageValue === 1 ? currentPageValue : 
    (rowsPerPageValue * currentPageValue) - rowsPerPageValue + 1} - ${lastRowIndex <= items.length ? 
    lastRowIndex : items.length} of ${items.length} items`}
  </div>
  <div className="page-numbers-dropdown">
    <Dropdown 
      type="inline"
      options={pageNumbers}
      selectedOption={currentPage}
      setSelectedOption={setCurrentPage}
    />
  </div>
  <div className="number-of-pages">{`of ${pageNumbers.length} pages`}</div>
  <div className="arrows">
    <Icon icon="arrowleft" className={currentPageValue === 1 ? "disabled": null} onClick={() => setTablePage("back")}/>
    <hr/>
    <Icon icon="arrowright" className={currentPageValue === pageNumbers.length ? "disabled" : null} onClick={() => setTablePage("forward")}/>
  </div>
  </StyledPagination>;

  return(
  <>
    <TableContainer role="group" aria-labelledby="caption" id="table-container">
      <StyledTable>
        <thead>
          <tr>
            {providedTableHeaders.map((header, index) => (              
              <th key={index}>{ props.isSortable ? 
              <button
                type="button"
                onClick={() => sortItemsBy(`${providedDataKeys[index]}`)}
              >
                <div className="sorting-header">{header.charAt(0).toUpperCase() + header.slice(1)} {
                  <div className="sorting-direction-arrow-container"> 
                  {getSortingDirectionIcon(`${providedDataKeys[index]}`)} 
                  </div>
                  }
                </div>  
              </button>: header.charAt(0).toUpperCase() + header.slice(1)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {renderItems("fullscreen")}
        </tbody>
      </StyledTable>
      {props.data.length > 5 && pagination}
    </TableContainer>
    <ResponsiveDataGrid>
    {renderItems("mobile")}
    {props.data.length > 5 && <><hr className="pagination-separator"/> {pagination}</>}
    </ResponsiveDataGrid>
  </>
  );
};

Table.propTypes = {
  isSortable: PropTypes.bool,
  headers: PropTypes.array,
  data: PropTypes.arrayOf(PropTypes.shape({
    "Issue Key": PropTypes.string,
    "Response Time": PropTypes.string,
    "Priority": PropTypes.string,
    "Summary": PropTypes.string
  })).isRequired
};

Table.defaultProps = {
  isSortable: false,
  headers: undefined,
  data: []
}
