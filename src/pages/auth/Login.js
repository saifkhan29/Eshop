import React from 'react'
import styles from './Auth.module.scss'
import loginImg from '../../assets/login.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
            <img src={loginImg} alt="login Image" width="400" />
        </div>
        <div className={styles.form}>
            <h2>Login</h2>
            <form>
                <input type="text" placeholder='Email' required />
                <input type="password" placeholder='Password' required />
                <button className='--btn --btn-primary --btn-block'>Login</button>
                <div className={styles.links}>
                    <Link to="/reset" >Reset Password</Link>

                </div>

            </form>

        </div>

    </section>
  )
}

export default Login