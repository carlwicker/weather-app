'use client';

import LeftPanel from './components/left-panel/LeftPanel';
import { useState, useEffect } from 'react';
import MainPanel from './components/main-panel/MainPanel';

export default function Index() {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const [isFaranheit, setIsFaranheit] = useState<boolean>(false);
  const [location, setLocation] = useState<string>('Brighton');
  const [data, setData] = useState<string | null>(null);

  const setNewLocation = (newLocation: string) => {
    setLocation(newLocation);
  };

  const setIsFaranheitHandler = (bool: boolean) => {
    setIsFaranheit(bool);
  };

  function convertToCelsius(fahrenheit: number) {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    return Math.round(celsius);
  }

  useEffect(() => {
    const data = fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => setData(data)).then;
  }, [location]);

  return (
    <div className="bg-[#100E1D] xl:flex-row min-h-screen flex flex-col">
      <LeftPanel
        data={data}
        setNewLocation={setNewLocation}
        isFaranheit={isFaranheit}
        convertToCelsius={convertToCelsius}
      />
      <MainPanel
        isFaranheit={isFaranheit}
        setIsFaranheitHandler={setIsFaranheitHandler}
        data={data}
        convertToCelsius={convertToCelsius}
      />
    </div>
  );
}
