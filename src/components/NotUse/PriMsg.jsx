import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const PriMsg = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h2" fontSize={"2.7em"}>
          Our Principal Message
        </Typography>
        <Typography variant="span" fontSize={".9em"}>
          Our respective principal sir give a message to all
        </Typography>
      </Box>
    </>
  );
};

export default PriMsg;
