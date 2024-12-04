import React from "react";
import { Card, CardBody, Row, Button, Col } from 'react-bootstrap';
import WebHeading from "../shared/WebHeading";
function BrandOverview() {
    return (
        <Card>
            <CardBody>
                <WebHeading
                    imageSrc="assets/img/highest-counterfeit-activities-icon.svg"
                    altText=""
                    title="Overview"
                    tooltip=""
                />
                <div className="overview-cards">
                    <Row className="row-cols-xxl-2 row-cols-xl-2 row-cols-lg-2 row-cols-md-2 row-cols-1 g-0">
                        <Col className="border-bottom border-end">
                            <ul>
                                <li>
                                    <p className="card-text">AEPS Earnings</p>
                                    <h5 className="card-title">1,20,585</h5>
                                    <p className="card-text"><span className="badge"><i className="bx bx-up-arrow-alt" /> 12%</span> vs last month
                                    </p>
                                </li>
                                <li>
                                    <a href="#" className="stretched-link">
                                        <i className="bx bx-chevron-right" />
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col className="border-bottom">
                            <ul>
                                <li>
                                    <p className="card-text">DMT Earnings</p>
                                    <h5 className="card-title">1,20,585</h5>
                                    <p className="card-text"><span className="badge"><i className="bx bx-up-arrow-alt" /> 12%</span> vs last month
                                    </p>
                                </li>
                                <li>
                                    <a href="#" className="stretched-link">
                                        <i className="bx bx-chevron-right" />
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col className="border-bottom border-end">
                            <ul>
                                <li>
                                    <p className="card-text">Recharge Earnings</p>
                                    <h5 className="card-title">1,20,585</h5>
                                    <p className="card-text"><span className="badge"><i className="bx bx-up-arrow-alt" /> 12%</span> vs last month
                                    </p>
                                </li>
                                <li>
                                    <a href="#" className="stretched-link">
                                        <i className="bx bx-chevron-right" />
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col className="border-bottom">
                            <ul>
                                <li>
                                    <p className="card-text">BBPS Earnings</p>
                                    <h5 className="card-title">1,20,585</h5>
                                    <p className="card-text"><span className="badge"><i className="bx bx-up-arrow-alt" /> 12%</span> vs last month
                                    </p>
                                </li>
                                <li>
                                    <a href="#" className="stretched-link">
                                        <i className="bx bx-chevron-right" />
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </CardBody>
        </Card>
    )
}
export default BrandOverview;