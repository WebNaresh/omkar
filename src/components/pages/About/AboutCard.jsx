import { Card, CardContent, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import SchoolIcon from "@mui/icons-material/School";
import BookIcon from "@mui/icons-material/Book";
import DiamondIcon from "@mui/icons-material/Diamond";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import React from "react";

const AboutCard = () => {
  const arr = [
    {
      title: "Trending Courses",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tempora sapiente magnam! Est corporis eligendi suscipit",
      icon: <SchoolIcon sx={{ fontSize: "2.5rem" }} />,
      color: "linear-gradient(#CB218E,#6617CB)",
    },
    {
      title: "Books & Library",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tempora sapiente magnam! Est corporis eligendi suscipit",
      icon: <BookIcon sx={{ fontSize: "2.5rem" }} />,
      color: "linear-gradient(#DE4DAA , #F6D327)",
    },
    {
      title: "Certified Teacher",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tempora sapiente magnam! Est corporis eligendi suscipit",
      icon: <DiamondIcon sx={{ fontSize: "2.5rem" }} />,
      color: "linear-gradient(#009FFD , #2A2A72)",
    },
    {
      title: "Certification",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tempora sapiente magnam! Est corporis eligendi suscipit",
      icon: <EmojiEventsIcon sx={{ fontSize: "2.5rem" }} />,
      color: "linear-gradient(#20BF55 , #01BAEF)",
    },
  ];
  return (
    <>
      <Container
        sx={{
          display: "flex",
          marginY: "50px",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {arr.map((ele, index) => {
          return (
            <Card
              style={{ background: ele.color }}
              sx={{
                minWidth: 275,
                width: "20%",
                marginX: "10px",
                color: "#fff",
              }}
              key={index}
            >
              <CardContent>
                {ele.icon}
                <Typography variant="h5" component="div">
                  {ele.title}
                </Typography>
                <Typography sx={{ mb: 1.5, fontSize: ".85em" }}>
                  {" "}
                  {ele.desc}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default AboutCard;
