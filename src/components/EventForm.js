import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const containerStyle = {
  zIndex: 10,
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "75%",
  height: "75%",
  transform: "translateX(-50%) translateY(-50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "rgba(255, 255, 255, .75)",
  padding: "1em",
  color: "#111111",
  borderRadius: "1em"
};

const pickerStyle = {
  marginTop: "1em"
};

const formTitleStyle = {
  fontWeight: "bold"
};

export default props => {
  const [selectedDate, handleDateChange] = useState(new Date());
  const handleCancel = () => {
    props.onFormCancel();
  };
  const handleSubmit = () => {
    const event = {
      dtstart: document.getElementById("dtstart").value,
      dtend: document.getElementById("dtend").value,
      title: document.getElementById("event_title").value,
      location: document.getElementById("event_location").value,
      description: document.getElementById("event_description").value
    };
    props.onFormSubmit(event);
  };
  const handleTextChange = () => {
    // TODO: enable submit button only when all fields are filled in
    //debugger;
  };
  return (
    <div style={containerStyle}>
      <h3 style={formTitleStyle}>{props.formTitle}</h3>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div>
          <DateTimePicker
            id="dtstart"
            label="Start"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
        <div>
          <DateTimePicker
            id="dtend"
            label="End"
            value={selectedDate}
            onChange={handleDateChange}
            style={pickerStyle}
          />
        </div>
      </MuiPickersUtilsProvider>
      <TextField
        id="event_title"
        label="Enter Title"
        onChange={handleTextChange}
      />
      <TextField
        id="event_location"
        label="Enter Location"
        onChange={handleTextChange}
      />
      <TextField
        id="event_description"
        label="Enter Description"
        onChange={handleTextChange}
      />
      <div style={{ marginTop: "1em" }}>
        <Button variant="contained" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};
