"use client";
import React, { useContext, useEffect } from "react";
import Header from "@/app/components/header/Header";
import WeatherHero from "@/app/components/weather-hero/WeatherHero";
import { WeatherContext } from "@/app/context/WeatherContext";
import useForecast from "@/app/hooks/Forecast";
import DetailsCard, { DetailType } from "../details-card/DetailsCard";
import Ticker from "@/app/components/ticker/Ticker";

import styles from "./Dashboard.module.scss";

function Dashboard() {
  const { nextDayPeriod, error: forecastError } = useForecast();
  const { setPeriod, setError } = useContext(WeatherContext);

  useEffect(() => {
    if (forecastError) {
      setError(true);
    } else {
      setPeriod(nextDayPeriod);
    }
  }, [nextDayPeriod, forecastError]);

  return (
    <div className={styles.dashboardContainer}>
      <Header />
      <WeatherHero />
      <Ticker />
      <div className={styles.detailContainer}>
        <div className={styles.leftDetailSection}>
          <DetailsCard detailType={DetailType.Precipitation} />
          <DetailsCard detailType={DetailType.Wind} />
        </div>
        <div className={styles.rightDetailSection}>
          <DetailsCard detailType={DetailType.Humidity} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
