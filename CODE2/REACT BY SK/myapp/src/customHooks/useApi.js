import { useEffect,useState } from 'react'

const useApi = (API_URL) => {
    let [data, setData] = useState(null);


    useEffect(() => {
        
        async function fetchApi() {
            try {
              let resp = await fetch();
              let apiData = await resp.json();
              setData(apiData);
            } catch (error) {
              console.log(error);
              setData({ message: "something went wrong" });
            }    
        }
        fetchApi();
    },[API_URL])



    return data;
}

export { useApi };
