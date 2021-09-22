import React from 'react'
import { Bar, Line } from 'react-chartjs-2';


const Charts = (props) => {

  const container = {
    width: "85%",
    margin: "10px auto",
  }

  const LineChart = (
    <Line
      data={{
        labels: props.daily.deaths ? Object.keys(props.daily.deaths).map((v) => {
          return v
        }) : "",
        datasets: [
          {
            label: 'Infected',
            borderColor: "#3333ff",
            fill: "true",
            data: props.daily.deaths ? Object.values(props.daily.cases).map((v) => {
              return v
            }) : "",
          },
          {
            label: 'Deaths',
            borderColor: "red",
            data: props.daily.deaths ? Object.values(props.daily.deaths).map((v) => {
              return v
            }) : "",
          },
          {
            label: 'Recovered',
            borderColor: "green",
            data: props.daily.deaths ? Object.values(props.daily.recovered).map((v) => {
              return v
            }) : "",
          },
        ],
      }}
    />
  );

  const { data: { totalCases, totalRecovered, totalDeaths, totalActive } } = props;

  const BarChart = (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Active", "Deaths"],
        datasets: [
          {
            label: 'infected',
            backgroundColor: ["#123c69", "#59ba83", "black", "#de6d6d"],
            data: [totalCases, totalRecovered, totalActive, totalDeaths,],
          },
        ],
      }}
    />
  )
  return (
    <div style={container}>
      <h3>Current State in</h3>
      {LineChart}

      {BarChart}
    </div>
  )
}
export default Charts;