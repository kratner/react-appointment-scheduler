import React from "react";

export default props => {
  const events = props.events.map((node, index) => {
    return (
      <li key={index}>
        <p>{node.title}</p>
        <p>{node.location}</p>
        <p>{node.description}</p>
      </li>
    );
  });
  return <ul>{events}</ul>;
};

/*
      events: [
        {
          startdt: "09/01/2020 11:00:00",
          enddt: "09/01/2020 12:00:33",
          title: "Doctor's Appointment",
          location: "San Diego",
          description: "My annual physical exam"
        },
        {
          startdt: "09/15/2020 17:15:00",
          enddt: "09/15/2020 19:15:00",
          title: "Dinner Date",
          location: "San Diego",
          description: "Dinner with Jocelyn"
        }
      ]
    */
