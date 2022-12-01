import { Grid } from "@mui/material";
import { Cities } from "../../Data/Cities";
import React from "react";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";

const SelectedCity = ({ city, selectCity }) => {
  const handleChange = (event) => {
    selectCity(event.target.value);
  };

  return (
    <Container>
      <Grid justifyContent="flex-end" display="flex" item xs={12}>
        <TextField
          id="outlined-select-currency"
          select
          value={city}
          onChange={handleChange}
          SelectProps={{ native: true }}
        >
          {Cities.map((city) => (
            <option key={city.title} value={city.title}>
              {city.name}
            </option>
          ))}
        </TextField>
      </Grid>
    </Container>
  );
};

export default SelectedCity;
