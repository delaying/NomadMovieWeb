import { useEffect, useState } from "react";


function CoinTracker() {
  const [loading,setLoading] = useState(true);
  const [coins, setCoins]=useState([]);
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers?limit=500")
    .then((response)=>response.json())
    .then((json)=>{
      setCoins(json);
      setLoading(false);
    });
  }, []);
  
  return (
   <>
    <h1>The Coins! ({coins.length})</h1>
    {loading ? <strong>Loading...</strong> : 
      <select>
      {coins.map((coin)=>
      <option>{coin.name}({coin.symbol}):{coin.quotes.USD.price}USD</option>)}
    </select>
    }
    

   </>
  );
}

export default CoinTracker;
