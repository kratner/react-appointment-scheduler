import React, { Component } from "react";
import DateTime from "../data/DateTime";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";
import Controls from "../components/Controls";

const style = {
  backgroundColor: "rgb(93,93,93)",
  color: "#ccc",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  padding: "0em 1em"
};

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dt: "",
      formVisible: false,
      events: [
        {
          dtstart: new Date("09/01/2020 23:00"),
          dtend: new Date("09/01/2020 23:45"),
          title: "Doctor's Appointment",
          location: "San Diego",
          description: "My annual physical exam"
        },
        {
          dtstart: new Date("09/15/2020 17:15"),
          dtend: new Date("09/15/2020 19:15"),
          title: "Dinner Date",
          location: "San Diego",
          description: "Dinner with Jocelyn"
        },
        {
          dtstart: new Date("7/15/2020 17:15"),
          dtend: new Date("7/15/2020 19:15"),
          title: "Dinner Date",
          location: "San Diego",
          description: "Dinner with Jocelyn"
        }
      ]
    };
    this.handleShowFormClick = this.handleShowFormClick.bind(this);
    this.handleFormCancel = this.handleFormCancel.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }
  handleShowFormClick() {
    this.setState({
      formVisible: !this.state.formVisible
    });
  }
  handleFormCancel() {
    this.setState({
      formVisible: false
    });
  }
  handleFormSubmit(event) {
    let events = this.state.events;
    events.push(event);
    this.setState({
      events: events,
      formVisible: false
    });
  }
  removeEvent(array, dtstart, dtend, title, location, description) {
    const index = array.findIndex(obj => {
      return (
        obj.dtstart === dtstart &&
        obj.dtend === dtend &&
        obj.title === title &&
        obj.location === location &&
        obj.description === description
      );
    });
    return index >= 0
      ? [...array.slice(0, index), ...array.slice(index + 1)]
      : array;
  }
  handleRemoveItem(element) {
    const events = this.removeEvent(
      this.state.events,
      element.dtstart,
      element.dtend,
      element.title,
      element.location,
      element.description
    );
    this.setState({ events: events });
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
        <Controls
          onShowFormClick={this.handleShowFormClick}
          formVisible={this.state.formVisible}
        />
        {this.state.formVisible ? (
          <EventForm
            formVisible={this.state.formVisible}
            formTitle="Schedule an Event"
            onFormCancel={this.handleFormCancel}
            onFormSubmit={this.handleFormSubmit}
          />
        ) : null}
        <EventList
          events={this.state.events}
          onRemoveItem={this.handleRemoveItem}
        />
      </div>
    );
  }
}

export default Container;
