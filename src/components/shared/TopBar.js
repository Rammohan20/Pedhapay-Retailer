import React from "react";
import routes from "../../constants/routes";
import { TOP_NAV_ITEMS } from "../../constants/Constants";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Images from "../../constants/images";

function TopBar() {
    return (
        <div className="nav-layout">
            <Navbar>
                <Container fluid>
                    <Link className="navbar-brand" to={routes.dashbaord}>
                        <img src={Images.logo} alt="Logo" />
                    </Link>
                    <div className="navbar-search-bar">
                        <div className="position-relative">
                            <button type="button" className="btn">Search Anything...</button>
                            <i className="bx bx-search"></i>
                        </div>
                    </div>
                    <Nav className="navbar-nav ms-auto">
                        {TOP_NAV_ITEMS.map((item, index) => (
                            <li key={index} className={`nav-item ${item.className || ""}`}>
                                <Link to={item.path} className="nav-link" onClick={item.onClick}>
                                    {item.icon}
                                    {item.badge && (
                                        <span
                                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                        >
                                            {item.badge}
                                        </span>
                                    )}
                                </Link>
                            </li>
                        ))}
                    </Nav>
                    <div className="nav-profile">
                        <a href="#">
                            <img src={Images.profile} alt="User Profile" />
                        </a>
                        <div>
                            <h6>Pedhapay</h6>
                            <p>Retailer</p>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}
export default TopBar;