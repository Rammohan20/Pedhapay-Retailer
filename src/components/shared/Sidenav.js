import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { VENDOR_SIDEBAR_NAV_MENU_ITEMS } from "../../constants/Constants";
import { Accordion } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import routes from '../../constants/routes';


function SideBar() {

  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove('user');
    Cookies.remove('sessionToken');
    toast.success('Logged out successfully!');
    navigate(routes.login);
    
  };

  const updatedMenuItems = VENDOR_SIDEBAR_NAV_MENU_ITEMS.bottomMenu.map(item => {
    if (item.name === "Logout") {
      return { ...item, onClick: handleLogout };
    }
    return item;
  });

  return (
    <React.Fragment>
      <div className='sidebar' id="sidebar">
        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              {VENDOR_SIDEBAR_NAV_MENU_ITEMS.mainMenu.map((item, index) => (
                <li key={index} className="nav-link">
                  <Link to={item.path}>
                    {item.icon}
                    <span className="text nav-text">{item.name}</span>
                  </Link>
                </li>
              ))}
              <li className="menu-dropdown">
                <Accordion>
                  {VENDOR_SIDEBAR_NAV_MENU_ITEMS.subMenu.map((subItem, index) => (
                    <Accordion.Item eventKey={String(index)} key={index}>
                      <Accordion.Header>
                        {subItem.icon}
                        <span className="text nav-text">{subItem.name}</span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          {subItem.children.map((subChild, subIndex) => (
                            <li className="nav-link" key={subIndex}>
                              <Link to={subChild.path}>
                                <i className="bx bx-radio-circle-marked icon"></i>
                                <span className="text nav-text">{subChild.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </li>
            </ul>
          </div>
          <div className="bottom-content">
            {updatedMenuItems.map((item, index) => (
              <li key={index} onClick={item.onClick} className="nav-link">
                <Link to={item.path}>
                  {item.icon}
                  <span className="text nav-text">{item.name}</span>
                </Link>
              </li>
            ))}
          
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default SideBar;