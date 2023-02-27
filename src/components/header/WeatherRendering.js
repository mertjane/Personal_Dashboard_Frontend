import React from "react";
import {
  WiCloudy,
  WiSnow,
  WiNightClear,
  WiDust,
  WiFog,
  WiNightRainMix,
  WiTornado,
  WiHail,
  WiShowers,
  WiRainMix,
  WiSleet,
  WiLightning,
  WiDaySunnyOvercast,
  WiThunderstorm,
} from "react-icons/wi";
import { BsCloudDrizzle } from "react-icons/bs";

const WeatherRendering = ({ conditions }) => {
  if (conditions === "Partially cloudy") {
    return <WiCloudy id="condition" />;
  } else if (conditions === "Blowing Or Drifting Snow") {
    return <WiSnow id="condition" />;
  } else if (conditions === "Clear") {
    return <WiNightClear id="condition" />;
  } else if (conditions === "Diamond Dust") {
    return <WiDust id="condition" />;
  } else if (conditions === "Drizzle") {
    return <BsCloudDrizzle id="condition" />;
  } else if (conditions === "Dust storm") {
    return <WiDust id="condition" />;
  } else if (conditions === "Fog") {
    return <WiFog id="condition" />;
  } else if (conditions === "Freezing Drizzle/Freezing Rain") {
    return <WiNightRainMix id="condition" />;
  } else if (conditions === "Freezing Fog") {
    return <WiFog id="condition" />;
  } else if (conditions === "Funnel Cloud/Tornado") {
    return <WiTornado id="condition" />;
  } else if (conditions === "Hail") {
    return <WiHail id="condition" />;
  } else if (conditions === "Hail Showers") {
    return <WiShowers id="condition" />;
  } else if (conditions === "Heavy Drizzle") {
    return <BsCloudDrizzle id="condition" />;
  } else if (conditions === "Heavy Drizzle/Rain") {
    return <BsCloudDrizzle id="condition" />;
  } else if (conditions === "Heavy Freezing Drizzle/Freezing Rain") {
    return <BsCloudDrizzle id="condition" />;
  } else if (conditions === "Heavy Freezing Rain") {
    return <WiNightRainMix id="condition" />;
  } else if (conditions === "Heavy Rain") {
    return <WiRainMix id="condition" />;
  } else if (conditions === "Heavy Rain And Snow") {
    return <WiSleet id="condition" />;
  } else if (conditions === "Heavy Snow") {
    return <WiSnow id="condition" />;
  } else if (conditions === "Ice") {
    return <WiSnow id="condition" />;
  } else if (
    conditions === "Light Drizzle" ||
    "Light Drizzle/Rain" ||
    "Light Freezing Drizzle/Freezing Rain" ||
    "Light Freezing Rain" ||
    "Light Rain" ||
    "Light Rain And Snow"
  ) {
    return <WiSleet id="condition" />;
  } else if (conditions === "Light Snow") {
    return <WiSnow id="condition" />;
  } else if (conditions === "Lightning Without Thunder") {
    return <WiLightning id="condition" />;
  } else if (conditions === "Mist") {
    return <WiFog id="condition" />;
  } else if (conditions === "Overcast" || "Precipitation In Vicinity") {
    return <WiDaySunnyOvercast id="condition" />;
  } else if (conditions === "Rain" || "Rain Showers") {
    return <WiRainMix id="condition" />;
  } else if (
    conditions === "Sky Coverage Decreasing" ||
    "Sky Coverage Increasing" ||
    "Sky Unchanged" ||
    "Smoke Or Haze"
  ) {
    return <WiCloudy id="condition" />;
  } else if (
    conditions === "Snow" ||
    "Snow And Rain Showers" ||
    "Snow Showers"
  ) {
    return <WiSnow id="condition" />;
  } else if (
    conditions === "Squalls" ||
    "Thunderstorm" ||
    "Thunderstorm Without Precipitation"
  ) {
    return <WiThunderstorm id="condition" />;
  }
};

export default WeatherRendering;
