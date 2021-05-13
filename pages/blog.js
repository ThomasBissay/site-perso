import React, {useEffect, useState} from "react";
import firebase from "../firebase/firebaseConf";
import Link from "next/link";

function Blog () {
    const [data, setData] = useState([]);

    useEffect( () => {
        firebase.storage().ref().child('Articles/').list().then(result => {
            // Loop over each item
            result.items.forEach(articles => {
                firebase.storage().ref().child(articles.fullPath).getDownloadURL().then((url) => {
                    fetch(url)
                        .then(response => response.json())
                        .then(content => {
                            setData(data => [...data, content]);
                        })
                        .catch(error => console.error(error));
                })
            });
        })
    },[])

    const handleImg = (item, id) => {
        if (item.img[0] !== "") {
            if (item.url)
                return (<img src={item.url}
                             className="mt-3 mb-3 img-fluid bio-img col-xl-8 col-lg-9 col-md-10 col-sm-11 col-xs-12"
                             alt=""
                        />)
            else {
                firebase.storage().ref().child(item.img[0]).getDownloadURL().then((url) => {
                    let newData = [...data];
                    newData[id].url = url;
                    setData(newData);
                    return (<img src={url}
                                 className="mt-3 mb-3 img-fluid bio-img col-xl-8 col-lg-9 col-md-10 col-sm-11 col-xs-12"
                                 alt=""
                    />)
                })
            }
        }
    }

    const Articles = () => {
        if (data) {
            return (
                data.map((item, id) => (
                    <div key={id} className="border-bottom mt-3 mb-3 col-xl-7 col-lg-7 col-md-8 col-sm-10 col-xs-12">
                        <Link href={{pathname:"/article/", query: {id: id}}}>
                            <a style={{textDecoration: 'none'}}>
                                {handleImg(item, id)}
                                <h2 className="text-dark">{item.title}</h2>
                                <div className="d-inline-flex">
                                    <h6 className="text-dark">by {item.author}&nbsp;</h6>
                                    <h6 className="text-dark mb-4">/ {item.createdAt}</h6>
                                </div>
                            </a>
                        </Link>
                    </div>
                ))
            )
        }
        else {
            return (
                <div className="align-self-center">
                    <h2 className="text-dark">No articles yet</h2>
                </div>
            )
        }
    }

    return (
        <div className="container-fluid bgClean">
            <div className="row justify-content-center text-center">
                {Articles()}
            </div>
        </div>
    );
}

export default Blog;