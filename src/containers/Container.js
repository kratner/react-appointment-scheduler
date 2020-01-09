import React, { Component } from "react";
import DateTime from "../data/DateTime";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";
import Controls from "../components/Controls";
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
      formVisible: true,
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
    };
    this.handleShowFormClick = this.handleShowFormClick.bind(this);
  }
  handleShowFormClick() {
    this.setState({
      formVisible: !this.state.formVisible
    });
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
        <Controls onShowFormClick={this.handleShowFormClick} />
        {this.state.formVisible ? (
          <EventForm
            formVisible={this.state.formVisible}
            formTitle="Schedule an Event"
          />
        ) : null}
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default Container;
