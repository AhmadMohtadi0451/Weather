import { Grid, Typography } from "@mui/material";

const FutureCard = ({ cityWeatherFuture, index }) => {
  return (
    <Typography variant="h5">
      <Grid>Tempreture : {cityWeatherFuture?.[index]?.main?.temp}</Grid>
    </Typography>
  );
};

export default FutureCard;
