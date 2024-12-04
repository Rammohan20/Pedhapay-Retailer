import React, { useEffect, useState } from 'react';
import ApexCharts from 'react-apexcharts';
import { Card, CardBody } from "react-bootstrap";

function ProductWiseChecked() {
    const product = ["Ghee", "Oil", "Atta", "Milk", "Tea", "Ghee1", "Dal"];

    const [lastIndex, setLastIndex] = useState(0); // Track current index
    const [series, setSeries] = useState([
        { name: "Invalid", data: [] },
        { name: "Success", data: [] },
        { name: "Un-Success", data: [] }
    ]);

    const getNewSeries = (data, range) => {
        const newValue = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
        return [...data, { x: product[lastIndex], y: newValue }];
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (lastIndex < product.length) {
                setSeries(prevSeries => [
                    { ...prevSeries[0], data: getNewSeries(prevSeries[0].data, { min: 70, max: 90 }) },
                    { ...prevSeries[1], data: getNewSeries(prevSeries[1].data, { min: 30, max: 60 }) },
                    { ...prevSeries[2], data: getNewSeries(prevSeries[2].data, { min: 10, max: 40 }) }
                ]);
                setLastIndex(prevIndex => prevIndex + 1);
            } else {
                clearInterval(interval); // Stop updating after reaching the end
            }
        }, 1000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, [lastIndex]);

    const options = {
        chart: {
            id: 'realtime',
            height: 275,
            type: 'line',
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: { speed: 1000 }
            },
            toolbar: { show: false },
            zoom: { enabled: false }
        },
        colors: ['#FF0000', '#00FF00', '#FFA500'],
        dataLabels: { enabled: false },
        stroke: { curve: 'smooth' },
        markers: { size: 0 },
        xaxis: {
            type: 'category',
            categories: product,
            tickPlacement: 'on'
        },
        yaxis: { max: 100 },
        legend: { show: false }
    };

    return (
        <Card>
            <CardBody>
                <ul className="card-heading">
                    <li>
                        <h5>
                            <img src="https://qa.vcqru.com/vendor-dashboard/assets/img/product-wise-icon.svg" alt="Product Wise Checked Code" />
                            Status Wise Transaction Report
                            <i className="bx bxs-info-circle"></i>
                        </h5>
                    </li>
                    <li>
                        <button type="button" className="btn btn-sm">
                            <i className="bx bx-expand-alt"></i>
                        </button>
                    </li>
                </ul>
                <div className="product-wise-checked">
                    <ul className="product-wise-status">
                        <li>
                            <i className="bx bx-stop fs-4 text-success" />
                            <div>
                                <p className="card-text">Success</p>
                                <h5 className="card-title">52,02,000 <i className="bx bx-stop" /> <span className="card-text">50%</span></h5>
                            </div>
                        </li>
                        <li>
                            <i className="bx bx-stop fs-4 text-warning" />
                            <div>
                                <p className="card-text">Pending</p>
                                <h5 className="card-title">52,02,000 <i className="bx bx-stop" /> <span className="card-text">50%</span></h5>
                            </div>
                        </li>
                        <li>
                            <i className="bx bx-stop fs-4 text-danger" />
                            <div>
                                <p className="card-text">Failed</p>
                                <h5 className="card-title">52,02,000 <i className="bx bx-stop" /> <span className="card-text">50%</span></h5>
                            </div>
                        </li>
                    </ul>
                    <ApexCharts options={options} series={series} type="line" height={275} />
                </div>
            </CardBody>
        </Card>
    )
}
export default ProductWiseChecked;