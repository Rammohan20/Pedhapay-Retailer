import { useRoutes } from 'react-router-dom';
import routes from '../constants/routes';
import Login from '../views/auth/login';

export function AppRoutes() {

    const RetailerRoutes = [
        {
            path: '/',
            children: [
                {
                    index: true, element: <Login/>,
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

    return useRoutes(AuthRoutes);
}