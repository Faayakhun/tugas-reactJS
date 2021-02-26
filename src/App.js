import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Counter from './components/Counter'
import ProductItem from './components/ProductItem'
import Navbar from './components/Navbar'


import './App.css';

function App() {
  return (
    <Router>
    <div>
     <Navbar />
        <Switch>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/productitem">
            <ProductItem />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
