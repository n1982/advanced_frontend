import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { routerConfig } from "shared/config/routerConfig/routerConfig";
import {useTranslation} from "react-i18next";

const AppRouter = () => {
    const {t} = useTranslation()
    return (
        <Suspense fallback={<div>{t('loading')}...</div>}>
            <Routes>
                {Object.values(routerConfig).map(({element, path}) => (
                    <Route
                        key={path}
                        path={path}
                        element={<div className="page-wrapper">{element}</div>}
                    />
                ))}
            </Routes>
        </Suspense>
    );
}

export default AppRouter;
