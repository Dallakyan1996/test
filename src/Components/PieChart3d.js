import React, { Component } from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts';
import highcharts3d from 'highcharts/highcharts-3d';
highcharts3d(Highcharts);


export default class PieChart3DComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            test: 'testing state'
        }
    }

    componentDidMount() {
        this.setState({
            test: 'changing state'
        })
    }
    render() {
        const options = {
            credits: {
                enabled: false
              },
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 45,
                    beta: 10
                }
            },
            title: {
                text: 'Pie 3D Chart'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    size:'50%',
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 35,
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                data: [
                    {
                        name: 'Safari',
                        y: 8.5,
                        sliced: false,
                        selected: true
                    },
                    {
                        name: 'Firefox',
                        y: 45.0,
                        sliced: false,
                        selected: true
                    },
                    {
                        name: 'IE',
                        y: 26.8,
                        sliced: false,
                        selected: true
                    },
                    {
                        name: 'Chrome',
                        y: 12.8,
                        sliced: false,
                        selected: true
                    },
                    {
                        name: 'Others',
                        y: 0.7,
                        sliced: false,
                        selected: true
                    }
                ]
            }]
        }


        return (
            <div>
                <HighchartsReact
                    options={options}
                    highcharts={Highcharts}
                />
            </div>
        )
    }
}