import React from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";

const Register = () => {
  return (
    <>
      <Box
        sx={{
          background: "white",
          width: "100%",
          height: "max-content",
          boxShadow: "0 0 2px #333",
        }}
      >
        <Typography
          variant="h4"
          component={"div"}
          sx={{
            paddingTop: "20px",
            textAlign: "center",
          }}
        >
          Register Now
        </Typography>

        <Typography
          variant="p"
          component={"div"}
          sx={{
            textAlign: "center",
          }}
        >
          Create Your account
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
                color: "#000",
              }}
            >
              UserName
            </FormLabel>
            <TextField
              id="outlined-basic"
              label="Enter UserName"
              size="small"
              variant="outlined"
              sx={{
                marginY: "5px",
              }}
            />
          </FormControl>

          <FormControl
            sx={{
              width: "70%",
            }}
          >
            <FormLabel
              sx={{
                color: "#000",
              }}
            >
              Email :
            </FormLabel>
            <TextField
              type={"email"}
              id="outlined-basic"
              label="Enter Email"
              size="small"
              variant="outlined"
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
                color: "#000",
              }}
            >
              Password :
            </FormLabel>
            <TextField
              id="outlined-basic"
              label="Confirm Password"
              size="small"
              type={"password"}
              variant="outlined"
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
                color: "#000",
              }}
            >
              Confirm Password :
            </FormLabel>
            <TextField
              id="outlined-basic"
              label="Confirm Password"
              size="small"
              type={"password"}
              variant="outlined"
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
              Sign up
            </Button>
            <Button
              sx={{
                marginTop: "15px",
                width: "100%",
                marginBottom: "10px",
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

export default Register;
