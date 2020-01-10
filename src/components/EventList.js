import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import EventIcon from "@material-ui/icons/Event";
import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import { format } from "date-fns";

const containerStyle = {
  overflow: "scroll",
  width: "100%"
};

export default props => {
  const events = props.events
    .sort((a, b) => {
      return new Date(a.dtstart) > new Date(b.dtend) ? 1 : -1;
    })
    .map((node, index) => {
      const dtFormat = "MMMM d, yyyy h:mm aaaa";
      const fmtDTStart = format(new Date(node.dtstart), dtFormat);
      const fmtDTEnd = format(new Date(node.dtend), dtFormat);
      return (
        <div key={index}>
          <ListItem button alignItems="flex-start">
            <ListItemIcon>
              <EventIcon style={{ color: "#FFFF00" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <React.Fragment>
                  <Typography
                    component="p"
                    //variant="body2"
                    style={{ color: "#FFFFFF" }}
                  >
                    <span style={{ fontWeight: "bold", marginRight: ".5em" }}>
                      From:
                    </span>
                    {fmtDTStart}
                  </Typography>
                  <Typography
                    component="p"
                    //variant="body2"
                    style={{ color: "#FFFFFF" }}
                  >
                    <span style={{ fontWeight: "bold", marginRight: ".5em" }}>
                      To:
                    </span>
                    {fmtDTEnd}
                  </Typography>
                  <Typography
                    component="p"
                    //variant="body2"
                    style={{ color: "#FFFFFF", fontWeight: "bold" }}
                  >
                    {node.title}
                  </Typography>
                  <Typography
                    component="p"
                    //variant="body2"
                    style={{ color: "#FFFFFF" }}
                  >
                    <span style={{ fontWeight: "bold", marginRight: ".5em" }}>
                      Location:
                    </span>
                    {node.location}
                  </Typography>
                </React.Fragment>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    //variant="body2"
                    style={{ color: "#FFFFFF", fontSize: "1em" }}
                  >
                    {node.description}
                  </Typography>
                </React.Fragment>
              }
            />
            <div>
              <Button
                variant="contained"
                color="primary"
                startIcon={<RemoveIcon />}
                onClick={() => props.onRemoveItem(node)}
                title="Cancel (Delete) Appointment"
                disabled={props.formVisible}
                className="deletebutton"
              >
                <span className="deletebuttontext">Cancel (Delete)</span>
              </Button>
            </div>
          </ListItem>
        </div>
      );
    });
  return (
    <div style={containerStyle}>
      <List>{events}</List>
    </div>
  );
};
