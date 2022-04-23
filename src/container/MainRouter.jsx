import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/common/Header";
import Basket from "../pages/Basket";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Detail from './../pages/Detail';
import useLogin from './../hooks/useLogin';
import NotFound from './../pages/NotFound';
import Profile from './../pages/Profile';
import MainLayout from "../components/layout/MainLayout";
import DashboardLayout from './../components/layout/DashboardLayout';
import Passengers from './../pages/Passengers';

const MainRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/goods/:goodsId" element={<Detail />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/basket" element={<Basket />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route element={<DashboardLayout />}>
                    <Route path="/profile" element={<Profile />} />
                </Route>
                <Route path="/passengers" element={<Passengers />} />

            </Routes>
        </BrowserRouter>
    );
}

export default MainRouter;