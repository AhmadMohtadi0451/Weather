import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

const Header = () => {
  return (
    <Container>
      <Grid item mb={3} mt={3} xs={12} textAlign={"center"}>
        <Typography variant={"h4"}>Weather App</Typography>
      </Grid>
    </Container>
  );
};

export default Header;
