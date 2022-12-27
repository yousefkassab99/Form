import React from "react";
import "./second.css";
import arr from "../../assets/icons/arr.png";
import google from "../../assets/icons/google.png";
import In from "../../assets/icons/In.png"
import Tw from "../../assets/icons/Tw.png"
import Gi from "../../assets/icons/Gi.png"

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
          <span className="arrtext">Back</span>
        </div>
        <div className="textpar">
          <h1>Join the game!</h1>
          <p>
          Go inside the best gamers social network!
          </p>
        </div>
        <div className="rec">
        <img src={google} className="goimg" />
        <img src={Tw} className="goimg" />
        <img src={In} className="goimg" />
        <img src={Gi} className="goimg" />
        
      </div>
      </div>

      <form className="formpu" onSubmit={handleSubmit}>
        <label className="e1">Your email</label>
        <input
          type="Email"
          placeholder="Write your email"
          onChange={handleChange}
          name="Email"
          value={formData.Email}
        />
        <label className="e1">Enter your password</label>
        <input
          type="password"
          placeholder="password"
          onChange={handleChange}
          name="password"
          value={formData.password}
        />
        
       

        <br />
        <button>Register Account</button>
        <label >I agree to terms & conditions</label>
      </form>

     
    </div>
  );
}

export default Second;
