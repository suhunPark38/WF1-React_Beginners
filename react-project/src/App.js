
import {Route, Routes} from "react-router-dom";
import {Home, About, Introduce, Result, Whoops404} from "./components/Pages";

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
