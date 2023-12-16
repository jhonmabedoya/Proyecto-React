import { useState, useEffect } from "react";
import axios from "axios";
import {APIW} from "../config/ApiUrl.jsx";

const useClima = (city) => {
  const [weatherData, setWeatherData] = useState('');
  console.log("ciudad desde UseClima", city);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("URL de la API:", APIW(city));
        const response = await axios.get(
          APIW(city)
        );
        setWeatherData(response.data);
        console.log("data en el fetch: ",response.data);
        console.log("weatherData:  ", weatherData);

        
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);
  

  return { weatherData };
};

export default useClima;