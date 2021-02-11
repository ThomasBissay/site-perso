import '../styles/globals.css'
import React from "react";
import NavBar from "../component/NavBar";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
      <div className="container-fluid d-flex flex-column" style={{height: "100vh"}}>
          <Head>
              <title>Thorek's photo</title>
          </Head>
        <NavBar/>
      <Component {...pageProps} />
      </div>
  )
}

export default MyApp
