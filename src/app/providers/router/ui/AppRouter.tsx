import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";

import {routerConfig} from "shared/config/routerConfig/routerConfig";
import {PageLoader} from "shared/ui/PageLoader/PageLoader";

const AppRouter = () => {
    return (

        <Routes>
            {Object.values(routerConfig).map(({element, path}) => (
                <Route
                    key={path}
                    path={path}
                    element={<div className="page-wrapper">{(
                        <Suspense fallback={<div><PageLoader/></div>}>
                            {element}
                        </Suspense>
                    )}</div>}
                />
            ))}
        </Routes>

    );
}

export default AppRouter;
