import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Buyflow from './buyflow/Buyflow';
import { ProductIds } from './buyflow/types';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/buy/insurance_dev">
            <Buyflow productId={ProductIds.devIns} />
          </Route>
          <Route path="/buy/insurance_designer">
            <Buyflow productId={ProductIds.designerIns} />
          </Route>
          <Route path="/">
            <p>Welcome to Getsafe</p>
            <Link to="/buy/insurance_dev">Get started with Developer Insurance!</Link>
            <br />
            <Link to="/buy/insurance_designer">Get started with Designer Insurance!</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
