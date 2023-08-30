import React from "react";
import styles from "./Auth.module.scss";
import resetImg from "../../assets/forgot.png";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Card from "../../components/card/Card";

const Reset = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={resetImg} alt="resetImage" width="400" />
      </div>
        <Card>
      <div className={styles.form}>
        <h2>Reset Password</h2>
          <form>
            <input type="text" placeholder="Email" required />
            <button className="--btn --btn-primary --btn-block">Login</button>
            
          </form>
        

   
        <span className={styles.register}>
          <p className="w-100 d-flex justify-content-between align-items-center">
          <Link to="/login">- Login</Link>
            <Link to="/register">- Register</Link>
          </p>
        </span>
      </div>
      </Card>
    </section>
  )
}

export default Reset