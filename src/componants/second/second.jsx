import React from "react";
import "./second.css";
import arr from "../../assets/icons/arr.png";
import goo from "../../assets/icons/goo.png"
import In from "../../assets/icons/In.png"
import Tw from "../../assets/icons/Tw.png"
import Gi from "../../assets/icons/Gi.png"
import {NavLink} from 'react-router-dom'


   

function Second() {
 
  const [formData, setFormData] = React.useState({
    Email: "",
    password: ""
  
  });

  console.log(formData.comments);

  function handleChange(event) {
    setFormData((prevFormData) => {
      const { name, value, type, checked } = event.target;
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    //    submitToApi(formData)
    console.log(formData);
  }

  return (
    <div >
      <div>
        <div>
          <span className="spanarr">
            <img src={arr} className="arr" />
          </span>
   
          <NavLink to="/" className="arrtext">
          Back
          </NavLink>
        </div>
        <div className="textpar">
          <h1>Join the game!</h1>
          <p>
          Go inside the best gamers social network!
          </p>
        </div>
        <div className="rec">
        <div className="loginButton google" >
            <img src={goo} alt="" className="goimg" />
           
          </div>
          <div className="loginButton facebook" >
            <img src={Tw} alt="" className="goimg" />
           
          </div>
          <div className="loginButton github">
            <img src={Gi} alt="" className="goimg" />
         
          </div>
          <div className="loginButton github" >
            <img src={In} alt="" className="goimg" />
          
          </div>
    
      </div>
      </div>

<div className="form">
      <form className="formpu" onSubmit={handleSubmit}>
       <div className="e1"> <label >Your email</label></div>
        <input
          type="Email"
          placeholder="Write your email"
          onChange={handleChange}
          name="Email"
          value={formData.Email}
        />
        <div className="e1">
        <label className="e1">Enter your password</label>
        </div>
        <input
        
        type="password" 
        placeholder="•••••••••" 
         
          onChange={handleChange}
          name="password"
          value={formData.password}
        />
        
        
       

        <br />
        <div className="e11">


        <NavLink to="/Page3" >
      
        <button>Register Account</button>
          </NavLink>
        </div>
      
      </form>
      </div>
     
    </div>
  );
}

export default Second;
