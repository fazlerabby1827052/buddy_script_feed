import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Login() {
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        user: "",
        password: "",
      });


      const changehandle = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };


      const handlesubmit = (e) => {
        e.preventDefault();
        const allusersjson=localStorage.getItem("user") || [];
        const allusers=allusersjson.length?JSON.parse(allusersjson):[];
        let flag=false;
        allusers?.forEach((element)=>{
          if(element.user===formData.user && element.password===formData.password){
            flag=true;
            localStorage.setItem("currentUser",JSON.stringify(formData.user))
            navigate('/feed')
            return;
          }
        });
        if(!flag){
          alert("wrong credential");
        }
      };

  

  

  return (
    <div>
      <section class="_social_login_wrapper _layout_main_wrapper">
        <div class="_shape_one">
          <img src="assets/images/shape1.svg" alt="" class="_shape_img" />
          <img src="assets/images/dark_shape.svg" alt="" class="_dark_shape" />
        </div>
        <div class="_shape_two">
          <img src="assets/images/shape2.svg" alt="" class="_shape_img" />
          <img
            src="assets/images/dark_shape1.svg"
            alt=""
            class="_dark_shape _dark_shape_opacity"
          />
        </div>
        <div class="_shape_three">
          <img src="assets/images/shape3.svg" alt="" class="_shape_img" />
          <img
            src="assets/images/dark_shape2.svg"
            alt=""
            class="_dark_shape _dark_shape_opacity"
          />
        </div>
        <div class="_social_login_wrap">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                <div class="_social_login_left">
                  <div class="_social_login_left_image">
                    <img
                      src="assets/images/login.png"
                      alt="Image"
                      class="_left_img"
                    />
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                <div class="_social_login_content">
                  <div class="_social_login_left_logo _mar_b28">
                    <img
                      src="assets/images/logo.svg"
                      alt="Image"
                      class="_left_logo"
                    />
                  </div>
                  <p class="_social_login_content_para _mar_b8">Welcome back</p>
                  <h4 class="_social_login_content_title _titl4 _mar_b50">
                    Login to your account
                  </h4>
                  <button
                    type="button"
                    class="_social_login_content_btn _mar_b40"
                  >
                    <img
                      src="assets/images/google.svg"
                      alt="Image"
                      class="_google_img"
                    />{" "}
                    <span>Or sign-in with google</span>
                  </button>
                  <div class="_social_login_content_bottom_txt _mar_b40">
                    {" "}
                    <span>Or</span>
                  </div>
                  <form onSubmit={handlesubmit} class="_social_login_form">
                    <div class="row">
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div class="_social_login_form_input _mar_b14">
                          <label class="_social_login_label _mar_b8">
                            Username
                          </label>
                          <input
                            type="text" name="user" onChange={changehandle} value={formData.user}
                            class="form-control _social_login_input"
                          />
                        </div>
                      </div>
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div class="_social_login_form_input _mar_b14">
                          <label class="_social_login_label _mar_b8">
                            Password
                          </label>
                          <input
                            type="password" name="password" onChange={changehandle} value={formData.password}
                            class="form-control _social_login_input"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                        <div class="form-check _social_login_form_check">
                          <input
                            class="form-check-input _social_login_form_check_input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked readOnly
                          />
                          <label
                            class="form-check-label _social_login_form_check_label"
                            for="flexRadioDefault2"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                        <div class="_social_login_form_left">
                          <p class="_social_login_form_left_para">
                            Forgot password?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                        <div class="_social_login_form_btn _mar_t40 _mar_b60">
                          <button
                            class="_social_login_form_btn_link _btn1"
                          >
                            Login now
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <div class="_social_login_bottom_txt">
                        <p class="_social_login_bottom_txt_para">
                          Dont have an account?{" "}
                          <a onClick={()=>{navigate('/')}} href="">Create New Account</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
