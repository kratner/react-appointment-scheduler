import React from "react";
//import styled from "styled-components";

const containerStyle = {
  zIndex: 10,
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "75%",
  height: "75%",
  transform: "translateX(-50%) translateY(-50%)",
  display: "flex",
  alignItems: "center",
  backgroundColor: "rgba(255, 255, 255, .75)",
  padding: "1em",
  color: "#111111"
};

const formTitleStyle = {
  fontWeight: "bold"
};

export default props => {
  return (
    <div style={containerStyle}>
      <p style={formTitleStyle}>{props.formTitle}</p>
    </div>
  );
};
