import Routes from "../constants/routes";

  
export const VENDOR_SIDEBAR_NAV_MENU_ITEMS = {
    // admin sidebar mainmenu
    
    mainMenu: [
        {
            name: "Dashboard",
            icon: <i className="bx bxs-home icon"></i>,
            path: Routes.Login,
        },
        {
            name: "DMT",
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
            name: "Reports",
            icon: <i className="bx bx-support icon"></i>,
            children: [
                {
                    name: "Attendance Summary",
                    path: Routes.Login,
                },
                {
                    name: "Attendance Log",
                    path: Routes.Login,
                },
                {
                    name: "Log Import",
                    path: Routes.Login,
                },
                {
                    name: "Auto Attendance",
                    path: Routes.Login,
                },
                {
                    name: "Monthly Leave Report",
                    path: Routes.Login,
                },
            ],
        },

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
