import * as React from "react";
import List from "./List";
import { Box, Typography } from "@mui/material";

export default function QuiltedImageList() {
  return (
    <>
      <Box sx={{ marginY: "50px", textAlign: "center" }}>
        <Typography variant="h2" fontSize={"2.7em"}>
          Our Facillities and Lot of More
        </Typography>
        <Typography variant="span" fontSize={".9em"}>
          Facillities with great campus with tons of thing
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          // alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box width={"40%"} marginX={"30px"}>
          <Typography variant="h4">
            Join us we providing a huge amount of facilities
          </Typography>
          <Typography variant="span">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            fuga beatae alias perspiciatis quia aut obcaecati non nisi quos,
            reprehenderit dolores perferendis in! Eos, mollitia natus deleniti
            dolorem reiciendis sit. Quibusdam sunt error debitis obcaecati, modi
            suscipit facere voluptates, incidunt sed enim quo tenetur ullam
            placeat quod! Pariatur maiores, impedit nisi vel doloribus voluptate
            ratione delectus, similique laboriosam beatae nobis?
          </Typography>
          <Typography variant="span">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            fuga beatae alias perspiciatis quia aut obcaecati non nisi quos,
            reprehenderit dolores perferendis in! Eos, mollitia natus deleniti
            dolorem reiciendis sit. Quibusdam sunt error debitis obcaecati, modi
            suscipit facere voluptates, incidunt sed enim quo tenetur ullam
            placeat quod! Pariatur maiores, impedit nisi vel doloribus voluptate
            ratione delectus, similique laboriosam beatae nobis?
          </Typography>
        </Box>
        <List />
      </Box>
    </>
  );
}
