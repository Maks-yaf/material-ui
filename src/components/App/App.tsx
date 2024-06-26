import React from 'react';
import classes from './App.module.scss';
import {Link, Outlet} from "react-router-dom";
import About from "@/pages/about/About";
import avatarPng from "@/assets/avatar-png.png";
import avatarJpg from "@/assets/avatar-jpg.jpg";
import CalendarSvg from "@/assets/calendar-svg.svg";
import Button from '@mui/material/Button'



export const App = () => {
    const [count, setCount] = React.useState<number>(0);

    const increment = () => {
        setCount(prev => prev + 1);

    }

    return (
        <div >
            <h1>PLATFORM={__PLATFORM__}</h1>
            <div>
                <img width={100} height={100} src={avatarPng} alt="Avatar Png"/>
                <img width={100} height={100} src={avatarJpg} alt="Avatar Jpg"/>
            </div>
            <div>
                <CalendarSvg className={classes.icon} height={55} width={55}/>
            </div>
            <Link to={`/about`}>about</Link>
            <br/>
            <Link to={`/shop`}>shop</Link>
            <h1 className={classes.value}>{count}</h1>
            <Button variant="outlined"
                    className={classes.button}
                    onClick={increment}>
                25
            </Button>
            <Outlet/>
        </div>
    );
};
