import React, { useContext } from "react";
import { WeatherContext } from "@/app/context/WeatherContext";
import dayjs from "dayjs";

import styles from "./WeatherHero.module.scss";

function WeatherHero() {
  const { period } = useContext(WeatherContext);
  const date = dayjs(period?.startTime).format("MM/DD/YYYY");

  return (
    <div className={styles.weatherHeroContainer}>
      <div className={styles.forecast}>
        <h1>{period?.temperature}&deg;</h1>
        <h2> {period?.shortForecast}</h2>
      </div>

      <div className={styles.date}>
        <h2>{date}</h2>
      </div>
    </div>
  );
}

export default WeatherHero;
