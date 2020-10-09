import React, {useState} from 'react';
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
    const [expanded, setExpanded] = useState(false);
    return (
        <div className="row">
            <Navbar className="navbarDark navbar-dark header text-center" expanded={expanded} expand="lg">
                <Navbar.Brand href="/">
                    <img src={require('./images/LogoTB.png')} width="140" height="45" alt=""/>
                </Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-3" defaultActiveKey="/home" activeKey={location.pathname} >
                        <NavLink className="linkNav" activeClassName="underline" to="/home" onClick={() => setExpanded(false)}>Home</NavLink>
                        <NavLink className="linkNav" activeClassName="underline" to="/portfolio" onClick={() => setExpanded(false)}>Portfolio</NavLink>
                        <NavLink className="linkNav" activeClassName="underline" to="/aboutme" onClick={() => setExpanded(false)}>Bio</NavLink>
                        <NavLink className="linkNav" activeClassName="underline" to="/contact" onClick={() => setExpanded(false)}>Contact</NavLink>
                        <a href="https://www.instagram.com/thomasbissay/" target="_blank" rel="noopener noreferrer" className="socialNav"
                           onClick={() => setExpanded(false)}>
                            <FontAwesomeIcon size="lg" icon={['fab', 'instagram']}/></a>
                        <a href="https://www.linkedin.com/in/thomas-bissay" target="_blank" rel="noopener noreferrer" className="socialNav"
                           onClick={() => setExpanded(false)}>
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
            <Router basename="/">
                <HeaderWithRouter/>
                <Switch>
                    <Route exact path="/" component={Home}>
                        <Redirect to="/home"/>
                    </Route>
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/portfolio' component={Portfolio} />
                    <Route exact path='/aboutme' component={AboutMe} />
                    <Route exact path='/contact' component={Contact} />
                </Switch>
            </Router>
        </div>
    );
}
