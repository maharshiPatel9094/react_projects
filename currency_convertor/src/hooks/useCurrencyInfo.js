// making our own custom hook
import { useEffect } from "react";
import { useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState({});
useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    // usually the response from the api is in the form of string so we have to convert it into json format
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
},[currency])

return data
}

export default useCurrencyInfo