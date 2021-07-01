import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const PaperContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
`;

export function Paper({ width, height, background, children, ...props }) {
  return (
    <PaperContainer width={width} height={height} background={background} {...props}>
      {children}
    </PaperContainer>
  );
}

Paper.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  background: PropTypes.string,
};

Paper.defaultProps = {
  width: "200px",
  height: "100px",
  background: "#ffffff"
};
