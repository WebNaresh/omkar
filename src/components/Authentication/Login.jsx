import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <>
      <Box
        sx={{
          width: "95%",
          height: "max-content",
          boxShadow: "0 0 2px #333",
          background: "white",
        }}
      >
        <Typography
          variant="h4"
          component={"div"}
          fontWeight={"400"}
          sx={{
            paddingTop: "20px",
            textAlign: "center",
          }}
        >
          Log In
        </Typography>

        <Typography
          variant="p"
          component={"div"}
          sx={{
            textAlign: "center",
          }}
        >
          Log In to your account
        </Typography>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          marginTop="30px"
          flexDirection={"column"}
        >
          <FormControl
            sx={{
              width: "70%",
            }}
          >
            <FormLabel
              sx={{
                // fontWeight: "bold",
                color: "#000",
              }}
            >
              Email :
            </FormLabel>
            <TextField
              id="outlined-basic"
              label="Enter Email"
              variant="outlined"
              size="small"
              sx={{
                marginY: "5px",
              }}
            />
          </FormControl>

          <FormControl
            sx={{
              width: "70%",
              marginTop: "10px",
            }}
          >
            <FormLabel
              sx={{
                // fontWeight: "bold",
                color: "#000",
              }}
            >
              Password :
            </FormLabel>
            <TextField
              id="outlined-basic"
              label="Enter Password"
              variant="outlined"
              size="small"
              sx={{
                marginY: "5px",
              }}
            />
          </FormControl>

          <Box
            sx={{
              width: "70%",
              marginTop: "10px",
            }}
          >
            <Divider width={"100%"} />
            <Button
              sx={{
                marginTop: "15px",
                width: "100%",
              }}
              variant="contained"
            >
              Sign in
            </Button>
            <Button
              sx={{
                marginY: "20px",
                width: "100%",
              }}
              variant="contained"
              color="error"
            >
              Google Login
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
