import { Avatar, Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import FolderIcon from "@mui/icons-material/Folder";
import React from "react";
import GridCard from "./AboutGrid";

const AboutMain = () => {
  return (
    <>
      <Container sx={{ marginY: "50px" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2" fontSize={"2.7em"}>
            We Providing Things
          </Typography>
          <Typography variant="span" fontSize={".9em"}>
            We provide tons of thing and more
          </Typography>
        </Box>

        <Box sx={{ marginTop: "20px" }}>
          <Typography variant="p">
            Khandala Vibhag Shikshan Samiti is the parent body of Sushila
            Shankarrao Gadhave Mahavidyalaya, Khandala has established in
            1951-52 by the mill workers andvillagers with an objective of
            providing quality education for overall development of students of
            rural areas. It runs 13 educational units right from pre-primary to
            graduate institution including 3 secondary schools, 7 higher
            secondary schools, one Senior College and one agriculture Junior
            College. Students from the vicinity take advantage of the
            educational facilities provided by thesebranches.
          </Typography>
        </Box>
      </Container>
      <GridCard />
    </>
  );
};

export default AboutMain;
