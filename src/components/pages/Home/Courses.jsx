import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Courses = () => {
  const courseArr = [
    {
      title: "BA",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, quo quaerat reiciendis dolorem facere exercitationem? Libero vitae architecto atque consequuntur odit saepe tempore laborum facilis, qui possimus error doloribus nihil? Iusto laboriosam, dolorum officiis facere consequuntur cupiditate ipsum reiciendis blanditiis in aperiam.Accusantium voluptate cupiditate qui",
      img: "http://ssgmkhandala.org/images/college/post-graduate.png",
    },
    {
      title: "BCOM",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, quo quaerat reiciendis dolorem facere exercitationem? Libero vitae architecto atque consequuntur odit saepe tempore laborum facilis, qui possimus error doloribus nihil? Iusto laboriosam, dolorum officiis facere consequuntur cupiditate ipsum reiciendis blanditiis in aperiam.Accusantium voluptate cupiditate qui",
      img: "http://ssgmkhandala.org/images/college/mcom-icon.png",
    },
    {
      title: "BSC",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, quo quaerat reiciendis dolorem facere exercitationem? Libero vitae architecto atque consequuntur odit saepe tempore laborum facilis, qui possimus error doloribus nihil? Iusto laboriosam, dolorum officiis facere consequuntur cupiditate ipsum reiciendis blanditiis in aperiam.Accusantium voluptate cupiditate qui",
      img: "http://ssgmkhandala.org/images/college/under-graduate-icon.png",
    },
    {
      title: "BCA",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, quo quaerat reiciendis dolorem facere exercitationem? Libero vitae architecto atque consequuntur odit saepe tempore laborum facilis, qui possimus error doloribus nihil? Iusto laboriosam, dolorum officiis facere consequuntur cupiditate ipsum reiciendis blanditiis in aperiam.Accusantium voluptate cupiditate qui",
      img: "http://ssgmkhandala.org/images/college/phd-icon.png",
    },
  ];
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
          Our Courses
        </Typography>
        <Typography variant="span" fontSize={".9em"}>
          We provide a huge varaiety of couses and lot more
        </Typography>
      </Box>

      <Grid
        container
        sx={{
          justifyContent: "center",
          width: "100%",

          //   background: "#f1f1f1",
        }}
        spacing={2}
        columns={10}
      >
        {courseArr.map((ele, ind) => {
          return (
            <Grid
              item
              xs={4}
              key={ind}
              sx={{ display: "flex", marginTop: "30px" }}
            >
              <img src={ele.img} alt="none" height={"100px"} />
              <Box>
                <Typography variant="h5" fontSize={"1.7em"}>
                  {ele.title}
                </Typography>
                <Typography variant="span" fontSize={".8em"}>
                  {ele.desc}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Courses;
