'use client';

import LeftPanel from './components/left-panel/LeftPanel';
import { useState, useEffect } from 'react';
import MainPanel from './components/main-panel/MainPanel';

export default function Index() {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const [isFaranheit, setIsFaranheit] = useState<boolean>(false);
  const [location, setLocation] = useState<string>('Brighton');
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);

  const setNewLocation = (newLocation: string) => {
    setLocation(newLocation);
  };

  const setIsFaranheitHandler = (bool: boolean) => {
    setIsFaranheit(bool);
  };

  // Make this a utility function instead of passing around components8
  function convertToCelsius(fahrenheit: number) {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    return Math.round(celsius);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`
        );
        if (!response.ok) {
          setError(true);
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [location, apiKey]);
  return (
    <main className="bg-[#100E1D] xl:flex-row min-h-screen flex flex-col">
      <LeftPanel
        data={data}
        setNewLocation={setNewLocation}
        isFaranheit={isFaranheit}
        convertToCelsius={convertToCelsius}
        error={error}
        setError={setError}
      />
      {data && (
        <MainPanel
          isFaranheit={isFaranheit}
          setIsFaranheitHandler={setIsFaranheitHandler}
          data={data}
          convertToCelsius={convertToCelsius}
        />
      )}
    </main>
  );
}
