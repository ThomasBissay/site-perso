import '../styles/globals.css'
import React from "react";
import NavBar from "../component/NavBar";

function MyApp({ Component, pageProps }) {
  return (
      <div className="container-fluid d-flex flex-column" style={{height: "100vh"}}>
        <NavBar/>
      <Component {...pageProps} />
      </div>
  )
}

export default MyApp
