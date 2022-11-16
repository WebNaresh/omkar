import { Button, Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import Appbar from "../../Appbar";
import List from "../Home/List";
import Header from "../../Header";
import Footer from "../../Footer";
import GridCard from "./GridCard";
const Blog = () => {
  return (
    <>
      <Appbar />
      <Header />
      <Container
        sx={{
          marginY: "20px",
          display: "flex",

          justifyContent: "center",
        }}
      >
        <Box marginY={"20px"} width={"55%"} marginRight="20px">
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
              Create Your own
            </Typography>{" "}
            blog
          </Typography>

          <Typography variant="h5" sx={{ marginBottom: "10px" }}>
            Be invoative and show your strength
          </Typography>
          <Typography variant="p" fontSize={".9em"}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor unde
            rem sapiente obcaecati! Qui eveniet, quidem eos eius nam, corporis
            quaerat modi vitae inventore recusandae quos eum voluptatibus odit
            perspiciatis. Laboriosam obcaecati accusamus molestiae est similique
            cum harum, nemo voluptatem error asperiores hic voluptate, veniam id
            aspernatur deleniti, quibusdam expedita dignissimos fuga nihil?
            Debitis illum tempore non facilis dolore similique. Sed ex enim
            deleniti. Ex temporibus voluptate repellat reiciendis autem quia
            illum ipsa eveniet quibusdam porro, blanditiis quos necessitatibus
            neque velit ea aliquam unde? Illo quo quaerat atque odio optio?
            Debitis illum tempore non facilis dolore similique. Sed ex enim
            deleniti. Ex temporibus voluptate repellat reiciendis autem quia
            illum ipsa eveniet quibusdam porro, blanditiis quos necessitatibus
            neque velit ea aliquam unde? Illo quo quaerat atque odio optio?
          </Typography>
          <Box marginTop={"10px"}>
            <Link to="/createBlog">
              <Button variant={"contained"}>Create Blog</Button>
            </Link>
          </Box>
        </Box>
        <List />
      </Container>

      <Box sx={{ marginY: "70px", textAlign: "center" }}>
        <Typography variant="h2" fontSize={"2.7em"}>
          Blogs and more
        </Typography>
        <Typography variant="span" fontSize={".9em"}>
          Blogs by the admin and collage representative and students
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GridCard />
      </Box>

      <Footer />
    </>
  );
};

export default Blog;
