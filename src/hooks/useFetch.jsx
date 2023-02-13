import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  // Function to collect data
  

  useEffect(() => {
    const request = async() => {
        const response = await fetch('https://lgs-server.adaptable.app/' + url,{
            mode: "no-cors",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }
        });
  
        const data = await response.json();
  
        if(!response.ok){
            throw Error('could not fetch the data..')
        }
        if(response.ok){
            setData(data)
            setLoading(false)
            setError(null)
           console.log(data);
           console.log(url)
        }
    }
     request()
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
