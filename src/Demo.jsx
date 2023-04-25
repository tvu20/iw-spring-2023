import { Wrapper } from "./components/Wrapper";
// import { Homepage } from "./Homepage";
import { Link } from "react-router-dom";
import { Routing } from "./pages/demo/Routing";
import "./styles/main.css";

function Demo() {
  // return <Homepage />;
  return (
    <>
      <div> This page is a work in progress. Come back later! </div>
      <Link to="/">
        <button className="btn return-btn">Return</button>
      </Link>
    </>
  );
  // return <Wrapper page={Routing} max={4} />;
}

export default Demo;
