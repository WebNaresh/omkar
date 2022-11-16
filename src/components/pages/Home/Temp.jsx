import { Card, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import VisibilityIcon from "@mui/icons-material/Visibility";
import React from "react";
import CategoryIcon from "@mui/icons-material/Category";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import Groups3Icon from "@mui/icons-material/Groups3";

const Temp = () => {
  const arr = [
    {
      background: "linear-gradient(#F53803 , #F5D020)",
      color: "orangered",
      title: " Our Vision",
      icon: <VisibilityIcon sx={{ color: "orangered", fontSize: "2em" }} />,
      desc: "Simplicity is one of the keys to successful innovation",
    },
    {
      background: "linear-gradient(#5F0A87 , #A4508B)",
      color: "darkmagenta",
      title: " Lot's of Option",
      icon: <CategoryIcon sx={{ color: "darkmagenta", fontSize: "2em" }} />,
      desc: "Simplicity is one of the keys to successful innovation",
    },
    {
      background: "linear-gradient(#5AFF15 , #00B712)",
      color: "limegreen",
      title: "ITI available",
      icon: (
        <PrecisionManufacturingIcon
          sx={{ color: "limegreen", fontSize: "2em" }}
        />
      ),
      desc: "Skilled working abilities can be developed by us",
    },
    {
      background: "linear-gradient(#09C6F9 , #045DE9)",
      color: "blue",
      title: "Our Supporters",
      icon: <Groups3Icon sx={{ color: "blue", fontSize: "2em" }} />,
      desc: "Thanks everyone for doing so much contribution",
    },
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          //   flexWrap: "wrap",
          alignItems: "center",
          height: "max-content",
          marginY: "50px",
          justifyContent: "center",
          "& > :not(style)": {
            m: 1,
            width: 225,
            height: 225,
            color: "#fff",
          },
        }}
      >
        {arr.map((ele, ind) => {
          return (
            <Card
              elevation={3}
              key={ind}
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
              style={{
                background: ele.background,
              }}
            >
              <Stack
                sx={{
                  background: "#fff",
                  height: "25%",
                  width: "25%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  marginY: "15px",
                }}
              >
                {ele.icon}
              </Stack>
              <Box>
                <Typography
                  variant="h4"
                  fontSize={"1.7em"}
                  marginY="5px"
                  textAlign={"center"}
                >
                  {ele.title}
                </Typography>
                <Typography
                  variant="h6"
                  fontSize={"15px"}
                  marginY="5px"
                  textAlign={"center"}
                >
                  {ele.desc}
                </Typography>
              </Box>
            </Card>
          );
        })}
      </Box>
    </>
  );
};

export default Temp;
