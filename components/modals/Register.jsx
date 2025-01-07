"use client";
import React from "react";
import Link from "next/link";
import axios from "axios";


export default function Register() {

  
const handleRegister=async(e)=>{
e.preventDefault()
const data={
  firstname:e.target.firstname.value,
  lastname:e.target.lastname.value,
  email:e.target.email.value,
  password:e.target.password.value
  
}
try {

  const res=await axios.post("https://ecomus-be.onrender.com/api/user/register",data)
  console.log('hello ');

  if(res.status===200){
    alert(res.data.message)
    window.location.href = "/login";
  }
  
} catch (error) {
  if(error.response){
    alert(error.response.data.message)
}


}
}




  return (
    <div
      className="modal modalCentered fade form-sign-in modal-part-content"
      id="register"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="header">
            <div className="demo-title">Register</div>
            <span
              className="icon-close icon-close-popup"
              data-bs-dismiss="modal"
            />
          </div>
          <div className="tf-login-form">
            <form onSubmit={handleRegister} className="">
              <div className="tf-field style-1">
                <input
                  className="tf-field-input tf-input"
                  placeholder=" "
                  type="text"
                  required
                  name="firstname"
                />
                <label className="tf-field-label" htmlFor="">
                  First name
                </label>
              </div>
              <div className="tf-field style-1">
                <input
                  className="tf-field-input tf-input"
                  placeholder=" "
                  type="text"
                  required
                  name="lastname"
                />
                <label className="tf-field-label" htmlFor="">
                  Last name
                </label>
              </div>
              <div className="tf-field style-1">
                <input
                  className="tf-field-input tf-input"
                  placeholder=" "
                  type="email"
                  autoComplete="abc@xyz.com"
                  required
                  name="email"
                />
                <label className="tf-field-label" htmlFor="">
                  Email *
                </label>
              </div>
              <div className="tf-field style-1">
                <input
                  className="tf-field-input tf-input"
                  placeholder=" "
                  type="password"
                  required
                  name="password"
                  autoComplete="current-password"
                />
                <label className="tf-field-label" htmlFor="">
                  Password *
                </label>
              </div>
              <div className="bottom">
                <div className="w-100">
                  {/* <Link
                    href={`/register`}
                    className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center"
                    type="submit"
                  >
                    <span>Register</span>
                  </Link> */}
                  <button href="#login" type='submit' className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center">Register</button>
                </div>
                <div className="w-100">
                  <a
                    href="#login"
                    data-bs-toggle="modal"
                    className="btn-link fw-6 w-100 link"
                  >
                    Already have an account? Log in here
                    <i className="icon icon-arrow1-top-left" />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
