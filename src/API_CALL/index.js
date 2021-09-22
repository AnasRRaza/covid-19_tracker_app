import axios from "axios";


const url = "https://disease.sh/v2/all";

export const GlobalData = async () => {
  try {
    const { data } = await axios(url);
    const requiredData = {
      totalCases: data.cases,
      totalRecovered: data.recovered,
      totalDeaths: data.deaths,
      totalActive: data.active
    }
    return requiredData;
  } catch (error) {
    console.log(error);
  }
}

const global_data_url = "https://disease.sh/v2/historical/all?lastdays=200";

export const DailyData = async () => {
  try {
    const { data } = await axios(global_data_url);
    return data;
  } catch (e) {
    console.log(e);
  }
}

const countryUrl = "https://disease.sh/v2/countries";

export const CountryNames = async () => {
  try {
    const { data } = await axios(countryUrl);
    console.log(data);
    return data;
    // data.map((v)=>{
    //   console.log(v.country);
    // })
  } catch (e) {
    console.log(e)
  }
}


export const CountryData = (country) => {
  try {
    const { data } = `${countryUrl}/${country}`
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}
// const cc = "Afghanistan";
// CountryData(cc)