import Footer from './components/Footer';
import Homebody from './components/Homebody';
import Navbar from './components/Navbar';
import Icon from './components/Icon';
import './Styles/index.scss';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
     <Navbar />
     <Switch>
      <Route exact path={"/"}>
       <Homebody />
      </Route>
      <Route path={"/icon:id"}>
       <Icon />
      </Route>
     </Switch>
     <Footer />
    </div>  
    </Router>

  );
}

export default App;
