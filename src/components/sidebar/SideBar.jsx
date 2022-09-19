import { createTheme, IconButton, ThemeProvider } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Link, useLocation } from 'react-router-dom';

const theme = createTheme({
    palette: {
        warning: {
            main: '#ffffff'
        }
    }
})

const SideBar = ({ status, setSidebar }) => {
    const sidebar = [
        {
            name: "Полуфабрикаты",
            path: "/semifinished",
            icon: <AddCircleIcon fontSize="large" />
        }, {
            name: "Производство",
            path: "/elaboration",
            icon: <DashboardIcon fontSize="large" />
        }, {
            name: "Каталог",
            path: "/catalog",
            icon: <DashboardCustomizeIcon fontSize="large" />
        }, {
            name: "Сотрудники",
            path: "/employees",
            icon: <PeopleIcon fontSize="large" />
        }, {
            name: "Склад",
            path: "/stock",
            icon: <InventoryIcon fontSize="large" />
        }, {
            name: "Зарплата",
            path: "/salary",
            icon: <AttachMoneyIcon fontSize="large" />
        }
    ]

    const location = useLocation()
    const [current, setCurrent] = useState(location.pathname)

    return (
        <div className={status ? "side-bar" : "side-bar-close"}>
            <div className="side-bar-header">
                <ThemeProvider theme={theme}>
                    <IconButton onClick={() => setSidebar(!status)}>
                        <MenuIcon fontSize='large' color='warning' />
                    </IconButton>
                </ThemeProvider>
            </div>
            <ul>
                <div className='side-bar-links'>
                    {
                        sidebar.map((item, index) => <Link to={item.path} key={index}
                            className={current === item.path ? 'current-link' : 'default-link'}
                            onClick={() => setCurrent(item.path)}>
                            {
                                status ? (<div className="link-icons">{item.icon}<p>{item.name}</p></div>) :
                                    (<div className="link-icons">{item.icon}</div>)
                            }
                        </Link>)
                    }
                </div>
            </ul>
        </div>
    );
};

export default SideBar;