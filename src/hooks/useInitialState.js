import { useState, useEffect } from 'react';

 

const useInitialState = (API) => {
  const UrlBase = 'https://backendzinobe.vercel.app/';
  const Url = UrlBase + API;
  console.log(Url);

  const [ tercero, setTercero ] = useState([]);
  useEffect(() => {
    fetch(Url)
      .then(response => response.json())
      .then(data => setTercero(data));
  }, []);
  return tercero;
};

export default useInitialState;