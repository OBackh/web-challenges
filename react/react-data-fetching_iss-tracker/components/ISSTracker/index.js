import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function ISSTracker() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  const { data, error, isLoading, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 5000, // Daten werden alle 5 Sekunden neu geladen
  });

  useEffect(() => {
    if (data) {
      setCoords({ longitude: data.longitude, latitude: data.latitude });
    }
  }, [data]);

  const handleRefresh = async () => {
    await mutate(); // Manuelles Neuladen der Daten
  };

  if (error) {
    return <h1>Something went wrong!</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={handleRefresh} // Manuelles Refresh über Button
      />
    </main>
  );
}
