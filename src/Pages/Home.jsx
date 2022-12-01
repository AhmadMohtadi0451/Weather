import React from "react";
import Header from "../Components/Header/Header";
import SelectedCity from "../Components/SelectedCity/SelectedCity";
import WeatherCard from "../Components/WeatherCard/WeatherCard";
import { useState } from "react";
import { useEffect } from "react";
import { handleGetOneDayWeather } from "../Api/Api";

const Home = () => {
  const [city, setCity] = useState("tehran");
  const [cityWeather, setCityWeather] = useState({});

  const handleGetData = async () => {
    const data = await handleGetOneDayWeather(city);
    setCityWeather(data);
  };

  useEffect(() => {
    handleGetData();
  }, [city]);
  return (
    <div>
      <Header />
      <SelectedCity currency={city} selectCity={setCity} />
      <WeatherCard cityWeather={cityWeather} city={city} />
    </div>
  );
};

export default Home;
