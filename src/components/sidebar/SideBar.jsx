import { createTheme, IconButton, ThemeProvider } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const theme = createTheme({
    palette: {
        warning: {
            main: '#ffffff'
        }
    }
})

const SideBar = () => {
    const [sideBar, setSideBar] = useState(true)
    const sidebar = ["Выработка", "Модель", "Вид моделей", "Сотрудники", "Выработка свод", "ЗП сдельная"]
    const [current, setCurrent] = useState(0)

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
                {
                    sidebar.map((item, index) => <li key={index}
                        className={current === index ? 'current-li' : 'default-li'}
                        onClick={() => setCurrent(index)}>{item}</li>)
                }
            </ul>
        </div>
    );
};

export default SideBar;