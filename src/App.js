
import { Switch, Route } from "react-router-dom";
import Hw1Page from "./pages/hw1page/";
import Hw2Page from "./pages/hw2page/";

import HeaderComp from './components/Nav/nav';

function App() {
  return (
    <div>
      <HeaderComp />
      <Switch>
        <Route path="/hw1" exact component={Hw1Page} />
        <Route path="/" exact component={Hw2Page} />
      </Switch>
    </div>
  );
}

export default App;
