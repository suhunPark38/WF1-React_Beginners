import Header from "./Header";
import React from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "./Home";
import {About} from "./About";
import {ProductPage} from "./ProductPage";
import {EstimatePage} from "./EstimatePage";
import Whoops404 from "./NotFound";



export const Page = () => (
    <>
        <Header />
        <Routes>
            <Route path={"/"} element={<Home/>}></Route>
            <Route path={"/About"} element={<About/>}></Route>
            <Route path={"/ProductPage"} element={<ProductPage/>}></Route>
            <Route path={"/EstimatePage"} element={<EstimatePage/>}></Route>
            <Route path={"*"} element={<Whoops404/>}></Route>
        </Routes>
    </>
)
