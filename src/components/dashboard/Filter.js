import React from "react";
import { Button, Col, Row } from "react-bootstrap";
function Filter() {
    return (
        <div className="top-section">
            <Row className="g-3">
                <Col xxl={4} xl={4} md={4}>
                    <h5>Dashboard</h5>
                </Col>
                <Col xxl={8} xl={8} lg={8} md={8}>
                    <ul className="filter-action">
                        <li>
                            <form action="">
                                <div className="input-group">
                                    <input type="date" className="form-control form-control-sm" placeholder="Username" />
                                    <select className="form-select form-select-sm" id="select">
                                        <option selected>Choose...</option>
                                        <option value="1">monthly</option>
                                        <option value="2">weekly</option>
                                        <option value="3">daily</option>
                                    </select>
                                </div>
                            </form>
                        </li>
                        <li>
                            <Button type="button" variant="outline-light" size="sm"><i className='bx bxs-filter-alt'></i>
                                Filter</Button>
                        </li>
                        <li>
                            <Button type="button" variant="outline-light" size="sm"><i className='bx bxs-download'></i>
                                Export</Button>
                        </li>
                    </ul>
                </Col>
            </Row>
        </div>
    )
}
export default Filter;