import React, { useContext } from "react";
import { WeatherContext } from "@/app/context/WeatherContext";
import { Card } from "antd";
import { FaCloudRain, FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { MdDewPoint } from "react-icons/md";

import { formatPercent } from "@/app/helpers/FormatPercent";

import styles from "./DetailsCard.module.scss";

export enum DetailType {
  Wind = "wind",
  Precipitation = "precipitation",
  Humidity = "humidity",
}

interface DetailsCardProps {
  detailType: DetailType;
}

function DetailsCard({ detailType }: DetailsCardProps) {
  const { period } = useContext(WeatherContext);
  console.log("period: ", period);

  return (
    <Card className={styles.detailCard} hoverable>
      {detailType === DetailType.Precipitation && (
        <div className={styles.precipitation}>
          <FaCloudRain />
          <div>
            Precipitation: {period?.probabilityOfPrecipitation.value ?? "0"}%
          </div>
        </div>
      )}
      {detailType === DetailType.Wind && (
        <div className={styles.windSpeed}>
          <FaWind />
          <div>Wind Speed: {period?.windSpeed}</div>
        </div>
      )}
      {detailType === DetailType.Humidity && (
        <div className={styles.humidityDewpointWrapper}>
          <div className={styles.humidity} style={{ display: "flex" }}>
            <WiHumidity />
            Humidity: {period?.relativeHumidity?.value ?? "0"}%
          </div>
          <div className={styles.humidity} style={{ display: "flex" }}>
            <MdDewPoint />
            Dew Point: {formatPercent(period?.dewpoint?.value) ?? "0"}%
          </div>
        </div>
      )}
    </Card>
  );
}

export default DetailsCard;
