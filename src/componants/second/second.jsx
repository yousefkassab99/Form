import React from "react";
import "./second.css";
import arr from "../../assets/icons/arr.png";
import google from "../../assets/icons/google.png";

function Second() {
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
        <div>
          <span className="spanarr">
            <img src={arr} className="arr" />
          </span>
          <span className="arrtext">Back</span>
        </div>
        <div className="textpar">
          <h1>Register Individual Account!</h1>
          <p>
            For the purpose of gamers regulation, your details are required.
          </p>
        </div>
      </div>

      <form className="formpu" onSubmit={handleSubmit}>
        <label className="e1">Email address*</label>
        <input
          type="Email"
          placeholder="Enter email address"
          onChange={handleChange}
          name="Email"
          value={formData.Email}
        />
        <label className="e1">Create password*</label>
        <input
          type="password"
          placeholder="password"
          onChange={handleChange}
          name="password"
          value={formData.password}
        />
        <label className="not">Not bad but you know you can do it better</label>
        <br />
        <label className="e1">Repeat password*</label>
        <input
          type="password"
          placeholder="Repeat password"
          onChange={handleChange}
          name="Repeatpassword"
          value={formData.Repeatpassword}
        />
        <input
          type="checkbox"
          id="isFriendly"
          checked={formData.isFriendly}
          onChange={handleChange}
          name="isFriendly"
          className="ch"
        />
        <label >I agree to terms & conditions</label>

        <br />
        <button>Register Account</button>
      </form>

      <div className="rec">
        <img src={google} className="goimg" />
        <span className="logspan">login</span>
      </div>
    </div>
  );
}

export default Second;
