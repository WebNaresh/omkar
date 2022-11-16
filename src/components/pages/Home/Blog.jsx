import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import BlogCard from "./BlogCard";
import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <Container>
        <Box sx={{ marginY: "50px", textAlign: "center" }}>
          <Typography variant="h2" fontSize={"2.7em"}>
            Make Your Blog and Be famous
          </Typography>
          <Typography variant="span" fontSize={".9em"}>
            Login and you also eligible to write the blog
          </Typography>
        </Box>
      </Container>

      <Link
        to="/blog"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <Button style={{ marginRight: "10%", marginBottom: "20px" }}>
          See More{" "}
        </Button>
      </Link>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BlogCard />
      </Box>
    </>
  );
};

export default Blog;
