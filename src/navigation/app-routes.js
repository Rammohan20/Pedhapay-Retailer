import { useRoutes } from 'react-router-dom';
import routes from '../constants/routes';
import Login from '../views/auth/login';
import Home from '../views/retailer/home';

export function AppRoutes() {

    const RetailerRoutes = [
        {
            path: routes.dashbaord,
            children: [
                {
                    index: true, element: <Home/>,
                },
               
            ]
        }
    ];

    const AuthRoutes =[
        {
            path: routes.login, element: <Login/>,
        },
    ]

    let appRoutes
    let ram

    if(ram && 100){
        appRoutes = RetailerRoutes
    }
    else{
        appRoutes = AuthRoutes
    }

    return useRoutes(appRoutes);
}