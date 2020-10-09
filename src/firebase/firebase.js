import firebase from "./firebaseConf";

export const getImages = (country, id) => {
    let images = [];
    firebase.storage().ref().child('Images/' + country).list().then(result => {
        // Loop over each item
        result.items.forEach(pics => {
            firebase.storage().ref().child(pics.fullPath).getDownloadURL().then((url) => {
                console.log(url);
                setData(data[id])
            })
        });
    })
}

export const getAllImages = () => {
    let allImages = [];

    allImages = [...allImages, getImages("France")];
    return allImages;
}