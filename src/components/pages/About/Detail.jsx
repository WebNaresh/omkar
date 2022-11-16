import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import FolderIcon from "@mui/icons-material/Folder";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import LandscapeIcon from "@mui/icons-material/Landscape";
import BiotechIcon from "@mui/icons-material/Biotech";
import ComputerIcon from "@mui/icons-material/Computer";
import TempleBuddhistIcon from "@mui/icons-material/TempleBuddhist";
import GroupsIcon from "@mui/icons-material/Groups";

const Detail = () => {
  const arr = [
    {
      title: "Great Infrastructure",
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora temporibus consequatur , quisquam quaerat ipsa at voluptatum quis, voluptatibus neque asperiores incidunt",
      color: "blue",
      icon: (
        <AutoAwesomeMosaicIcon sx={{ fontSize: "1.7em", margin: "20px" }} />
      ),
    },
    {
      title: "Nice campus",
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora temporibus consequatur , quisquam quaerat ipsa at voluptatum quis, voluptatibus neque asperiores incidunt",
      color: "green",
      icon: <LandscapeIcon sx={{ fontSize: "1.7em", margin: "20px" }} />,
    },
    {
      title: "Labs and scientific equipment",
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora temporibus consequatur , quisquam quaerat ipsa at voluptatum quis, voluptatibus neque asperiores incidunt",
      color: "purple",
      icon: <BiotechIcon sx={{ fontSize: "1.7em", margin: "20px" }} />,
    },
    {
      title: "Best technical labs",
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora temporibus consequatur , quisquam quaerat ipsa at voluptatum quis, voluptatibus neque asperiores incidunt",
      color: "orange",
      icon: <ComputerIcon sx={{ fontSize: "1.7em", margin: "20px" }} />,
    },
    {
      title: "Cultural Activity",
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora temporibus consequatur , quisquam quaerat ipsa at voluptatum quis, voluptatibus neque asperiores incidunt",
      color: "crimson",
      icon: <TempleBuddhistIcon sx={{ fontSize: "1.7em", margin: "20px" }} />,
    },
    {
      title: "Parent meeting",
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora temporibus consequatur , quisquam quaerat ipsa at voluptatum quis, voluptatibus neque asperiores incidunt",
      color: "lime",
      icon: <GroupsIcon sx={{ fontSize: "1.7em", margin: "20px" }} />,
    },
  ];
  return (
    <>
      {arr.map((ele, index) => {
        return (
          <Box
            key={index}
            sx={{ display: "flex", width: "50%", marginBottom: "40px" }}
          >
            <Avatar
              sx={{
                height: "max-content",
                width: "max-content",
                bgcolor: ele.color,
              }}
            >
              {ele.icon}
            </Avatar>
            <Box sx={{ marginX: "20px" }}>
              <Typography variant="h4" fontSize={"1.7em"}>
                {ele.title}
              </Typography>
              <Typography variant="p" sx={{ fontSize: ".85em" }}>
                {ele.desc}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default Detail;
