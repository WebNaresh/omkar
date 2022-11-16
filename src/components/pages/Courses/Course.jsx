import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Appbar from "../../Appbar";
import Header from "../../Header";
import CTable from "./CTable";
import Footer from "../../Footer";
// import GridCard from "../../NotUse/GridCard";

const Course = () => {
  return (
    <>
      <Appbar />
      <Header />

      <Box
        sx={{ marginTop: "10px", marginBottom: "50px", textAlign: "center" }}
      >
        <Typography variant="h2" fontSize={"2.7em"}>
          Course and More
        </Typography>

        <Typography variant="span" fontSize={".9em"}>
          We providing best course and lot of more
        </Typography>
      </Box>

      <Container>
        <CTable />
      </Container>

      <Footer />

      {/* <GridCard /> */}
    </>
  );
};

export default Course;
