import { Wrapper } from "./components/Wrapper";
// import { Homepage } from "./Homepage";
import { Routing } from "./pages/history/Routing";
import "./styles/main.css";

import { pagesArray } from "./pages/history/pages";

function History() {
  // return <Homepage />;
  return <Wrapper page={Routing} max={pagesArray.length - 1} />;
}

export default History;
