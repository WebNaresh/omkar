import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Appbar from "../../Appbar";
import Header from "../../Header";
// import CTable from "./CTable";
import Footer from "../../Footer";
import FeeTable from "./FeeTable";

const Fee = () => {
  return (
    <>
      <Appbar />
      <Header />

      <Box
        sx={{ marginTop: "10px", marginBottom: "50px", textAlign: "center" }}
      >
        <Typography variant="h2" fontSize={"2.7em"}>
          Fee Structure
        </Typography>

        <Typography variant="span" fontSize={".9em"}>
          Here you got all info about fee structure
        </Typography>
      </Box>

      <Container>
        <FeeTable />
      </Container>

      <Footer />
    </>
  );
};

export default Fee;
