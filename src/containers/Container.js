import React, { Component } from "react";
// import styled from "styled-components";

const style = {
  backgroundColor: "rgb(30,30,30)",
  color: "#ccc",
  display: "flex",
  width: "100%",
  height: "100vh",
  padding: "0em 1em"
};

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          start: "2015-07-20",
          end: "2015-07-02",
          eventClasses: "optionalEvent",
          title: "test event",
          description: "This is a test description of an event"
        },
        {
          start: "2015-07-19",
          end: "2015-07-25",
          title: "test event",
          description: "This is a test description of an event",
          data: "you can add what ever random data you may want to use later"
        }
      ]
    };
  }
  render() {
    return (
      <div id={this.props.id} style={style}>
        <p>Appointments</p>
      </div>
    );
  }
}

export default Container;
