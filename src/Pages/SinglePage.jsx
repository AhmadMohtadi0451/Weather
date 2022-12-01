import FutureCard from "../Components/FutureCard/FutureCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { handleGetFiveDayWeather } from "../Api/Api";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Header from "../Components/Header/Header";

const daysIndex = [0, 8, 16, 24, 32];

const SinglePage = () => {
  const [cityWeatherFuture, setCityWeatherFuture] = useState({});
  const { city } = useParams();

  const handleGetData = async () => {
    const data = await handleGetFiveDayWeather(city);
    setCityWeatherFuture(data);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <Grid>
      <Header />
      <Grid mt={10}>
        <Container>
          <Grid
            mt={5}
            display="flex"
            flexDirection="column"
            item
            border="1px solid white"
            xs={12}
            md={5}
            boxShadow=" rgba(0, 0, 0, 0.16) 0px 1px 4px"
            borderRadius={5}
            color={"common.black"}
            p={4}
          >
            <Typography variant="h5">{city}:</Typography>

            <Grid>
              {daysIndex.map((index) => (
                <FutureCard
                  key={index}
                  index={index}
                  cityWeatherFuture={cityWeatherFuture}
                />
              ))}
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default SinglePage;
