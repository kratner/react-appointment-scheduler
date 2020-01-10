import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const containerStyle = {
  marginTop: "2em"
};

export default props => {
  return (
    <div style={containerStyle}>
      <Button
        variant="contained"
        color="primary"
        //className={classes.button}
        startIcon={<AddIcon />}
        onClick={props.onShowFormClick}
        title={props.formVisible ? `Hide Form` : `Show Form`}
      >
        Add Appointment
      </Button>
    </div>
  );
};
