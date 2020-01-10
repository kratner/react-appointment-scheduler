import React from "react";

export default props => {
  const events = props.events.map((node, index) => {
    return (
      <li key={index}>
        <p>{node.dtstart}</p>
        <p>{node.dtend}</p>
        <p>{node.title}</p>
        <p>{node.location}</p>
        <p>{node.description}</p>
      </li>
    );
  });
  return <ul>{events}</ul>;
};
