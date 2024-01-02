import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Body from "../Body";
import Navbar from "../Navbar/Navbar";
import { ArrowCircleDownOutlined } from "@mui/icons-material";

function Home() {
  useEffect(() => {
    let sections = document.querySelectorAll("section");

    window.onscroll = () => {
      sections.forEach((sec, index) => {
        let top = window.scrollY;
        let offset;
        if (index === 0) {
          offset = sec.offsetTop - 300;
        } else {
          offset = sec.offsetTop - 600;
        }

        let height = sec.offsetHeight;
        if (top >= offset && top < offset + height) {
          sec.classList.add("show-animate");
        } else if (top < offset - height / 1.5) {
          sec.classList.remove("show-animate");
        }
      });
    };

    const scrollButton = document.getElementById("scrollButton");
    const scrollTarget = document.getElementById("section-1");

    scrollButton.addEventListener("click", () => {
      scrollButton.style.display = "none";
      scrollTarget.scrollIntoView({
        behavior: "smooth",
      });
    });

    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        scrollButton.style.display = "none";
      } else {
        scrollButton.style.display = "block";
      }
    });
  }, []);
  return (
    <div>
      <Navbar />

      <div id="start">
        <img className="start-image" src="/images/logo.png" />
        <ArrowCircleDownOutlined id="scrollButton" className="" />
      </div>

      <Body />

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
