import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardBody } from "react-bootstrap";
import Filter from './Filter';
import DataTable from 'react-data-table-component';

function AppTable() {
    const today = new Date().toISOString().split('T')[0];
    const [recentData, setRecentData] = useState([]);
    const [filters, setFilters] = useState({
        method: "ledger",
        loginid: "APR10007",
        fromdate: today,
        todate: today,
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [totalRows, setTotalRows] = useState(0);
    const itemsPerPage = 20;

    useEffect(() => {
        fetchReportData();
    }, [filters, currentPage]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const fetchReportData = async () => {
        try {
            const response = await axios.post(
                "http://api.payimps.in/recApiFinal/service.aspx",
                {
                    ...filters,
                    page: currentPage,
                    limit: itemsPerPage,
                },
                {
                    headers: {
                        aksom: 'bebdc5f462e19958af91dd728d97a0c8',
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            );
            setRecentData(response.data); 
            setTotalRows(response.data.length)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCurrentPage(1); // Reset to first page when submitting new filters
        fetchReportData();
    };

    const paginate = (page) => {
        setCurrentPage(page);
    };

    const columns = [
        {
            name: '#',
            selector: (row, index) => index + 1 + (currentPage - 1) * itemsPerPage,
            sortable: false,
        },
        {
            name: 'Date',
            selector: row => row.Date,
            sortable: true,
        },
        {
            name: 'Opening Balance',
            selector: row => row.OldBalance,
            sortable: true,
        },
        {
            name: 'Amount',
            selector: row => row.Fund,
            sortable: true,
        },
        {
            name: 'Closing Balance',
            selector: row => row.AfterBalance,
            sortable: true,
        },
        {
            name: 'Narration',
            selector: row => row.Remark || 'N/A', 
            sortable: true,
        },
    ];

    return (
        <Card>
            <CardBody>
                <ul className="card-heading">
                    <li>
                        <h5>
                            <img
                                src="https://qa.vcqru.com/vendor-dashboard/assets/img/highest-counterfeit-activities-icon.svg"
                                alt="State Wise Code Check/Users"
                            />
                            Ledger Report
                            <i
                                className="bx bxs-info-circle"
                                title="Recent Transaction"
                            />
                        </h5>
                    </li>
                    <li>
                        <button type="button" className="btn btn-sm">
                            <i className="bx bx-expand-alt" />
                        </button>
                    </li>
                </ul>

                <Filter
                    filters={filters}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                />

                <div className="recent-code-check">
                    <DataTable
                        columns={columns}
                        data={recentData}
                        pagination
                        paginationServer
                        paginationTotalRows={totalRows}
                        onChangePage={paginate}
                        noDataComponent="No data available. Please apply filters and fetch data."
                    />
                </div>
            </CardBody>
        </Card>
    );
}

export default AppTable;
