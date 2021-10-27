import React, { useState, useEffect } from 'react'
import { Bar, Line } from 'react-chartjs-2';

import { DailyData } from "../API_CALL";


const Charts = (props) => {

  const { data: { totalCases, totalRecovered, totalActive, totalDeaths }, countryName } = props;

  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setDailyData(await DailyData());
    }
    fetchData();
  }, []);

  const LineChart = (
    dailyData ?
      <Line
        data={{
          labels: dailyData.deaths ? Object.keys(dailyData.deaths).map((v) => {
            return v
          }) : "",
          datasets: [
            {
              label: 'Infected',
              borderColor: "blue",
              fill: "true",
              data: dailyData.cases ? Object.values(dailyData.cases).map((v) => {
                return v
              }) : "",
            },
            {
              label: 'Deaths',
              borderColor: "red",
              data: dailyData.deaths ? Object.values(dailyData.deaths).map((v) => {
                return v
              }) : "",
            },
            // {
            //   label: 'Recovered',
            //   borderColor: "lightGreen",
            //   data: dailyData.deaths ? Object.values(dailyData.recovered).map((v) => {
            //     return v
            //   }) : "",
            // },
          ],
        }}
        height={120}
      /> : null
  );

  const BarChart = (
    totalCases ?
      <Bar
        data={{
          labels: ["Infected", "Recovered", "Active", "Deaths"],
          datasets: [
            {
              label: "People",
              backgroundColor: ["blue", "lightGreen", "yellow", "red"],
              data: [totalCases, totalRecovered, totalActive, totalDeaths],
            },
          ],
        }}
        height={120}
        options={{
          lengend: { display: false },
          title: {
            display: true,
            text: `Current State in ${countryName}`
          },
        }}
      /> : null
  )

  return (
    <div className="ChartContainer">
      <h3 className="currentState">Current State in {countryName ? countryName : "Global"}</h3>
      {countryName ? BarChart : LineChart}
    </div>
  )
}

export default Charts;