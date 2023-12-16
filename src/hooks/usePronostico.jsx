import { useState, useEffect } from "react";
import axios from "axios";
import {APIP} from "../config/ApiUrl.jsx";

const usePronostico = (cityP) => {
  const [PronosticoData, setPronosticoData] = useState('');
  
  console.log("ciudad desde UseClima", cityP);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("URL de la API:", APIP(cityP));
        const responseP = await axios.get(
          APIP(cityP)
        );
        setPronosticoData(responseP.data);
        

        console.log("data en el fetch: ",responseP.data);
        console.log("PronosticoData desde el fetch:  ", PronosticoData);

        
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityP]);
  

  return { PronosticoData };
};

export default usePronostico;