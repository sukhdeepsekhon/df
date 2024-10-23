'use client'

import React, { useState, useEffect } from "react";

import user from "@/Registration/Images/User.svg";
import mail from "@/Registration/Images/Mail.svg";
import lock from "@/Registration/Images/Lock.svg";
import Image from "next/image";
import { useRouter } from "next/router";

// Function to return styles
const getStyles = () => ({
  body: {
    background: "#F8F8F8",
  },
  MainBody: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
    marginLeft: "50px",
    marginRight: "50px",
    flexDirection: "column",
  },
  NavBar: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "100%",
  },
  Left: {
    display: "flex",
    alignItems: "center",
  },
  Logo: {
    width: "50px",
    height: "46px",
    backgroundColor: "#F8F8F8",
  },
  LogoText: {
    color: "#1e1e1e",
    fontFamily: "Mluvka",
    fontSize: "25px",
    fontWeight: "800",
    margin: "0",
    marginLeft: "10px",
  },
  MidUl: {
    listStyleType: "none",
    display: "flex",
    gap: "50px",
  },
  MidA: {
    textAlign: "center",
    textDecoration: "none",
    fontSize: "17px",
    color: "#1e1e1e",
  },
  MidAActive: {
    color: "rgb(0, 0, 0)",
  },
  Right: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  Login: {
    backgroundColor: "#f8f8f8",
    border: "1px solid #1c1c1e",
    borderRadius: "10px",
    display: "flex",
    width: "75px",
    height: "30px",
    justifyContent: "center",
    alignItems: "center",
  },
  LoginText: {
    color: "#1e1e1e",
    fontFamily: "Mluvka",
    fontSize: "15px",
    fontWeight: "700",
    textDecoration: "none",
  },
  SFF: {
    display: "inline-flex",
    padding: "5px 16px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    background: "#1c1c1e",
  },
  SFFText: {
    color: "#fff",
    fontFamily: "Mluvka",
    fontSize: "15px",
    fontWeight: "700",
    textDecoration: "none",
  },
  MainLogin: {
    justifyContent: "center",
    margin: "5vh",
    display: "flex",
    width: "500px",
    height: "650px",
    flexShrink: "0",
    borderRadius: "40px",
    background: "#fff",
    boxShadow: "50px 50px 10px 5px rgba(0, 0, 0, 0.25)",
  },
  Interface: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  UserRound: {
    display: "flex",
    width: "100px",
    height: "100px",
    padding: "26px",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: "0",
    borderRadius: "100px",
    background: "#F2F2F7",
    marginBottom: "20px",
  },
  User: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
  },
  WB: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "30px",
  },
  inputGroup: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f7f8fc",
    borderRadius: "10px",
    padding: "12px 40px 13px 20px",
    marginBottom: "15px",
    boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  icon: {
    width: "20px",
    height: "20px",
    marginRight: "10px",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "none",
    backgroundColor: "transparent",
    outline: "none",
    fontSize: "16px",
    color: "#333",
  },
  submitBtn: {
    backgroundColor: "#4A90E2",
    color: "#fff",
    padding: "12px 20px",
    border: "none",
    borderRadius: "10px",
    width: "100%",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  submitBtnHover: {
    backgroundColor: "#357ABD",
  },
});

const Login = () => {
  const styles = getStyles();
  const [errorMessage, setErrorMessage] = useState('');
  const [isMounted, setIsMounted] = useState(false); // Track if the component is mounted

  useEffect(() => {
    setIsMounted(true); // Set the component as mounted when it's rendered on the client
  }, []);

  // Only use useRouter once the component is mounted on the client side
  //const router = isMounted ? useRouter() : null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const password = formData.get('password');

    try {
      const res = await fetch('pages/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });

      if (res.ok) {
        if (router) {
          router.push('/home'); // Redirect to the home page on successful login
        }
      } else {
        const { message } = await res.json();
        setErrorMessage(message); // Set error message if login fails
      }
    } catch (error) {
      setErrorMessage('An error occurred while logging in. Please try again.');
    }
  };

  // Render nothing until the component is mounted
  if (!isMounted) {
    return null;
  }

  return (
    <div style={styles.MainBody}>
      <div style={styles.MainLogin}>
        <div style={styles.Interface}>
          <div style={styles.UserRound}>
            <Image src={user} alt="User Icon" style={styles.User} />
          </div>
          <p style={styles.WB}>Welcome Back!</p>
          <form onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <Image src={mail} alt="Mail Icon" style={styles.icon} />
              <input
                type="text"
                name="name"
                placeholder="Username"
                required
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <Image src={lock} alt="Lock Icon" style={styles.icon} />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                style={styles.input}
              />
            </div>
            <button type="submit" style={styles.submitBtn}>
              Login
            </button>
          </form>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
