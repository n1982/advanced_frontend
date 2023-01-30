import React from "react";
import {Link} from "react-router-dom";

import {useTheme} from "app/providers/lib/useTheme";
import {classNames} from "shared/lib/classNames/classNames";

import {AppRouter} from "app/providers/router";

import './styles/index.scss'

export const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (

        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>
           <AppRouter/>
        </div>
    )
}
