import { useEffect, useState } from 'react';
import axios from 'axios';

export default function() {
  const [loading, setLoading] = useState(false);
  const [planetCount, setPlanetCount] = useState(0);
  const [planet, setCurrentPlanet] = useState({ films: [] });

  const getRandomPlanet = () => Math.ceil(Math.random() * planetCount) || '';

  const fetchData = async () => {
    setLoading(true);
    return axios(`https://swapi.co/api/planets/${getRandomPlanet()}`).then((result) => {
      setLoading(false);
      return result;
    });
  };

  const getInitialPlanet = async () => {
    const result = await fetchData();
    setPlanetCount(result.data.count);
    setCurrentPlanet(result.data.results[0]);
  };

  const getNextPlanet = async () => {
    const result = await fetchData();
    setCurrentPlanet(result.data);
  };

  useEffect(() => {
    getInitialPlanet();
  }, []);

  return {
    planet,
    loading,
    getNextPlanet,
  };
}
