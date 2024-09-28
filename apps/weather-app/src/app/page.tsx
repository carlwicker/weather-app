'use client';

import LeftPanel from './components/left-panel/LeftPanel';
import { useState, useEffect } from 'react';
import MainPanel from './components/main-panel/MainPanel';

export default function Index() {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const [isFaranheit, setIsFaranheit] = useState<boolean>(true);
  const [location, setLocation] = useState<string>('Brighton');
  const [data, setData] = useState<string | null>(null);

  const setNewLocation = (newLocation: string) => {
    setLocation(newLocation);
  };

  const setIsFaranheitHandler = (bool: any) => {
    setIsFaranheit(bool);
  };

  useEffect(() => {
    const data = fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => setData(data)).then;
  }, [location]);

  return (
    <div className="flex bg-[#100E1D] h-screen w-screen">
      <LeftPanel
        data={data}
        setNewLocation={setNewLocation}
        isFaranheit={isFaranheit}
      />
      <MainPanel
        isFaranheit={isFaranheit}
        setIsFaranheitHandler={setIsFaranheitHandler}
        data={data}
      />
    </div>
  );
}
