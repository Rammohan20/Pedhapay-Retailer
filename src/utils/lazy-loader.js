import { lazy, Suspense } from 'react';
import { PrivateRoute } from '../utils/route-gaurd';

export function lazyLoadRoutes(componentName, isPrivate = false) {
    const LazyElement = lazy(() => import(`../views/${componentName}.js`));

    return (
        <Suspense
            fallback={<div id="preloader" className="preloader-spinner" >
                <div id="status">
                    <div className="spinner">
                        <div className="double-bounce1"></div>
                        <div className="double-bounce2"></div>
                    </div>
                </div>
            </div>}>
            {isPrivate ? <PrivateRoute componentName={componentName}>
                <LazyElement />
            </PrivateRoute> : <LazyElement />}
        </Suspense>
    );
}