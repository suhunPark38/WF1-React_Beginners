import Header from "./Header";
import React from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "./Home";
import {About} from "./About";
import {Introduce} from "./Introduce";
import {Result} from "./Result";
import Whoops404 from "./NotFound";

export const Page = () => (
    <>
        <Header />
        <Routes>
            <Route path={"/"} element={<Home/>}></Route>
            <Route path={"/About"} element={<About/>}></Route>
            <Route path={"/Introduce"} element={<Introduce/>}></Route>
            <Route path={"/Result"} element={<Result/>}></Route>
            <Route path={"*"} element={<Whoops404/>}></Route>
        </Routes>
    </>
)
