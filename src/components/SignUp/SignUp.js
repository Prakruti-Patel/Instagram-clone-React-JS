import React from "react";
import "./SignUp.css";
import insta_logo from "../../images/logoinsta.png";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import appstore from "../../images/app.png";
import playstore from "../../images/play.png";

const signup = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={4}></Grid>
        <Grid item xs={6}>
          <div className="signpage_main">
            <div>
              <div className="signpage_right">
               
              <img className="loginpage_logo" src={insta_logo} />
              <div className="toptext">
              Sign up to see photos and videos from your friends.
                </div>
                <div className="login_or_div">
                  <div className="login_divider"></div>
                 
                  <div className="login_divider"></div>
                </div>
                <div className="loginpage_signin">
                  <input
                    className="loginpage_text"
                    type="text"
                    placeholder="Email"
                  />
                  <input
                    className="loginpage_text"
                    type="text"
                    placeholder="Fullname"
                  />
                  <input
                    className="loginpage_text"
                    type="text"
                    placeholder="Username"
                  />
                  <input
                    className="loginpage_text"
                    type="password "
                    placeholder="Password"
                  />
                  <div className="extra_text">
                    People who use our service may have uploaded your contact information to Instagram. Learn More
                    </div>
                  <div className="extra_text">By signing up, you agree to our Terms , Data Policy and Cookies Policy .</div>  
                  <button className="loginpage_button">Sign Up</button>
                </div>
               
               
              </div>

              <div className="loginpage_rightbtm">Don't have an account? {" "}
              <Link className="signup_text" to="/">
                  <span>Log In</span>
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
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  );
};

export default signup;