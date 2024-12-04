import { Button } from "react-bootstrap";
import React from "react";

function WebHeading({ imageSrc, altText, title, tooltip }) {
    return (
        <ul className="card-heading">
            <li>
                <h5>
                    <img src={imageSrc} alt={altText} />
                    {title}
                    <i className="bx bxs-info-circle" title={tooltip}></i>
                </h5>
            </li>
            <li>
                <Button size="sm" type="button" variant="light">
                    <i className="bx bx-expand-alt"></i>
                </Button>
            </li>
        </ul>
    );
}

export default WebHeading;
