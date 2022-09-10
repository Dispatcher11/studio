import Footer from './components/Footer';
import Homebody from './components/Homebody';
import Navbar from './components/Navbar';
import Icon from './components/Icon';
import './Styles/index.scss';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { useState } from 'react';

function App() {
const [muted, setMuted] = useState(true);

  return (
    <Router>
    <div className="App">
     <Navbar muted={muted} setMuted={setMuted} />
     <Switch>
      <Route exact path={"/"}>
       <Homebody />
       <Footer />
      </Route>
      <Route path={"/icon:id"}>
       <Icon muted={muted} />
       <Footer />
      </Route>
      <Route path="*">
       <Homebody />
       <Footer />
      </Route>
     </Switch>
    </div>  
    </Router>

  );
}

export default App;
