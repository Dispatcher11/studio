import Footer from './components/Footer';
import Homebody from './components/Homebody';
import Navbar from './components/Navbar';
import Icon from './components/Icon';
import './Styles/index.scss';
import { BrowserRouter as Router, HashRouter, Route, Switch} from "react-router-dom";
import { useState } from 'react';

function App() {
const [muted, setMuted] = useState(true);

  return (
    <Router>
    <div className="App">
     <Switch>
      <Route exact path={"/"}>
      <Navbar muted={muted} setMuted={setMuted} />
       <Homebody muted={muted} />
       <Footer />
      </Route>
      <Route path={"/studio/icon:id"}>
      <Navbar muted={muted} setMuted={setMuted} />
       <Icon muted={muted} />
       <Footer />
      </Route>
      <Route path="*">
      <Navbar muted={muted} setMuted={setMuted} />
       <Homebody muted={muted} />
       <Footer />
      </Route>
     </Switch>
    </div>  
    </Router>

    // <HashRouter>
    //   <div className="App">
    //     <Navbar />
    //     <Switch>
    //         <Route exact path="/" component={Homebody} />
    //         <Route path='/icon:id' element={<Icon />} />   
    //     </Switch>
 
    //     <Footer />
    //   </div>

    // </HashRouter>
  );
}

export default App;
