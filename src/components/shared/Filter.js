import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Filter = ({ filters, handleInputChange, handleSubmit }) => {
    return (
        <Form onSubmit={handleSubmit} className="mb-3">
            <div className="row">
                <div className="col-md-2">
                    <Form.Group>
                        <Form.Label>From Date</Form.Label>
                        <Form.Control
                            type="date"
                            name="fromdate"
                            value={filters.fromdate}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </div>
                <div className="col-md-2">
                    <Form.Group>
                        <Form.Label>To Date</Form.Label>
                        <Form.Control
                            type="date"
                            name="todate"
                            value={filters.todate}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </div>
                <div className="col-md-2 d-flex align-items-end">
                    <Button type="submit" className="btn btn-primary w-100">
                        Fetch Data
                    </Button>
                </div>
            </div>
        </Form>
    );
};

export default Filter;
