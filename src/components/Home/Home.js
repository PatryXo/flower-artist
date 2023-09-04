import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Body from "../Body";
import Navbar from "../Navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />

      <div
        style={{
          background: "rgb(255,213,213)",
          background:
            "linear-gradient(90deg, rgba(255,213,213,1) 47%, rgba(255,238,238,1) 61%, rgba(255,255,255,1) 100%)",
        }}
      >
        <img
          style={{ width: "100vw", height: "100vh" }}
          src="/images/logo.png"
        />
      </div>

      {/* <Body /> */}

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
