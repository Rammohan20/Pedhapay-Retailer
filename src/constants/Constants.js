import routes from "../constants/routes";
import Routes from "../constants/routes";

  
export const VENDOR_SIDEBAR_NAV_MENU_ITEMS = {
    // admin sidebar mainmenu
    
    mainMenu: [
        {
            name: "Dashboard",
            icon: <i className="bx bxs-home icon"></i>,
            path: Routes.dashbaord,
        },
        {
            name: "Money Transfer",
            icon: <i className="bx bxs-user-circle icon"></i>,
            path: Routes.Login,
        },
        {
            name: "Mobile Recharge",
            icon: <i className="bx bxs-user-circle icon"></i>,
            path: Routes.Login,
        },
        {
            name: "DTH Recharge",
            icon: <i className="bx bxs-user-circle icon"></i>,
            path: Routes.Login,
        },
        {
            name: "UPI",
            icon: <i className="bx bxs-user-circle icon"></i>,
            path: Routes.Login,
        },
        {
            name: "Fund Request",
            icon: <i className="bx bxs-user-circle icon"></i>,
            path: Routes.Login,
        },
        {
            name: "FNG Onboard",
            icon: <i className="bx bxs-user-circle icon"></i>,
            path: Routes.Login,
        },
        {
            name: "LIC Premium",
            icon: <i className="bx bxs-user-circle icon"></i>,
            path: Routes.Login,
        },
        {
            name: "Credit Card Payment",
            icon: <i className="bx bxs-user-circle icon"></i>,
            path: Routes.Login,
        },
    ],

    bottomMenu: [
        {
            name: "Contact Us",
            icon: <i className="bx bxs-phone-call icon"></i>,
            path: Routes.Login,
        },
        {
            name: "Help & Support",
            icon: <i className="bx bx-support icon"></i>,
            path: Routes.Login,
        },
        {
            name: "Logout",
            icon: <i className="bx bx-support icon"></i>,
            path: "javascript:void(0)",
           
        },
    ],
    // admin sidebar submenu
    subMenu: [
        {
            name: "Aeps",
            icon: <i className="bx bx-support icon"></i>,
            children: [
                {
                    name: "Aeps 1",
                    path: Routes.Login,
                },
                {
                    name: "Aeps 2",
                    path: Routes.Login,
                }
            ],
        },
        {
            name: "BBPS",
            icon: <i className="bx bx-support icon"></i>,
            children: [
                {
                    name: "Offline Payment",
                    path: Routes.Login,
                },
                {
                    name: "Online Payment",
                    path: Routes.Login,
                }
            ],
        },
        {
            name: "Reports",
            icon: <i className="bx bx-support icon"></i>,
            children: [
                {
                    name: "Ledger",
                    path: routes.report.ledger,
                },
                {
                    name: "UPI Ledger",
                    path: Routes.Login,
                },
                {
                    name: "DMT",
                    path: Routes.Login,
                },
                {
                    name: "AEPS",
                    path: Routes.Login,
                },
                {
                    name: "AEPS Ledger",
                    path: Routes.Login,
                },
                {
                    name: "Recharge",
                    path: Routes.Login,
                },
                {
                    name: "Credit Card Bill",
                    path: Routes.Login,
                },
            ],
        },

        
    ],
};

export const TOP_NAV_ITEMS = [
    {
        icon: <i className="bx bxs-search"></i>,
        path: "javascript:void(0)",
        classNameName: "d-lg-none",
    },
    {
        icon: <i className="bx bxs-grid"></i>,
        path: "#",
    },
    {
        icon: <i className="bx bxs-bell"></i>,
        path: "#",
        badge: 1,
    },
    {
        icon: <i className="bx bxs-chat"></i>,
        path: "#",
        badge: 1,
    },
    {
        icon: <i className="bx bx-menu"></i>,
        path: "javascript:void(0)",
    },
];
