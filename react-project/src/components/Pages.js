import {useLocation, Link, Outlet} from "react-router-dom";

export const Home = () =>(
    <div>
        <h1>Home</h1>
        <p>Home, the first page</p>
        <div>
            <Outlet/>
        </div>
        <nav>
            <ul>
                <li><Link to="About">About</Link></li>
            </ul>
            <ul>
                <li><Link to="Introduce">부품 페이지</Link></li>
            </ul>
            <ul>
                <li><Link to="Result">견적 페이지</Link></li>
            </ul>
        </nav>
    </div>
);

export const About = () => (
    <div>
        <h1>About</h1>
        <p>About, introdicong page</p>
    </div>
);

export const Form = () => (
  <div>
      <h1>설문조사</h1>
      <p>page for 설문조사</p>
  </div>
);

export const Introduce = () => (
    <div>
        <h1>부품 소개</h1>
        <p>page for 부품</p>
    </div>
);

export const Result = () => (
    <div>
        <h1>견적</h1>
        <p>page for 견적</p>
    </div>
);

export const Whoops404 = () => {
    let location = useLocation();
    console.log(location);
    return(
        <div>
            <h1>Resource not found at {location.pathname}</h1>
        </div>
    )
};
