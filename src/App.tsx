import React, {Suspense, useContext, useState} from "react";
import {Link, Route, Routes} from "react-router-dom";

import {Theme, ThemeContext} from "./theme/ThemeContext";

import {AboutPageAsync} from "./pages/AboutPage/AboutPageAsync";
import {MainPageAsync} from "./pages/MainPage/MainPageAsync";

import './styles/index.scss'
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


export const App = () => {
const {theme, toggleTheme} = useTheme()
    return (

        <div className={classNames("app",{},[theme])}>
            <button onClick={toggleTheme}>TOOGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}
