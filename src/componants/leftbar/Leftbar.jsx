
  import React from "react";
  import "./leftbar.css";
  import g from "../../assets/icons/g.png"
  import h from "../../assets/icons/h.png"
  import ss from "../../assets/icons/ss.png"
  import p from "../../assets/icons/p.jpg"
  import m from "../../assets/icons/m.png"
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
  