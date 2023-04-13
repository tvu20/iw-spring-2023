import { Wrapper } from "./components/Wrapper";
// import { Homepage } from "./Homepage";
import { Routing } from "./pages/demo/Routing";
import "./styles/main.css";

function Demo() {
  // return <Homepage />;
  return <Wrapper page={Routing} max={4} />;
}

export default Demo;
