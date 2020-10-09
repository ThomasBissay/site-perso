import React, {useCallback, useEffect, useState} from "react";
import firebase from "../firebase/firebaseConf";
import ImageViewer from "react-simple-image-viewer";

function Gallery (props) {
    const country = props.country;
    const [data, setData] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback(index => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    useEffect( () => {
        setData([])
        firebase.storage().ref().child('Images/' + country).list().then(result => {
            // Loop over each item
            result.items.forEach(pics => {
                firebase.storage().ref().child(pics.fullPath).getDownloadURL().then((url) => {
                    console.log(url);
                    setData(data => [...data, url]);
                })
            });
        })
    },[country])

    return (
        <div className="row">
            {data.map((item, id) => (
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <img className="galleryImg img-fluid" onClick={() => openImageViewer(id)} key={id} src={item} alt=""/>
                </div>
            ))}

            {/* Image viewer */}
            {isViewerOpen && (
                <ImageViewer
                    src={data}
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

export default Gallery;