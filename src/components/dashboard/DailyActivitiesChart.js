import React from "react";
import { Card } from "react-bootstrap";
import Chart from 'react-apexcharts';

function DailyActivitiesChart() {
    const options = {
        chart: {
            type: 'bar',
            height: 275,
            stacked: true,
            toolbar: {
                show: true,
                tools: {
                    download: false,
                    selection: true,
                    zoom: true,
                    zoomin: true,
                    zoomout: true,
                    pan: true,
                    reset: true,
                },
            },
            zoom: {
                enabled: true,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 8,
                columnWidth: '24%',
                strokeWidth: 1,
                dataLabels: {
                    total: {
                        enabled: true,
                        style: {
                            fontSize: '12px',
                            fontWeight: 900,
                        },
                    },
                },
            },
        },
        xaxis: {
            type: 'category',
            categories: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        },
        legend: {
            position: 'top',
            offsetY: 10,
            labels: {
                show: false,
            },
        },
        fill: {
            opacity: 1,
        },
    };

    const series = [
        { name: 'Users', data: [44, 55, 41, 67, 22, 43, 25] },
        { name: 'Code Check', data: [13, 23, 20, 8, 13, 27, 25] },
    ];

    return (
        <Card>
            <Card.Body>
                <ul className="card-heading">
                    <li>
                        <h5>
                            <img src="https://qa.vcqru.com/vendor-dashboard/assets/img/highest-counterfeit-activities-icon.svg" alt="Daily Activities" />
                            Daily Activities
                            <i className="bx bxs-info-circle" title="Daily Activities" />
                        </h5>
                    </li>
                    <li>
                        <button type="button" className="btn btn-sm">
                            <i className="bx bx-expand-alt" />
                        </button>
                    </li>
                </ul>
                <div className="daily-activities">
                    <Chart options={options} series={series} type="bar" height={275} />
                    <ul className="daily-activities-data">
                        <li>
                            <div className="activite-data">
                                <img src="https://qa.vcqru.com/vendor-dashboard/assets/img/users_icon.svg" alt="Users" />
                                <div>
                                    <h5 className="card-title">Users</h5>
                                    <p className="card-text">10% vs last week</p>
                                </div>
                            </div>
                            <h6>900</h6>
                        </li>
                        <li>
                            <div className="activite-data">
                                <img src="https://qa.vcqru.com/vendor-dashboard/assets/img/code-check.svg" alt="Code Check" />
                                <div>
                                    <h5 className="card-title">Code Check</h5>
                                    <p className="card-text">8% vs last week</p>
                                </div>
                            </div>
                            <h6>2311</h6>
                        </li>
                    </ul>
                </div>
            </Card.Body>
        </Card>
    );
}

export default DailyActivitiesChart;
