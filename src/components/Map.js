import React from "react";
import { VectorMap } from "react-jvectormap";

const mapData = {
    CN: 100000,
    IN: 9900,
    SA: 86,
    EG: 70,
    SE: 0,
    FI: 0,
    FR: 0,
    US: 20
};

const handleClick = (e, countryCode) => {
    console.log(countryCode);
};

const Map = () => {
    return (
        <div>
            <VectorMap
                map={"asia_mill"}
                backgroundColor="transparent"
                zoomOnScroll={false}
                containerStyle={{
                    width: "100%",
                    height: "520px"
                }}
                onRegionClick={handleClick} //gets the country code
                containerClassName="map"
                regionStyle={{
                    initial: {
                        fill: "#8d8484",
                        "fill-opacity": 0.9,
                        stroke: "none",
                        "stroke-width": 0,
                        "stroke-opacity": 0
                    },
                    hover: {
                        "fill-opacity": 0.8,
                        cursor: "pointer"
                    },
                    selectedHover: {}
                }}
                regionsSelectable={true}
                series={{
                    regions: [
                        {
                            values: mapData, //this is your data
                            scale: ["#bf0101"], //your color game's here
                            normalizeFunction: "polynomial"
                        }
                    ]
                }}
            />
        </div>
    );
};

export default Map;