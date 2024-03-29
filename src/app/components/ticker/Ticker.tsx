import { WeatherContext } from "@/app/context/WeatherContext";
import React, { useContext } from "react";
import dayjs from "dayjs";

import styles from "./Ticker.module.scss";

function Ticker() {
  const { period } = useContext(WeatherContext);
  const currentDate = dayjs(period?.startTime).format("MM-DD-YY");
  return (
    <div style={{ margin: "0 9px" }}>
      <ul className={styles.ticker}>
        <li className={styles.ticketItem}>
          Tomorrow&apos;s Forecast - {period?.detailedForecast}
        </li>
        <li aria-hidden className={styles.ticketItem}>
          Tomorrow&apos;s Forecast - {period?.detailedForecast}
        </li>
      </ul>
    </div>
  );
}

export default Ticker;
