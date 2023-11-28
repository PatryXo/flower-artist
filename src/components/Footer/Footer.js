import React from "react";
import { Button, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import {
  Facebook,
  Email,
  PhoneInTalk,
  Business,
  FmdGood,
  Google,
  Instagram,
} from "@mui/icons-material";

function Footer() {

     const navigate = useNavigate()

    


  return (
    <div className="footer">
      <div className="footer-body">
        <div className="footer-body-element">
          <img className="logo" src="/images/logo-szkola-removebg-preview.png" />
        </div>

        <div className="footer-contact">
     
          <Typography className="line">
            <Business /> Władysława Paszkowskiego 3, 15-337 Białystok{" "}
          </Typography>
          <Typography className="line">
            <PhoneInTalk /> 534 275 146
          </Typography>
          <Typography className="line">
            <Email /> szkola.flowerartist@gmail.com
          </Typography>
        </div>

        <div className="footer-open-hours">
          <h3>Godziny otwarcia</h3>
          <Typography>Sob-Ndz: 09:00 - 17:00</Typography>
         
        </div>

        <div className="footer-social-media">
          <Tooltip  arrow title="Facebook">
            <Facebook sx={{ width: "42px", height: "42px" }} onClick={()=>{window.open("https://www.facebook.com/profile.php?id=61550539516017","_blank")}}/>
          </Tooltip>
          <Tooltip arrow title="Instagram">
            <Instagram sx={{ width: "42px", height: "42px" }} onClick={()=>{window.open("https://www.instagram.com/do_flowerartist/","_blank")}}/>
          </Tooltip>
          <Tooltip arrow title="Mapa Google">
            <FmdGood sx={{ width: "42px", height: "42px" }} onClick={()=>{window.open("https://tiny.pl/cdmtd","_blank")}}/>
          </Tooltip>
          <Tooltip arrow title="Wizytówka Google">
            <Google sx={{ width: "42px", height: "42px" }} onClick={()=>{window.open("https://tiny.pl/c1mnp","_blank")}}/>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default Footer;
