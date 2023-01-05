
  import React from "react";
  import "./leftbar.css";
  import g from "../../assets/icons/LogoGame.png"
  import h from "../../assets/icons/Like.png"
  import ss from "../../assets/icons/Setting.png"
  import p from "../../assets/icons/Puzzle.png"
  import m from "../../assets/icons/Moon.png"
  import su from "../../assets/icons/su.webp"
  export default function Leftbar() {
    return (
      <div className="leftbar">
        <div className="leftbarWrapper">
       
          
        <span  className="g"> <img src={g} width="50px"/></span>
        <div className="second-div">
          <span className="m"><img src={h}width="30px" /></span> 
          <span className="m"><img src={ss}width="30px"/></span> 
          <span className="m"><img src={p} width="30px"/></span> 
          </div>
          <div className="third-div">
          <span className="st1"><img src={m}width="30px" /></span>
          <span className="st2"><img src={su}width="30px" /></span> 
          </div>
        </div>
      </div>
    );
  }
  