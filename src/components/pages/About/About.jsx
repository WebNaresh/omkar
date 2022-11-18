import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import AppBar from "../../Appbar";
import Header from "../../Header";
// import PriMsg from "../../NotUse/PriMsg";
import AboutCard from "./AboutCard";
import AboutMain from "./AboutMain";
import Footer from "../../Footer";
import Prinmsg from "./Prinmsg";

const About = () => {
  return (
    <>
      <AppBar />
      <Header />
      <Container
        sx={{
          display: "flex",
          // alignItems: "Center",
          justifyContent: "space-between",
          marginY: "20px",
        }}
      >
        <img
          src="https://bingo.icbse.com/business.jpg?action=contactcard&id=ovk44g"
          alt="none"
          style={{
            height: "50vh",
            boxShadow: "0 0 2px #333",
            marginRight: "50px",
          }}
        />

        <Box>
          <Typography
            variant="h3"
            fontFamily={"Rubik, sans-serif"}
            fontSize={"3em"}
            sx={{
              fontWeight: "100",
              marginBottom: "10px",
            }}
            fontWeight={100}
          >
            <Typography variant="p" color="#8e084b" fontWeight={"bold"}>
              About
            </Typography>{" "}
            Us
          </Typography>

          <Typography variant="p">
            <Typography
              variant="span"
              fontSize={"1.1em"}
              fontWeight={"bold"}
              sx={{ color: "#8e084b" }}
            >
              {" "}
              Sushila Shankarrao Gadhave Mahavidyalaya
            </Typography>
            &nbsp; is Khandala Vibhag Shikshan Samiti's only branch imparting
            higher education. The college was established in 2007-08. It is
            permanently non-granted college affiliated to Shivaji University,
            Kolhapur The college has four faculties Arts, Commerce, Science and
            IT Besides thesetraditional courses, college also runs various need
            based career oriented courses like Diploma in Hindi-anuvad, Diploma
            in Marathi Laghu-Sahitya Parichaya, Diploma in Library Management,
            Vocational courses. Along with these courses college also organizes
            skill based and vocational workshops. College lays stress on
            personality development of the students through N.S.S, cultural,
            sports and co-curricular activities. Competitive examination
            guidance center is also run by college. We also have study center of
            Yashwantrao Chavan Maharashtra Open University, Nasik For
            empowerment of girls in the rural area department of physical
            Education and Sports conducted a short duration Self-defense
            Training Course.
          </Typography>
        </Box>
      </Container>
      <AboutCard />
      <AboutMain />
      <Prinmsg />
      <Footer />
    </>
  );
};

export default About;
