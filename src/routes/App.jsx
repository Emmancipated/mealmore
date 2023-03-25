import "../style/style.scss";
import { Outlet,} from "react-router-dom";
import Header from "../components/Header";

const App = () => {
  
  return  <main id="App">
              <Header/>
              <div className="render-page">
                <Outlet />
              </div>
          </main>
}

export default App;
