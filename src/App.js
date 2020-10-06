import React from 'react';
import './css/custom.css';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from "react-bootstrap";
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink} from "react-router-dom";
import Home from "./components/Home.js"
import AboutMe from "./components/AboutMe.js"
import Contact from "./components/Contact.js"
import Portfolio from "./components/Portfolio.js"
import { withRouter } from "react-router";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

library.add(fab, faCommentDots)

const Header = props => {
    const { location } = props;
    return (
        <div className="row">
            <Navbar className="navbarDark navbar-dark header text-center" expand="lg">
                <Navbar.Brand href="/home">
                    <img src={require('./images/LogoTB.png')} width="140" height="45" alt=""/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-3" defaultActiveKey="/home" activeKey={location.pathname}>
                        <NavLink className="linkNav" activeClassName="underline" to="/home">Home</NavLink>
                        <NavLink className="linkNav" activeClassName="underline" to="/portfolio">Portfolio</NavLink>
                        <NavLink className="linkNav" activeClassName="underline" to="/aboutme">Bio</NavLink>
                        <NavLink className="linkNav" activeClassName="underline" to="/contact">Contact</NavLink>
                        <a href="https://www.instagram.com/thomasbissay/" target="_blank" rel="noopener noreferrer" className="socialNav">
                            <FontAwesomeIcon size="lg" icon={['fab', 'instagram']}/></a>
                        <a href="https://www.linkedin.com/in/thomas-bissay" target="_blank" rel="noopener noreferrer" className="socialNav">
                            <FontAwesomeIcon size="lg" icon={['fab', 'linkedin']} /> </a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
)}

const HeaderWithRouter = withRouter(Header);

export default function App() {
  return (
        <div className="container-fluid d-flex flex-column" style={{height: "100vh"}}>
          <Router>
              <HeaderWithRouter/>
              <Switch>
                  <Route exact path="/">
                      <Redirect to="/home" />
                  </Route>
                  <Route path='/home' exact component={Home} />
                  <Route path='/portfolio' component={Portfolio} />
                  <Route path='/aboutme' component={AboutMe} />
                  <Route path='/contact' component={Contact} />
              </Switch>
          </Router>
        </div>
  );
}
