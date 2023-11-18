
import {Route, Routes} from "react-router-dom";
import {Home,  Whoops404} from "./components/Pages";
import {About} from "./components/About";
import {Introduce} from "./components/Introduce";
import {Result} from "./components/Result";

function App() {

  return (

      <Routes>
          <Route path={"/"} element={<Home/>}></Route>
          <Route path={"/About"} element={<About/>}></Route>
          <Route path={"/Introduce"} element={<Introduce/>}></Route>
          <Route path={"/Result"} element={<Result/>}></Route>
          <Route path={"*"} element={<Whoops404/>}></Route>
      </Routes>


  );
}

export default App;
