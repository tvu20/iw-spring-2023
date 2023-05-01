import { Wrapper } from "./components/Wrapper";
// import { Homepage } from "./Homepage";
import { Routing } from "./pages/demo/Routing";
import "./styles/main.css";

import { pagesArray } from "./pages/demo/pages";

function Demo() {
  // return <Homepage />;
  return <Wrapper page={Routing} max={pagesArray.length - 1} />;
}

export default Demo;
