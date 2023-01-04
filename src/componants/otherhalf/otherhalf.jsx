import React from "react";
import "./otherhalf.css";
import arr from "../../assets/icons/arr.png";
import goo from "../../assets/icons/goo.png"
import * as yup from 'yup';
import { Formik } from "formik";
import {BrowserRouter, Route, Routes,NavLink} from 'react-router-dom'

function Otherhalf() {

  // let schema = yup.object().shape({
  //   email: yup.string().email(),
  //   password: yup.number().required().min(8) .matches(
  //     "^(?=.*[A-Z])*[a-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
  //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  
  //   ),
  //   Repeatpassword: yup.number().required().oneOf([yup.ref("password"), null], "Passwords must match"),
  // });





  const [formData, setFormData] = React.useState({
    Email: "",
    password: "",
    Repeatpassword: "",
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
    <div>
      <div>
        {/* <div>
          <span className="spanarr">
            <img src={arr} className="arr" />
          </span>
          <span className="arrtext">Back</span>
        </div> */}
        <div className="textpar">
          <h1>Register Individual Account!</h1>
          <p>
            For the purpose of gamers regulation, your details are required.
          </p>
        </div>
      </div>

      <form className="formpu" onSubmit={handleSubmit}>
      <div className="r1">
        <label className="e1">Email address*</label>
        </div>
        <input
          type="Email"
          placeholder="Enter email address"
          onChange={handleChange}
          name="Email"
          value={formData.Email}
        />
          <div className="r1">
        <label className="e1">Create password*</label>
        </div>
        <input
          type="password"
          placeholder="password"
          onChange={handleChange}
          name="password"
          value={formData.password}
        />
         <div className="r2">
        <label className="not">Not bad but you know you can do it better</label>
        </div>
        <br />
        <div className="r1">
        <label className="e1">Repeat password*</label>
        </div>
        <input
          type="password"
          placeholder="Repeat password"
          onChange={handleChange}
          name="Repeatpassword"
          value={formData.Repeatpassword}
        />

<div className="r1">   
        <input
          type="checkbox"
          id="isFriendly"
          checked={formData.isFriendly}
          onChange={handleChange}
          name="isFriendly"
          className="ch"
        />
        
        <label >I agree to terms & conditions</label>
</div>
        <br />

        <div className="r1">
        <button>Register Account</button>
        </div>
      </form>

      <div className="rec">
        <img src={goo} className="goimg" />
        
        <NavLink to="/Page2" className="logspan">
        login
        </NavLink>
      </div>
      
    </div>
    
  );
}

export default Otherhalf;
