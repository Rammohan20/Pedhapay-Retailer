import React from "react";
import { Card, CardBody, Table } from "react-bootstrap";

function RecentCodeCheck() {
    const recentData = [
        {
            id: 1,
            authTime: "Sep 27, 2024, 10:35 AM",
            productName: "Wellversed",
            securityCode: "13882-66677030",
            status: "Success",
            customerName: "Preet Sharma",
            mobileNumber: "+91 8287961369"
        },
        {
            id: 2,
            authTime: "Sep 27, 2024, 10:35 AM",
            productName: "Wellversed",
            securityCode: "13882-66677030",
            status: "invalid",
            customerName: "Preet Sharma",
            mobileNumber: "+91 8287961369"
        },
        {
            id: 3,
            authTime: "Sep 27, 2024, 10:35 AM",
            productName: "Wellversed",
            securityCode: "13882-66677030",
            status: "faild",
            customerName: "Preet Sharma",
            mobileNumber: "+91 8287961369"
        }
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
                            Recent Transaction
                            <i
                                className="bx bxs-info-circle"
                                title="Recent Code Check"
                            />
                        </h5>
                    </li>
                    <li>
                        <button type="button" className="btn btn-sm">
                            <i className="bx bx-expand-alt" />
                        </button>
                    </li>
                </ul>
                <div className="recent-code-check">
                    <div className="table-responsive">
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Product Authentication Time</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Security Code</th>
                                    <th scope="col">Authentication Status</th>
                                    <th scope="col">Customer Name</th>
                                    <th scope="col">Customer Mobile Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentData.map((item, index) => (
                                    <tr key={item.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.authTime}</td>
                                        <td>{item.productName}</td>
                                        <td>{item.securityCode}</td>
                                        <td>
                                            <span className="badge text-bg-success">{item.status}</span>
                                        </td>
                                        <td>{item.customerName}</td>
                                        <td>{item.mobileNumber}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}

export default RecentCodeCheck;
