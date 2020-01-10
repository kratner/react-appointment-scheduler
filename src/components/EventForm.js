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
  transform: "translateX(-50%) translateY(-50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "rgba(204, 204, 204)",
  padding: "0em 1em 1em",
  color: "#111111",
  borderRadius: "1em",
  boxShadow: "#000000 3px 3px 4px 1px",
  border: "1px #000000 solid"
};

const formTitleStyle = {
  fontWeight: "bold"
};

export default props => {
  const [selectedDTStart, handleDTStartChange] = useState(null);
  const [selectedDTEnd, handleDTEndChange] = useState(null);
  const [isDisabled, setDisabled] = useState(true);
  const dtFormat = "MM/dd/yyyy HH:mm";
  const handleEsc = evt => {
    if (evt.keyCode === 27) {
      window.removeEventListener("keydown", handleEsc);
      props.onFormCancel();
    }
  };
  window.addEventListener("keydown", handleEsc);
  const handleSubmit = () => {
    const event = {
      dtstart: new Date(document.getElementById("dtstart").value),
      dtend: new Date(document.getElementById("dtend").value),
      title: document.getElementById("event_title").value,
      location: document.getElementById("event_location").value,
      description: document.getElementById("event_description").value
    };
    props.onFormSubmit(event);
  };
  const handleTextChange = () => {
    setDisabled(
      document.getElementById("dtstart").value === "" ||
        document.getElementById("dtend").value === "" ||
        document.getElementById("event_title").value === "" ||
        document.getElementById("event_location").value === "" ||
        document.getElementById("event_description").value === ""
    );
  };
  return (
    <div style={containerStyle} id="appointmentform">
      <h3 style={formTitleStyle}>{props.formTitle}</h3>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker
          id="dtstart"
          label="Start"
          value={selectedDTStart}
          onChange={handleDTStartChange}
          format={dtFormat}
        />
        <DateTimePicker
          id="dtend"
          label="End"
          value={selectedDTEnd}
          onChange={handleDTEndChange}
          format={dtFormat}
        />
      </MuiPickersUtilsProvider>
      <TextField id="event_title" label="Title" onChange={handleTextChange} />
      <TextField
        id="event_location"
        label="Location"
        onChange={handleTextChange}
      />
      <TextField
        id="event_description"
        label="Description"
        onChange={handleTextChange}
      />
      <div style={{ marginTop: "2em", minWidth: "12em" }}>
        <Button
          variant="contained"
          onClick={props.onFormCancel}
          style={{ marginRight: "1em" }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          id="formSubmit"
          disabled={isDisabled}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
