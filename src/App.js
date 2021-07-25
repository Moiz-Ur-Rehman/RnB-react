import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './MyComponents/Header';
import { Login } from './MyComponents/Login';
import Home from './MyComponents/Home';
import FixedMenu from "./MyComponents/FixedMenu";
import Register from "./MyComponents/Register";
import Contact from "./MyComponents/Contact";
import About from "./MyComponents/About";
import SnReturns from "./MyComponents/SnReturns";
import Terms from "./MyComponents/Terms";
import Footer from "./MyComponents/Footer";
import Apitesting from "./MyComponents/Apitesting";
import All from "./MyComponents/All";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
      <Route path="/Apitesting">
          <Apitesting/>
        </Route>
        <Route path="/Login">
          <Login/>
          <Footer style={{width:'97%'}} />
        </Route>
        <Route path="/Register">
          <Register/>
          <Footer style={{width:'97%'}} />
        </Route>
        <Route path="/Terms">
          <Terms />
          <Footer style={{width:'97%'}} />
        </Route>
        <Route path="/Contact">
          <Contact/>
          <Footer style={{width:'97%'}} />
        </Route>
        <Route path="/About">
          <About />
          <Footer style={{width:'97%'}} />
        </Route>
        <Route path="/SnReturns">
          <SnReturns/>
          <Footer style={{width:'97%'}} />
        </Route>
        <Route path="/All">
          <FixedMenu cname1="fixed-menu animate-right" cname2="container" />
          <All />
          <Footer />
        </Route>
        <Route path="/">
          <FixedMenu cname1="fixed-menu animate-right" cname2="container" />
          <Home/>
          <Footer/>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;