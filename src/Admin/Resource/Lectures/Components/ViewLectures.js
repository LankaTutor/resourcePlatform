import React, {useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";

import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

function ViewLectures() {
  const [expanded, setExpanded] = React.useState("panel1");
  const [maths, setMaths] = useState([]);
  const [physics, setPhysics] = useState([]);
  const [chemistry, setChemistry] = useState([]);
  const [biology, setBiology] = useState([]);
  axios.get("/api/lectures/Maths").then((response) => {
    setMaths(response.data);
  });

  axios.get("/api/lectures/Biology").then((response) => {
    setBiology(response.data);
  });

  axios.get("/api/lectures/Physics").then((response) => {
    setPhysics(response.data);
  });

  axios.get("/api/lectures/Chemistry").then((response) => {
    setChemistry(response.data);
  });

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div style={{ width: "73vw" }}>
      <div>
        <Accordion
          square
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Mathematics Videos</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Unit</th>
                  <th scope="col">Language</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody>
              {maths.map((data) => (
                <tr>
                  <th scope="row">1</th>
                  <td>{data.subject}</td>
                  <td>{data.unit}</td>
                  <td>{data.language}</td>
                  <td className="text-center">
                    <EditIcon />
                  </td>
                  <td className="text-center">
                    <DeleteIcon />
                  </td>
                </tr>))}
              </tbody>
            </table>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Biology Videos</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Unit</th>
                  <th scope="col">Language</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody>
              {biology.map((data) => (
                <tr>
                  <th scope="row">1</th>
                  <td>{data.subject}</td>
                  <td>{data.unit}</td>
                  <td>{data.language}</td>
                  <td className="text-center">
                    <EditIcon />
                  </td>
                  <td className="text-center">
                    <DeleteIcon />
                  </td>
                </tr>))}
              </tbody>
            </table>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Physics Videos</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Unit</th>
                  <th scope="col">Language</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody>
              {physics.map((data) => (
                <tr>
                  <th scope="row">1</th>
                  <td>{data.subject}</td>
                  <td>{data.unit}</td>
                  <td>{data.language}</td>
                  <td className="text-center">
                    <EditIcon />
                  </td>
                  <td className="text-center">
                    <DeleteIcon />
                  </td>
                </tr>))}
              </tbody>
            </table>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Chemistry Videos</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Unit</th>
                  <th scope="col">Language</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody>
              {chemistry.map((data) => (
                <tr>
                  <th scope="row">1</th>
                  <td>{data.subject}</td>
                  <td>{data.unit}</td>
                  <td>{data.language}</td>
                  <td className="text-center">
                    <EditIcon />
                  </td>
                  <td className="text-center">
                    <DeleteIcon />
                  </td>
                </tr>))}
              </tbody>
            </table>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default ViewLectures;
