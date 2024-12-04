import Cookies from 'js-cookie';
import routes from '../constants/routes';
import { lazyLoadRoutes } from '../utils/lazy-loader';
import { useRoutes } from 'react-router-dom';
import { useState, useEffect } from 'react';



export function AppRoutes() {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const RetailerRoutes = [
        {
            path: routes.dashbaord,
            children: [
                {
                    index: true,  element:  lazyLoadRoutes('retailer/home') ,
                },
                {
                    path: routes.report.ledger,  element: lazyLoadRoutes('retailer/reports/ledger') ,
                },
               
            ]
        }
    ];

    const AuthRoutes =[
        {
            path: routes.login, element: lazyLoadRoutes('auth/login'),
        },
    ]
   
    useEffect(() => {
        const sessionToken = Cookies.get('sessionToken');
        setIsLoggedIn(sessionToken === 'Retailer'); 
    },);

    const appRoutes = isLoggedIn ? RetailerRoutes : AuthRoutes;

    return useRoutes(appRoutes);
}