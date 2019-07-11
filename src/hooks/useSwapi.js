import { useEffect, useState } from 'react';
import axios from 'axios';

export default function() {
  const [loading, setLoading] = useState(false);
  const [planetCount, setPlanetCount] = useState(0);
  const [planet, setCurrentPlanet] = useState({ films: [] });

  // const getRandomPlanet = Math.ceil(Math.random() * planetCount);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios(`https://swapi.co/api/planets`);
      setLoading(false);

      setPlanetCount(result.data.count);
      setCurrentPlanet(result.data.results[0]);
    };

    fetchData();
  }, []);

  return {
    planet,
    loading,
  };
}
