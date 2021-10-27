import './App.css';
import React, { useEffect, useState } from 'react'
import Cards from './Components/Cards';
import Navbar from './Components/Navbar';
import Charts from './Components/Charts';
import { GlobalData } from './API_CALL';
import CountryPicker from './Components/CountyrPicker';


function App() {

  const [data, setData] = useState({});
  const [countryName, setCountryName] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      setData(await GlobalData());
    }
    fetchData();
  }, []);

  const handleCountryChange = async (country) => {
    setCountryName(country);
    setData(await GlobalData(country));
    return countryName;
  }

  return (
    <div className="conatiner">
      <Navbar />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Charts data={data} countryName={countryName} />
    </div>
  );
}

export default App;
