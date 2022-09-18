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

const SideBar = () => {
    const [sideBar, setSideBar] = useState(true)

    const sidebar = [
        {
            name: "Выработка",
            path: "/production",
            icon: <AddCircleIcon fontSize="large" />
        }, {
            name: "Модель",
            path: "/models",
            icon: <DashboardIcon fontSize="large" />
        }, {
            name: "Вид моделей",
            path: "/types",
            icon: <DashboardCustomizeIcon fontSize="large" />
        }, {
            name: "Сотрудники",
            path: "/employees",
            icon: <PeopleIcon fontSize="large" />
        }, {
            name: "Выработка свод",
            path: "/consolidated",
            icon: <InventoryIcon fontSize="large" />
        }, {
            name: "ЗП сдельная",
            path: "/salary",
            icon: <AttachMoneyIcon fontSize="large" />
        }
    ]

    const location = useLocation()
    const [current, setCurrent] = useState(location.pathname)

    return (
        <div className={sideBar ? "side-bar" : "side-bar-close"}>
            <div className="side-bar-header">
                <ThemeProvider theme={theme}>
                    <IconButton onClick={() => setSideBar(!sideBar)}>
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
                            sideBar ? (<div className="link-icons">{item.icon}<p>{item.name}</p></div>) :
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