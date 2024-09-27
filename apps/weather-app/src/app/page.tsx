'use client';

import LeftPanel from './components/left-panel/LeftPanel';
import { useState, useEffect } from 'react';
import MainPanel from './components/main-panel/MainPanel';

export default function Index() {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const [isFaranheit, setIsFaranheit] = useState<boolean>(true);
  const [location, setLocation] = useState<string>('Brighton');
  const [data, setData] = useState<string | null>(null);

  const newLocation = (newLocation: string) => {
    setLocation(newLocation);
  };

  const setIsFaranheitHandler = () => {
    setIsFaranheit(!isFaranheit);
  };

  useEffect(() => {
    const data = fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => setData(data)).then;
  }, [location]);
  console.log(data);

  return (
    <div className="flex bg-[#100E1D] h-screen w-screen">
      <LeftPanel data={data} newLocation={newLocation} />
      <MainPanel
        data={data}
        isFaranheit={isFaranheit}
        setIsFaranheit={setIsFaranheitHandler}
      />
    </div>
  );
}
