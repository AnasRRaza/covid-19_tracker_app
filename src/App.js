import './App.css';
import React, { useEffect, useState } from 'react'
import Cards from './Components/Cards';
import Navbar from './Components/Navbar';
import Charts from './Components/Charts';
import { GlobalData, DailyData, CountryNames, CountryData } from './API_CALL';
import CountryPicker from './Components/CountyrPicker';


function App() {

  const [globalData, setGlobalData] = useState({});
  const [daily, setDaily] = useState({});
  const [country, setCountry] = useState([]);
  const [countryData, setCountryData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setGlobalData(await GlobalData());
    }
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setDaily(await DailyData());
    }
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setCountry(await CountryNames())
    }
    fetchData();
  }, [])

  const handleCountryChange = (countryData) => {
    console.log(countryData);
  }
  useEffect(() => {
    const fetchData = async () => {
      setCountryData(await CountryData(countryData))
    }
    fetchData();
  })


  return (
    <>
      <Navbar />
      <Cards data={globalData} />
      <CountryPicker country={country} handleCountryChange={handleCountryChange} />
      <Charts data={globalData} daily={daily} />
    </>
  );
}

export default App;
