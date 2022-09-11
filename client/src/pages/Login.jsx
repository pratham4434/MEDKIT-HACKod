import React, { useState, useEffect } from "react";
import { gapi } from "gapi-script";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { ImKey } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../assets/login.gif";
import { GoogleLogin } from "react-google-login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute } from "../routes/routes";

const Login = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [isSignIn, setIsSignIn] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [ischecked, setIsChecked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidate()) {
      console.log("Validate");
      if (ischecked) {
        localStorage.setItem("login-details", JSON.stringify(values));
      } else {
        sessionStorage.setItem("login-details", JSON.stringify(values));
      }
      
      const data = axios.post(`${loginRoute}`,values).then((dataa)=>{
        console.log(dataa)
      })
      localStorage.setItem('id' , JSON.stringify(data))
      // navigate("/");
    }
  };

  const clientId =
    "366179201607-v28snk31ertrhd5frai56heosiprpgue.apps.googleusercontent.com";

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  }, []);

  const onSuccess = (res) => {
    setProfile(res.profileObj);
    setIsSignIn(true);
    return;
  };

  const onFailure = (err) => {
    console.log("failed:", err);
  };

  if (isSignIn) {
    sessionStorage.setItem("google-SignIn", JSON.stringify(profile));
    navigate("/verified");
  }

  const customStyle = {
    fontSize: "1.5rem",
    display: "flex",
    backgroundColor: "white",
    justifyContent: "center",
    color: "black",
    boxShadow: "-4px 5px 16px #00000085",
    borderRadius: "10px",
    alignItems: "center",
  };
  const googlebtnlogo = {
    fontSize: "1.8rem",
    marginRight: "1rem",
  };
  const toastOptions = {
    theme: "dark",
    draggable: "true",
    position: "bottom-right",
    closeOnClick: true,
    pauseOnHover: true,
    autoClose: "5000",
    hideProgressBar: "false",
  };

  const handleValidate = () => {
    const { password, email } = values;

    if (password === "" && email === "") {
      toast.warning("Please Fill this up to login", toastOptions);
      return false;
    }
    if (password === "" || email === "") {
      if (password === "")
        toast.warning("Please enter the password", toastOptions);

      if (email === "") toast.warning("Please enter the email", toastOptions);

      return false;
    }
    if (password.length < 8) {
      toast.error("Password must be 8 character long", toastOptions);
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handlechecked = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <>
      <Container>
        <div className="image">
          <img src={LoginImage} alt="" />
        </div>
        <div className="info">
          <div className="box">
            <h1>
              Welcome to <span>MedKit!</span>
            </h1>
            <GoogleLogin
              render={(renderProps) => (
                <button onClick={renderProps.onClick} style={customStyle}>
                  <div className="logo" style={googlebtnlogo}>
                    <FcGoogle />
                  </div>
                  <div className="textgoogle">Sign in with Google</div>
                </button>
              )}
              clientId={clientId}
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
            <div className="lines">
              <div className="line" id="first"></div>
              <p>OR</p>
              <div className="line" id="second"></div>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="iinput">
                <div className="logoo">
                  <MdEmail />
                </div>
                <div className="iinputdiv">
                  <p>Email</p>
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="iinput">
                <div className="logoo">
                  <ImKey />
                </div>
                <div className="iinputdiv">
                  <p>Password</p>
                  <input
                    type="password"
                    name="password"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="details">
                <div className="checckbox">
                  <input
                    type="checkbox"
                    name="checkbox"
                    onChange={(e) => handlechecked(e)}
                  />
                  <p>Remember Me</p>
                </div>
                <Link to="/">Forgot Password?</Link>
              </div>
              <button>Login</button>
            </form>
            <p>
              Didn't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </Container>
      <ToastContainer />
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: end;
  overflow: hidden;
  height: 100vh;
  .info {
    margin-left: -5rem;
    width: 100%;
    height: 100%;
    background: #ffffff;
    box-shadow: 0px 0px 20px rgb(0 0 0 / 58%);
    border-radius: 54px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    .box {
      width: 80%;
      display: block;
      margin: auto;
      h1 {
        width: 43%;
        font-weight: bold;
        font-family: inherit;
        margin-top: 3%;
        span {
          font-weight: bolder;
        }
      }
      .googlebtn {
        background-color: rgb(255, 255, 255);
        display: inline-flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.54);
        padding: 0px;
        border-radius: 2px;
        border: 1px solid transparent;
        font-weight: 500;
        font-family: Roboto, sans-serif;
        justify-content: center;
        font-size: 1rem;
      }
      .lines {
        display: flex;
        align-items: center;
        margin-top: 3%;
        #first {
          margin-right: 1rem;
        }
        #second {
          margin-left: 1rem;
        }
        .line {
          width: 100%;
          height: 0px;
          background-color: black;
          border: 1px solid black;
        }
        p {
          margin-top: 14px;
        }
      }
      .iinput {
        display: flex;
        background-color: #d4edf780;
        height: 4rem;
        border-radius: 10px;
        padding: 1rem;
        margin-top: 2%;
        .logoo {
          font-size: 1.5rem;
        }
        .iinputdiv {
          display: flex;
          padding: 5px 10px;
          margin-top: -11px;
          flex-direction: column;
          align-items: flex-start;
          p {
            margin: 0;
            font-size: 0.8rem;
          }
          input {
            width: 42vw;
            background-color: #d4edf700;
            font-weight: 700;
            font-size: 1.1rem;
            border: 0;
            color: black;
          }
        }
      }
      .details {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        margin-top: 2%;
        .checckbox {
          display: flex;
          p {
            padding: 4px;
            margin-bottom: 1rem;
            margin-top: 14px;
            padding-left: 0.5rem;
          }
        }
      }
      button {
        width: 100%;
        height: 4rem;
        font-size: 1.5rem;
        margin-top: 2%;
        background-color: #5c5cc5;
        border-radius: 20px;
        cursor: pointer;
        color: white;
        border: none;
      }
      a {
        text-decoration: none;
      }
    }
    p {
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
  }
  .image {
    width: 100%;
    box-sizing: border-box;
    img {
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (max-width: 660px) {
    .image {
      img {
        height: 68%;
        margin-top: 23%;
      }
    }
    .info {
      .box {
        h1 {
          width: 100%;
          margin-top: 10%;
          margin-bottom: 10%;
        }
        .logo {
          font-size: 1.5rem;
          margin-top: -0.5rem;
          margin-right: 1rem;
        }
        .textgoogle {
          font-size: 1rem;
        }
        a {
          font-size: 0.8rem;
        }
        .details {
          justify-content: space-evenly;
          .checckbox {
            p {
              font-size: 0.8rem;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 490px) {
    .image {
      img {
        height: 45%;
        margin-top: 50%;
      }
    }
    .info {
      .box {
        .textgoogle {
          font-size: 0.8rem;
        }
        button {
          height: 3rem;
          font-size: 1rem;
        }
        .logo {
          font-size: 1rem;
        }
        .details {
          .checckbox {
            p {
              font-size: 0.7rem;
            }
          }
        }
        a {
          font-size: 0.7rem;
        }
      }
      p {
        font-size: 0.8rem;
      }
    }
  }
  @media screen and (max-width: 390px) {
    grid-template-columns: 0% 100%;
  }
`;

export default Login;
