import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import {ElementType} from './TypographyElementType';
import { Icon } from "./Icon";

export function Typography ({type, size, weight, withIcon, text, iconRight, iconName}) {
  const [tagType, setTagType] = useState("body1");
  useEffect(() => { if(type !== undefined) {setTagType(type)}},[]); 

  const TagType = type ? ElementType[tagType].htmlTag : "body1";
  const fontSize = size ? `${ElementType[tagType].defaultSize}` : "16px";
  const fontWeight = weight ? `${ElementType[tagType].defaultWeight}` : "400";
  const StyledTypography = styled(TagType)`
    font-size: ${fontSize};
    font-weight: ${fontWeight};
  `;
  const StyledTypographyWithIcon = styled.div`
  display: inline-flex;
  &.icon-right{
    flex-direction: row-reverse;
  }
  p{
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin-${iconRight ? 'right' : 'left'}: 5px;
    display: flex;
    align-self: center;
  }
  `;
  return(
    <>
      { withIcon ? <StyledTypographyWithIcon className={iconRight ? "icon-right": ""}><Icon icon={iconName} /><StyledTypography>{text}</StyledTypography></StyledTypographyWithIcon> : 
        <StyledTypography>{text}</StyledTypography>
        }      
    </>  
  );
};

Typography.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
  withIcon: PropTypes.bool,
  iconRight: PropTypes.bool,
  text:PropTypes.string
};

Typography.defaultProps = {
  type: "p",
  size: "16px",
  weight: "400",
  withIcon: false,
  iconRight: false,
  text:"Just some text"
}