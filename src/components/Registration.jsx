import React, { useState } from "react";
import { setToLocalStorage } from "../utils/localstorage";
import { useNavigate } from "react-router-dom";

const userObject = {
  user: "",
  password: "",
  confirmpassword: "",
  post: [],
};

export default function Registration() {
	const navigate=useNavigate();
  const [formData, setFormData] = useState({
    user: "",
    password: "",
    confirmpassword: "",
  });

  const [userData, setUserData] = useState({
    user: "",
    password: "",
    confirmpassword: "",
    post: [],
  });

  const changehandle = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setUserData({ ...userData, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!formData.user || !formData.password) {
      alert("please fill all fields");
      return;
    }
    const trimuser = formData.user.trim();
    if (formData.user != trimuser) {
      alert("leading space is not allowed in username");
      return;
    }
    if (formData.user[0] >= "0" && formData.user[0] <= "9") {
      alert("first letter not to be a number");
      return;
    }

    const allusersjson = localStorage.getItem("user") || [];
    const allusers = allusersjson.length ? JSON.parse(allusersjson) : [];
    let flag = false;
    allusers?.forEach((element) => {
      if (element.user === formData.user) {
        alert("username already exist.try another!");
        flag = true;
        return;
      }
    });
    if (flag) {
      return;
    }

	if(formData.password!=formData.confirmpassword){
		alert("password not matched");
		return;
	}

    const users = [...allusers, userData];
	setToLocalStorage("user",users);

    setFormData({ user: "", password: "",confirmpassword:"" });
    setUserData(userObject);
	navigate('/login')
  };

  return (
    <div>
      <section class="_social_registration_wrapper _layout_main_wrapper">
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
        <div class="_social_registration_wrap">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                <div class="_social_registration_right">
                  <div class="_social_registration_right_image">
                    <img src="assets/images/registration.png" alt="Image" />
                  </div>
                  <div class="_social_registration_right_image_dark">
                    <img src="assets/images/registration1.png" alt="Image" />
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                <div class="_social_registration_content">
                  <div class="_social_registration_right_logo _mar_b28">
                    <img
                      src="assets/images/logo.svg"
                      alt="Image"
                      class="_right_logo"
                    />
                  </div>
                  <p class="_social_registration_content_para _mar_b8">
                    Get Started Now
                  </p>
                  <h4 class="_social_registration_content_title _titl4 _mar_b50">
                    Registration
                  </h4>
                  <button
                    type="button"
                    class="_social_registration_content_btn _mar_b40"
                  >
                    <img
                      src="assets/images/google.svg"
                      alt="Image"
                      class="_google_img"
                    />{" "}
                    <span>Register with google</span>
                  </button>
                  <div class="_social_registration_content_bottom_txt _mar_b40">
                    {" "}
                    <span>Or</span>
                  </div>
                  <form onSubmit={handlesubmit} class="_social_registration_form">
                    <div class="row">
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div class="_social_registration_form_input _mar_b14">
                          <label class="_social_registration_label _mar_b8">
                            Username
                          </label>
                          <input
                            type="text" name="user"
							value={formData.user}
							onChange={changehandle}
                            class="form-control _social_registration_input"
                          />
                        </div>
                      </div>
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div class="_social_registration_form_input _mar_b14">
                          <label class="_social_registration_label _mar_b8">
                            Password
                          </label>
                          <input
                            type="password" name="password"
							value={formData.password}
							onChange={changehandle} 
                            class="form-control _social_registration_input"
                          />
                        </div>
                      </div>
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div class="_social_registration_form_input _mar_b14">
                          <label class="_social_registration_label _mar_b8">
                            Repeat Password
                          </label>
                          <input
                            type="password" name="confirmpassword"
							value={formData.confirmpassword}
							onChange={changehandle}
                            class="form-control _social_registration_input"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                        <div class="form-check _social_registration_form_check">
                          <input
                            class="form-check-input _social_registration_form_check_input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked readOnly
                          />
                          <label
                            class="form-check-label _social_registration_form_check_label"
                            for="flexRadioDefault2"
                          >
                            I agree to terms & conditions
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                        <div class="_social_registration_form_btn _mar_t40 _mar_b60">
                          <button
                            class="_social_registration_form_btn_link _btn1"
                          >
                            Register now
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <div class="_social_registration_bottom_txt">
                        <p class="_social_registration_bottom_txt_para">
                          Have an account?{" "}
                          <a onClick={()=>(navigate('/login'))} href="" >Login</a>
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
