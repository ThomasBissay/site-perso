import React, {useEffect, useState} from "react";
import firebase from "../firebase/firebaseConf";

function Blog () {
    const [data, setData] = useState([]);

    useEffect( () => {
        setData([])
        firebase.storage().ref().child('Articles/').list().then(result => {
            // Loop over each item
            result.items.forEach(articles => {
                firebase.storage().ref().child(articles.fullPath).getDownloadURL().then((url) => {
                    console.log(url);
                    setData(data => [...data, url]);
                })
            });
        })
    },[])

    const Articles = () => {
        if (data.length > 1) {
            data.map((item, id) => (
                <div className="card border-0">
                    <img className="card-img-top" key={id} src={item} alt=""/>
                </div>
            ))
        }
        else {
            return (
                <h2 className="text-dark">No articles yet</h2>
            )
        }
    }

    return (
        <div className="row bgClean justify-content-center text-center">
            <div className="col-xl-3 col-lg-5 col-md-8 col-sm-10 col-xs-12 align-self-center">
                {Articles()}
            </div>
        </div>
    );
}

export default Blog;