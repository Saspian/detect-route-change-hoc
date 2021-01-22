import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { About } from "./About";
import { Home } from "./Home";
import HOC from "./HOC";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <HOC>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </HOC>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
