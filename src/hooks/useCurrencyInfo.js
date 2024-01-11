import { useEffect, useState } from "react";


const useCurrencyInfo = (currency) => {

    const [data, setData] = useState({});//empty object se initialize kra

    useEffect(()=>{
        fetchCurrency();
    },[currency])

    const fetchCurrency = async () => {
        const api = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
        const apiData = await api.json();
        console.log(apiData[currency]);
        setData(apiData[currency])
    }
    return data
}


export default useCurrencyInfo;