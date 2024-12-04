import React, { useEffect } from 'react';
import Highcharts from 'highcharts/highmaps';
import HighchartsReact from 'highcharts-react-official';
import mapDataIndia from '@highcharts/map-collection/countries/in/in-all.geo.json';
import { Button, Card, CardBody } from 'react-bootstrap';

const HeatMap = () => {
    
    // useEffect(() => {
    //     // Initialize Highcharts map module
    //     const mapModule = require('highcharts/modules/map');
    //     mapModule(Highcharts);
    // }, []);

    const options = {
        chart: {
            map: 'countries/in/in-all',
        },
        title: {
            text: '',
        },
        tooltip: {
            formatter: function () {
                let { success, invalid, failed } = this.point;
                return `<b>${this.point.name}</b><br>Active Retailer: ${success}<br>Inactive Retailer: ${invalid}`;
            },
        },
        series: [
            {
                mapData: mapDataIndia, 
                data: [
                    { 'hc-key': 'in-mh', success: 500, invalid: 200, failed: 300, color: '#28a745' },
                    { 'hc-key': 'in-up', success: 500, invalid: 200, failed: 300, color: '#28a745' },
                    { 'hc-key': 'in-rj', success: 500, invalid: 200, failed: 300, color: '#28a745' },
                    { 'hc-key': 'in-5390', success: 200, invalid: 600, failed: 200, color: '#ffc107' },
                    { 'hc-key': 'in-ap', success: 100, invalid: 100, failed: 600, color: '#FF0000' },
                    { 'hc-key': 'in-ka', success: 300, invalid: 500, failed: 200, color: '#ffc107' },
                    { 'hc-key': 'in-tn', success: 700, invalid: 200, failed: 100, color: '#28a745' },
                ],
                showInLegend: false,
                states: {
                    hover: {
                        color: '#BADA55',
                    },
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}',
                },
            },
        ],
    };

    return (
        <Card>
            <CardBody>
                <ul class="card-heading">
                    <li>
                        <h5>
                            <img src="https://qa.vcqru.com/vendor-dashboard/assets/img/highest-counterfeit-activities-icon.svg"
                                alt="Highest Counterfeit Activities" />
                            Highest Retailer In State  
                            <i class='bx bxs-info-circle' title="Highest Counterfeit Activities"></i>
                        </h5>
                    </li>
                    <li>
                        <Button type="button" variant="light" className="btn-sm">
                            <i className="bx bx-expand-alt" />
                        </Button>
                    </li>
                </ul>
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={'mapChart'}
                    options={options}
                />
            </CardBody>
        </Card>
    );
};

export default HeatMap;
