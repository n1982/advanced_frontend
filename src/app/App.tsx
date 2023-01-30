import React, {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";

import {useTheme} from "app/providers/lib/useTheme";
import {classNames} from "shared/lib/classNames/classNames";

import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

import './styles/index.scss'

export const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (

        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>TOOGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}
