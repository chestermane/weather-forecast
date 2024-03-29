"use client";
import Dashboard from "./components/dashboard/Dashboard";
import { WeatherContextProvider } from "@/app/context/WeatherContext";

export default function App() {
  return (

      <WeatherContextProvider>
        <Dashboard />
      </WeatherContextProvider>
 
  );
}
