import React from "react";
import { Card, CardBody } from "react-bootstrap";
import ApexCharts from 'react-apexcharts';
function CounterfeitSolutionResults() {
    const options = {
        series: [{
            name: 'series1',
            data: [100, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
        }],
        chart: {
            height: 275,
            type: 'area',
            toolbar: {
                show: false // Hides the top action buttons
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
            enabled: true,
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                // Custom tooltip without the series name
                return `<div class="apexcharts-tooltip">${series[seriesIndex][dataPointIndex]}</div>`;
            }
        },
        legend: {
            show: false // Hides the legend entirely
        },
    };

    return (
        <Card>
            <CardBody>
                <ul className="card-heading">
                    <li>
                        <h5>
                            <img src="https://qa.vcqru.com/vendor-dashboard/assets/img/highest-counterfeit-activities-icon.svg"
                                alt="Transaction Report" />
                               Transaction Report
                            <i className="bx bxs-info-circle" title="Transaction Report"></i>
                        </h5>
                    </li>
                    <li>
                        <button type="button" className="btn btn-sm">
                            <i className="bx bx-expand-alt"></i>
                        </button>
                    </li>
                </ul>
                <div className="anti-counterfeit-results">
                    <ApexCharts options={options} series={options.series} type="area" height={275} />
                    <ul className="counterfeit-digit">
                        <li className="border-end">
                            <p className="card-text">
                                <i className='bx bx-git-commit text-success'></i>
                                Success
                            </p>
                            <h5 className="card-title">52,02,000</h5>
                        </li>
                        <li>
                            <p className="card-text">
                                <i className='bx bx-git-commit text-primary'></i>
                                Un-Success
                            </p>
                            <h5 className="card-title">52,02,000</h5>
                        </li>
                    </ul>
                </div>
            </CardBody>
        </Card>
    )
}
export default CounterfeitSolutionResults;