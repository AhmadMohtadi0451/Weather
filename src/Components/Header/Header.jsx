import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

const Header = () => {
  return (
    <Grid
      bgcolor="rgb(25,118,210)"
      p={5}
      item
      mb={3}
      xs={12}
      textAlign={"center"}
    >
      <Container>
        <Typography color="white" variant={"h4"}>
          Weather App
        </Typography>
      </Container>
    </Grid>
  );
};

export default Header;
