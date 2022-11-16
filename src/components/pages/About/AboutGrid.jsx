import * as React from "react";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Detail from "./Detail";

export default function FullWidthGrid() {
  return (
    <Container
      sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginY: "100px",
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          justifyContent: "center",
        }}
      >
        <Detail />
      </Grid>
    </Container>
  );
}
