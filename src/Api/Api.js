import axios from "axios";

export const Api = axios.create({
  baseURL: "https://api.openweathermap.org",
});

export const handleGetOneDayWeather = (city) => {
  return Api(
    `/data/2.5/weather?q=${city}&lang=en&appid=f165eb3ac71fb18e5bbcbe5de1478baa&units=metric`
  ).then((data) => data.data);
};

export const handleGetFiveDayWeather = (city) => {
  return Api(
    `/data/2.5/forecast?q=${city}&lang=en&appid=f165eb3ac71fb18e5bbcbe5de1478baa&units=metric`
  ).then((data) => data.data.list);
};
