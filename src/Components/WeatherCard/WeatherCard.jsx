import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const WeatherCard = ({ cityWeather, city }) => {
  return (
    <Grid
      mt={5}
      display="flex"
      justifyContent="center"
      container
      item
      xs={12}
      p={2}
    >
      <Grid
        display="flex"
        flexDirection="column"
        item
        border="1px solid rgb(25,118,210)"
        xs={12}
        md={5}
        bgcolor={"white"}
        boxShadow=" rgba(0, 0, 0, 0.16) 0px 1px 4px"
        borderRadius={5}
        color={"common.black"}
        p={4}
      >
        <Typography variant={"h5"}>City: {cityWeather.name}</Typography>
        <Typography mt={1} variant={"h5"}>
          Wind: {cityWeather?.wind?.speed}
        </Typography>
        <Typography mt={1} variant={"h5"}>
          Cloudy: {cityWeather?.clouds?.all}
        </Typography>
        <Typography mt={1} variant={"h5"}>
          Temperature: {cityWeather?.main?.temp}
        </Typography>
        <Typography mt={1} variant={"h5"}>
          Current Weather: {cityWeather?.weather?.[0]?.description}
        </Typography>
        <Link style={{ textDecoration: "none" }} to={`/weather/${city}`}>
          <Button
            variant="contained"
            sx={{
              p: "10px",
              fontSize: "15px",
              mt: "15px",
              color: "comon.black",
            }}
          >
            {" Next 4 Days  "}
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default WeatherCard;
