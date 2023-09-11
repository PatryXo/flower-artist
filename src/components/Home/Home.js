import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Body from "../Body";
import Navbar from "../Navbar/Navbar";
import { Button } from "@mui/material";
import { ArrowCircleDownOutlined, ArrowDropDownCircle, ArrowDropDownCircleOutlined } from "@mui/icons-material";

function Home() {
  useEffect(() => {
    let sections = document.querySelectorAll("section");

    window.onscroll = () => {
      sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 250;

        let height = sec.offsetHeight;
        if (top >= offset && top < offset + height) {
          sec.classList.add("show-animate");
        } else if (top < offset - height / 1.5) {
          sec.classList.remove("show-animate");
        }
      });
    };

    const scrollButton = document.getElementById('scrollButton');
    const scrollTarget = document.getElementById('section-1');

    scrollButton.addEventListener('click', () => {
      scrollButton.style.display = 'none'
      scrollTarget.scrollIntoView({
        behavior: 'smooth' // Wygładzone przewijanie
      });

      
    });


    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        scrollButton.style.display = 'none'; // Pokaż przycisk, gdy użytkownik przewinie stronę w dół
      } else {
        scrollButton.style.display = 'block'; // Ukryj przycisk, gdy użytkownik jest na samej górze strony
      }
    });
  }, []);
  return (
    <div>
      <Navbar />

      <div
      id="start"
      className=""
        style={{
          background: "rgb(255,213,213)",
          background:
            "linear-gradient(90deg, rgba(255,213,213,1) 47%, rgba(255,238,238,1) 61%, rgba(255,255,255,1) 100%)",
        }}
      >
        <img
        className=""
          style={{ width: "100%", height: "100vh" }}
          src="/images/logo.png"
        />
        <ArrowCircleDownOutlined id="scrollButton" className=""/>
      </div>

      <Body />

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
