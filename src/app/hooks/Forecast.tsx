import useSWR from "swr";
import dayjs from "dayjs";

function getNextDay(periods: ForecastPeriodData[]) {
  const tomorrow = dayjs().add(1, "day").format("YYYY-03-DD");
  const nextDayPeriod = periods?.find((period: ForecastPeriodData) => {
    return dayjs(period.startTime).format("YYYY-MM-DD") === tomorrow;
  });

  return nextDayPeriod;
}

function useForecast() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(
    `https://api.weather.gov/gridpoints/AKQ/45,84/forecast`,
    fetcher,
    {
      refreshInterval: 600000,
      revalidateOnMount: true,
    }
  );
  const periods = data?.properties?.periods;
  const nextDayPeriod = getNextDay(periods) ?? null;

  return { nextDayPeriod, error };
}

export default useForecast;
