import React, { Component } from "react";
import "./LoginPage.css";
import Grid from "@mui/material/Grid";
import insta_image from "../../images/9364675fb26a.svg";
import insta_logo from "../../images/logoinsta.png";
import appstore from "../../images/app.png";
import playstore from "../../images/play.png";
import { Link } from "react-router-dom";

const LoginPage = () => {

  // async function loginAction(params) {
  //   try {
  //     const resp = 
      
  //   } 
    // catch (error) {
      
    // }
  
  return (
    <div>
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <div className="loginpage_main">
            <div>
              <img src={insta_image} width="454px"/>
            </div>
            <div>
              <div className="loginpage_right">
                <img className="loginpage_logo" src={insta_logo} />
                <div className="loginpage_signin">
                  <input
                    className="loginpage_text"
                    type="text"
                    placeholder="Username or email"
                  />
                    <input
                    className="loginpage_text"
                    type="password "
                    placeholder="Password"
                  />
                  <Link to ="/home">
                  <button  className="loginpage_button">Log In</button>
                  </Link>  
                </div>
                <div className="login_or_div">
                  <div className="login_divider"></div>
                  <div className="login_or">OR</div>
                  <div className="login_divider"></div>
                </div>
                <a>
                <div className="login_forpassword">Forgot password?</div>
                </a>
              </div>

              <div className="loginpage_rightbtm">
                Don't have an account?{" "}
                <Link className="signup_text" to="/signup">
                  <span>Sign Up</span>
                </Link>
              </div>
              <div className="loginpage_rightbtmtext">Get the app.</div>
              <div className="loginpage_downloadbtn">
                <img className="download_button"src={appstore} width="136px"/>
                <img className="download_button"src={playstore} width="136px"/>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );

};

export default LoginPage;
