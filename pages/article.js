import React, {useEffect, useState} from "react";
import firebase from "../firebase/firebaseConf";
import {useRouter} from "next/router";

function Article() {

    const [data, setData] = useState([]);
    const [images, setImages] = useState([]);
    const location = useRouter();

    useEffect(() => {
        if (location) {
            let id = location.query.id;
            firebase.storage().ref().child('Articles/').list().then(result => {
                if (result.items[id]) {
                    firebase.storage().ref().child(result.items[id].fullPath).getDownloadURL().then((url) => {
                        fetch(url)
                            .then(response => response.json())
                            .then(content => {
                                setData(content);
                            })
                            .catch(error => console.error(error));
                    })
                }
            })
        }
    },[location])

    useEffect(() => {
        if (data) {
            if (data.img) {
                data.img.map((item) => {
                    if (item !== "") {
                        firebase.storage().ref().child(item).getDownloadURL().then((url) => {
                            setImages(images => [...images, url]);
                        })
                    }
                })
            }
        }
    },[data])

    const handleContent = () => {
        if (data.text) {
            return (
                data.text.map((item, id) => (
                    <div key={id}>
                        {images[id] ?  <img src={images[id]} className="img-fluid bio-img" alt=""/> : ''}
                        <p className="text-justify mt-4 mb-4 bio-text">{item}</p>
                    </div>
                )
            ))
        }
    }

    const Article = () => {
        if (data.title) {
            return (
                <div className="mt-3 mb-3 col-xl-5 col-lg-6 col-md-8 col-sm-10 col-xs-12">
                    <h2 className="text-dark">{data.title}</h2>
                    <div className="d-inline-flex">
                        <h6 className="text-dark">by {data.author}&nbsp;</h6>
                        <h6 className="text-dark">/ {data.createdAt}</h6>
                    </div>
                    {handleContent()}
                </div>
            )
        }
        else {
            return (
                <div className="mt-5">
                    <h2 className="text-dark">Can't get article</h2>
                </div>
            )
        }
    }

    return (
        <div className="container-fluid bgClean">
            <div className="row justify-content-center text-center">
                {Article()}
            </div>
        </div>
    );
}

export default Article;