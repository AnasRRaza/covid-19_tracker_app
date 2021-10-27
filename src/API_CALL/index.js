import axios from "axios";


const globalUrl = "https://disease.sh/v2/all";
const singleCountryUrl = "https://disease.sh/v2/countries";


export const GlobalData = async (country) => {
  if (country) {
    try {
      const { data } = await axios(`${singleCountryUrl}/${country}`);
      const requiredData = {
        totalCases: data.cases,
        totalRecovered: data.recovered,
        totalDeaths: data.deaths,
        totalActive: data.active
      }
      return requiredData;
    } catch (e) {
      console.log(e);
    }
  } else {
    try {
      const { data } = await axios(globalUrl);
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
}

const dailyDataUrl = "https://disease.sh/v2/historical/all?lastdays=5000";

export const DailyData = async () => {
  try {
    const { data } = await axios(dailyDataUrl);
    return data;
  } catch (e) {
    console.log(e);
  }
}

const countryNamesUrl = "https://disease.sh/v2/countries";

export const CountryNames = async () => {
  try {
    const { data } = await axios(countryNamesUrl);
    return data;
  } catch (e) {
    console.log(e)
  }
}
