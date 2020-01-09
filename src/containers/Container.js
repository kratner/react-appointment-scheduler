import React, { Component } from "react";
import DateTime from "../data/DateTime";
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
      dt: "",
      events: [
        {
          startdt: "9/1/2020 11:17:33",
          enddt: "9/1/2020 11:17:33",
          title: "test event",
          location: "San Diego",
          description: "This is a test description of an event"
        },
        {
          startdate: "9/1/2020 11:17:33",
          enddt: "9/1/2020 11:17:33",
          title: "test event",
          location: "San Diego",
          description: "This is a test description of an event",
          data: "you can add what ever random data you may want to use later"
        }
      ]
    };
  }
  componentDidMount() {
    const dt = new DateTime();
    const currentDateTime = dt.getCurrentDateTime();
    this.setState({
      dt: currentDateTime
    });
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
