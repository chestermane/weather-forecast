import React, { createContext, useState } from "react";

type WeatherContextType = {
  period: ForecastPeriodData | null;
  setPeriod: (period: ForecastPeriodData | null) => void;
  error: boolean;
  setError: (error: boolean) => void;
};

const WeatherContext = createContext<WeatherContextType>({
  period: null,
  setPeriod: () => {},
  error: false,
  setError: () => {},
});

const WeatherContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [period, setPeriod] = useState<ForecastPeriodData | null>(null);
  const [error, setError] = useState(false);

  return (
    <WeatherContext.Provider
      value={{ period, setPeriod, error, setError }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherContextProvider };
