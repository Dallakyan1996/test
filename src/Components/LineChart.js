import Highcharts from "highcharts/highstock";
import HighchartsReact from 'highcharts-react-official'
const options = {
    chart: {
        type: "line"
    },
    title: {
        text: "Line chart"
    },
    credits: {
        enabled: false
    },
    plotOptions: {

        line: {
            // width:'20%',
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
                enabled: true
            },
            showInLegend: true
        }
    },

    series: [

        {
            name: "population",
            color: "red",
            lineWidth: 1,
            marker: {
                enabled: true,
                symbol: "circle",
                radius: 3,
                states: {
                    hover: {
                        enabled: false,
                        lineWidth: 1
                    }
                }
            },

            data: [
                {
                    events: {
                        click: () => {
                            alert('Yerevan');
                        }
                    },
                    name: 'Yerevan',
                    y: 50,
                },
                {
                    events: {
                        click: () => {
                            alert('Gyumri');
                        }
                    },
                    name: 'Gyumri',
                    y: 15,
                },
                {
                    events: {
                        click: () => {
                            alert('Vanadzor');
                        }
                    },
                    name: 'Vanadzor',
                    y: 10,
                },
                {
                    events: {
                        click: () => {
                            alert('Abovyan');
                        }
                    },
                    name: 'Abovyan',
                    y: 8,
                },
                {
                    events: {
                        click: () => {
                            alert('Hrazdan');
                        }
                    },
                    name: 'Hrazdan',
                    y: 5,
                },
                {
                    events: {
                        click: () => {
                            alert('Armavir');
                        }
                    },
                    name: 'Armavir',
                    y: 12,
                }
            ]
        }
    ]
};

const LineChartComponent = () => {
    return (
        <HighchartsReact highcharts={Highcharts} options={options} containerProps={{ style: { width: "25%", height: "50%", margin: 'auto' } }} />
    )

}

export default LineChartComponent;