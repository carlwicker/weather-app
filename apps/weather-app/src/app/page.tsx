'use client';

import LeftPanel from './components/left-panel/LeftPanel';
import { useState, useEffect } from 'react';
import MainPanel from './components/main-panel/MainPanel';

export default function Index() {
  const [isFaranheit, setIsFaranheit] = useState<boolean>(false);
  const [location, setLocation] = useState<string>('Brighton');
  const [data, setData] = useState(null);
  const [error, setError] = useState<boolean>(false);

  const setNewLocation = (newLocation: string) => {
    setLocation(newLocation);
  };

  const setIsFaranheitHandler = (bool: boolean) => {
    setIsFaranheit(bool);
  };

  // Maybe move this to utils to save passing the function down the chain
  function convertToCelsius(fahrenheit: number) {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    return Math.round(celsius);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/weather?location=${location}`);
        if (!response.ok) {
          setError(true);
          throw new Error('Location not found');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [location]);

  return (
    <div className="bg-[#100E1D] xl:flex-row min-h-screen flex flex-col">
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
          data={data}
          setIsFaranheitHandler={setIsFaranheitHandler}
          convertToCelsius={convertToCelsius}
        />
      )}
    </div>
  );
}
