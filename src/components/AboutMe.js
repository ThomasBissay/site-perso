import React, { useState, useCallback } from 'react';
import ImageViewer from "react-simple-image-viewer";

function AboutMe() {

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const images = [
       "https://i.ibb.co/Xtx7QvZ/profil2.jpg",
        "https://i.ibb.co/BtWz3K4/stuff.jpg",
    ];

    const openImageViewer = useCallback(index => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <div className="mx-auto bgClean row no-gutters justify-content-center flex-row-reverse ">

            {/* "About Me" text */}
            <div className="col-sm-11 col-md-8 col-lg-5 col-xl-4 align-self-center">
                <div className="bio">
                    <h2 className="bio-title">About me</h2>
                    <p className="bio-subtitle">I'm a junior web and mobile developer (mainly react & react native).</p>
                    <p className="bio-text">After an economic and social baccalaureate obtained in 2016 in Deauville, Normandy,
                        I decided to continue my studies. Not really knowing what course to take but having an appetite for new technologies,
                        I joined an IT school: Epitech.
                    </p>
                    <p className="bio-text">Based on a project system, this school allowed me to acquire the basics of programming and project management,
                        as well as to do several internships in order to specialize myself.
                    </p>
                    <p className="bio-text">In my 4th year, I had the opportunity to spend two semesters in a university abroad. After careful consideration,
                        I decided to go to South Korea, taking courses in video game development at Keimyung University, Daegu.
                    </p>
                    <p className="bio-text">
                        It was during this trip and thanks to some great encounters that I discovered photography. From then on, I took advantage of
                        every moment of my travels to see my environment with a new eye, trying to improve my knowledge of photography
                        and apply the advices I was offered.
                    </p>
                    <p className="bio-text">It has thus become for me a unique way to keep memories of my travels and to share them.</p>
                </div>
            </div>

            {/* "About Me" pictures */}
            <div className="col-sm-10 col-md-4 col-lg-4 col-xl-2 align-self-center">
                <div className="bio">
                    <img src={images[0]} onClick={() => openImageViewer(0)} className="img-fluid bio-img" alt=""/>
                    <img src={images[1]} onClick={() => openImageViewer(1)} className="img-fluid bio-img" alt="My equipment"/>
                </div>
            </div>

            {/* Image viewer */}
            {isViewerOpen && (
                <ImageViewer
                    src={images}
                    currentIndex={currentImage}
                    onClose={closeImageViewer}
                    backgroundStyle={{
                        backgroundColor: "rgba(0,0,0,1)"
                    }}
                />
            )}

        </div>
    );
}

export default AboutMe;