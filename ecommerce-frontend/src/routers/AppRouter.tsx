import {Routes, Route} from "react-router-dom";
import {ROUTE} from "./routes";
import {MainTemplate} from "../pages";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path={ROUTE.HOME} element={<MainTemplate/>}>
                {/*<Route index element={}/>*/}
                {/*<Route path={ROUTE.PRODUCT} element={}/>*/}
                {/*<Route path={ROUTE.CART} element={}/>*/}
                {/*<Route path={ROUTE.NOT_FOUND} element={}/>*/}
            </Route>
            {/*<Route path={ROUTE.HOME} element={}>*/}
            {/*    <Route path={ROUTE.AUTH} element={}/>*/}
            {/*    <Route path={ROUTE.SHIPPING} element={}/>*/}
            {/*    <Route path={ROUTE.PAYMENT} element={}/>*/}
            {/*    <Route*/}
            {/*        path={ROUTE.THANKS}*/}
            {/*        element={}*/}
            {/*    />*/}
            {/*</Route>*/}
        </Routes>
    );
};