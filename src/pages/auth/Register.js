import React from "react";
import styles from "./Auth.module.scss";
import loginImg from "../../assets/login.png";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";

const Register = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <h2>Register</h2>
          <form>
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button className="--btn --btn-primary --btn-block">
              Register
            </button>
          </form>

          <span className={styles.register}>
            <p>
              Already have an account?<Link to="/login">Login</Link>
            </p>
          </span>
        </div>
      </Card>
      <div className={styles.img}>
        <img src={loginImg} alt="loginImage" width="400" />
      </div>
    </section>
  );
};

export default Register;
