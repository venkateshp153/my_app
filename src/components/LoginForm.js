import React,{useState} from "react";
import "./LoginForm.css";

const LoginForm = () => {
    const [showPopup,setShowPopup] = useState('hide')
    const popup = () => {
        setShowPopup("login-popup")
        setTimeout(()=>setShowPopup("hide"),3000)
    }

  return (
    <div className="cover">
      <h1>Login</h1>
      <input type="text" placeholder="username/email" />
      <input type="password" placeholder="password" />
      <div className="login-btn" onClick={popup}>Login</div>
      <div className={showPopup}>
        <h4>Login Failed!</h4>
        <p>incorrect credential</p>
      </div>
      <p className="text">Or login using</p>
      <div className="alt-login">
        <div className="facebook"></div>
        <div className="google"></div>
      </div>
    </div>
  );
};
export default LoginForm;
