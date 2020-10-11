import React, {useState} from "react";
import Navbar from "../../../Shared/Navbar/Navbar";
import SubNavbar from "../../../Shared/Navbar/SubNavbar";
import PageHeader from "../../../Shared/PageHeader";
import AllCourses from "../Components/AllCourses";
import SectionTitle from "../../../Shared/SectionTitle";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SubUnitCard from "../Components/SubUnitCard";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
}));
function SubUnits() {
  const [datas, setDatas] =  useState([]);
  let subject = window.location.href.split("/").pop();
  axios.get(`/api/subunits/${subject}`).then((response)=>{
    setDatas(response.data);
  })
  const classes = useStyles();
  

  return (
    <div>
      <Navbar />
      <SubNavbar />
      <PageHeader title={subject} />
      <div
        style={{
          padding: "50px",
        }}
      >
        <SectionTitle title={subject} icon="fas fa-book" />

        <Grid container spacing={3}>
          {datas.map((data) => {
            return (
              <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>
                  <SubUnitCard subject={subject} subunit={data.subunit} img={data.img} unitNo={data.unitNo} videos={data.videos}/>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default SubUnits;
