import React from "react";
import Appbar from "../../Appbar";
import Header from "../../Header";
import Footer from "../../Footer";
import { Box, Container } from "@mui/system";
import TextField from "@mui/material/TextField";
import { Button, FormControl, FormLabel, Typography } from "@mui/material";

const BlogForm = () => {
  return (
    <>
      <Appbar />
      <Header />
      <Box sx={{ marginY: "20px", textAlign: "center" }}>
        <Typography variant="h2" fontSize={"2.7em"}>
          Create Your Blog
        </Typography>
        <Typography variant="span" fontSize={".9em"}>
          Make something new and epic and write your thoughts
        </Typography>
      </Box>

      <Container
        component="form"
        sx={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl
          sx={{
            width: "100%",
          }}
          margin="dense"
        >
          <FormLabel
            sx={{
              color: "#000",
            }}
          >
            Title :
          </FormLabel>

          <TextField
            id="outlined-basic"
            label="Enter Email"
            variant="outlined"
            margin="dense"
          />
        </FormControl>

        <FormControl
          sx={{
            width: "100%",
          }}
          margin="dense"
        >
          <FormLabel
            sx={{
              color: "#000",
            }}
          >
            Sub Title :
          </FormLabel>

          <TextField
            id="outlined-basic"
            label="Enter Email"
            variant="outlined"
            margin="dense"
          />
        </FormControl>

        <FormControl
          sx={{
            width: "100%",
          }}
          margin="dense"
        >
          <FormLabel
            sx={{
              color: "#000",
            }}
          >
            Description :
          </FormLabel>

          <TextField
            id="outlined-basic"
            label="Enter description"
            variant="outlined"
            margin="dense"
            multiline
            rows={"10"}
          />
        </FormControl>

        <FormControl
          sx={{
            width: "100%",
          }}
          margin="dense"
        >
          <FormLabel
            sx={{
              color: "#000",
            }}
          >
            Add image :
          </FormLabel>
          <TextField accept="image/*" margin="dense" multiple type="file" />
        </FormControl>

        <Button sx={{ marginTop: "10px" }} variant="contained">
          submit
        </Button>
      </Container>

      <Footer />
    </>
  );
};

export default BlogForm;
