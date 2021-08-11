import Highcharts from "highcharts/highstock";
import HighchartsReact from 'highcharts-react-official';
import React, { useState, useEffect } from "react";

function getUsersList() {
  const requestOptions = {
    method: "GET"
  };
  return fetch('https://corona-api.com/countries', requestOptions)
    .then(res => {
      return res.json()
    })
}

const PieChartComponent = () => {
  const [state, setState] = useState({
    dataIsReturned: false,
    countres: []
  })
  useEffect(() => {
    getUsersList().then(async (res) => {
      return setState({
        dataIsReturned: true,
        countres: res,
      });
    })
  }, [])
  if (state.dataIsReturned) {
    var options = {
      chart: {
        type: "pie",
      },
      title: {
        text: "Pie chart"
      },
      credits: {
        enabled: false
      },
      plotOptions: {

        pie: {
          size: '50%',
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true
          },
          showInLegend: true
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      series: [
        {
          name: "population",
          color: "rgba(0, 0, 255, 0.4)",
          lineWidth: 1,
          marker: {
            enabled: true,
            symbol: "circle",
            radius: 6,
            states: {
              hover: {
                enabled: false,
                lineWidth: 1
              }
            }
          },

          data: [
            {
              name: state.countres.data[0].name,
              y: state.countres.data[0].latest_data.calculated.recovery_rate,
            },
            {
              name: state.countres.data[1].name,
              y: state.countres.data[1].latest_data.calculated.recovery_rate,

            },
            {
              name: state.countres.data[17].name,
              y: state.countres.data[17].latest_data.calculated.recovery_rate,

            },
            {
              name: state.countres.data[201].name,
              y: state.countres.data[201].latest_data.calculated.recovery_rate,

            },
            {
              name: state.countres.data[96].name,
              y: state.countres.data[96].latest_data.calculated.recovery_rate,

            },
            {
              name: state.countres.data[109].name,
              y: state.countres.data[109].latest_data.calculated.recovery_rate,

            }
          ]
        }
      ]
    };
  }

  return (
    <>
      {
        state.dataIsReturned &&
        <HighchartsReact highcharts={Highcharts} options={options} />
      }
    </>
  )

}

export default PieChartComponent;