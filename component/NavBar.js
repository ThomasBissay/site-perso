import React, {useState} from "react";
import {Navbar, Nav} from "react-bootstrap";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ActiveLink from "./Link"

library.add(fab, faCommentDots)

function NavBar () {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className="row">
            <Navbar className="navbarDark navbar-dark header text-center" expanded={expanded} expand="lg">
                <Navbar.Brand href="/">
                    <img src='/logo.png' width="140" height="45" alt=""/>
                </Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-3" defaultActiveKey="/" >
                        <ActiveLink activeClassName="underline" href="/" onClick={() => setExpanded(false)}>
                            <a className="linkNav">Home</a></ActiveLink>
                        <ActiveLink activeClassName="underline" href="/blog" onClick={() => setExpanded(false)}>
                            <a className="linkNav">Blog</a></ActiveLink>
                        <ActiveLink activeClassName="underline" href="/portfolio" onClick={() => setExpanded(false)}>
                            <a className="linkNav">Portfolio</a></ActiveLink>
                        <ActiveLink activeClassName="underline" href="/aboutme" onClick={() => setExpanded(false)}>
                            <a className="linkNav">Bio</a></ActiveLink>
                        <ActiveLink activeClassName="underline" href="/contact" onClick={() => setExpanded(false)}>
                            <a className="linkNav">Contact</a></ActiveLink>
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
    )
}

export default NavBar;