import React, {useState} from 'react';
import {Dropdown} from "react-bootstrap";
import Gallery from "../component/Gallery";

const galleryTitle = (country, type) => {
    let title = "Gallery";
    if (country !== "all")
        title += ": " + country;
    return title;
}

function Portfolio() {

    const [country, setCountry] = useState("Japan");

    return (
        <div className="bgClean">

            {/* Filters bar */}
            <div className="row">
                <div className="col-8">
                    <div className="filterBarElem">
                        <p className="portfolio-title">
                            {galleryTitle(country)}
                        </p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="btn-group float-right filterBarElem">
                        <div className="dropdownContainer">
                            <Dropdown>
                                <Dropdown.Toggle variant="danger" style={{backgroundColor: "black", border: 0}} id="dropdown-country">
                                    Country
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => setCountry('Japan')}>Japan</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setCountry('France')}>France</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setCountry('South Korea')}>South Korea</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery */}
            <Gallery country={country}/>

        </div>
    );
}

export default Portfolio;