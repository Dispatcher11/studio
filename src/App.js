import Footer from './components/Footer';
import Homebody from './components/Homebody';
import Navbar from './components/Navbar';
import Icon from './components/Icon';
import './Styles/index.scss';
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

function App() {
const location = useLocation();
const [muted, setMuted] = useState(true);


  return (

      <AnimatePresence exitBeforeEnter>
     <Switch location={location} key={location.key}>
     {/* <Switch> */}
      <Route exact path={"/"}>
      <Navbar muted={muted} setMuted={setMuted} />
       <Homebody muted={muted} setMuted={setMuted} />
       <Footer />
      </Route>
      <Route path={"/icon:id"}>
      <Navbar muted={muted} setMuted={setMuted} />
       <Icon muted={muted} />
       <Footer />
      </Route>
      <Route path={"/about"}>
        <h1>about</h1>
      </Route>
      <Route path="*">
      <Navbar muted={muted} setMuted={setMuted} />
       <Homebody muted={muted} setMuted={setMuted} />
       <Footer setMuted={setMuted}/>
      </Route>
     </Switch>
     </AnimatePresence>
    
  );
}

export default App;
