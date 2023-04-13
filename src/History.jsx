import { Wrapper } from "./components/Wrapper";
// import { Homepage } from "./Homepage";
import { Routing } from "./pages/history/Routing";
import "./styles/main.css";

function History() {
  // return <Homepage />;
  return <Wrapper page={Routing} />;
}

export default History;
