import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  getRegisterCmpDetail,
  getRegisterDetail,
  getStates,
  getCities,
} from "../api/register.api";
import { ToastContainer, toast } from 'react-toastify';

function Bio() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getStates(`/users/states/1`)
      .then((data) => {
        console.log(data.data);
        setStates(data.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onChangeStates = (e) => {
    console.log(e.target.value);
    getCities(`/users/cities/${e.target.value}`)
      .then((data) => {
        console.log(data.data);
        setCities(data.data.data);
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = (values) => {
    values.userid = localStorage.getItem("userId");
    values.catId = 1;
    values.subcatId = 1;
    console.log("Values", values);
    let cmpdetail = {
      userid: values.userid,
      cname: [values.comp1, values.comp2, values.comp3, values.comp4],
    };
    console.log("cname", cmpdetail);
    getRegisterDetail("/users/register_detail", values)
      .then((data) => {
        console.log("Success", data);
        getRegisterCmpDetail("/users/company_detail", cmpdetail)
          .then((data) => {
            console.log("Success", data);
            toast.success("success")
            navigate("/upload");
          })
          .catch((err) => {
            console.log(err);
            toast.error("something went wrong!!!")
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const backPage = () => {
    navigate("/subcategory");
  };
  return (
    <div>
      <div class="bio">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Complete your bio</h2>
          <h3>Note * mark fields are mandatory</h3>
          <div class="bio-form">
            <input
              type="text"
              id="fname"
              {...register("fname", { required: true })}
              placeholder="* Name"
            />
            <input
              type="text"
              id="lname"
              {...register("lname", { required: true })}
              placeholder="* Surname"
            />
            <input
              type="email"
              id="email"
              {...register("email", { required: false })}
              placeholder="Email ID - Optional"
            />
            <div class="dropdown" id="drop1">
              <select name="gender" id="gender">
                <option value="javascript">* Gender</option>
                <option>MALE</option>
                <option>FEMALE</option>
                <option>OTHERS</option>
              </select>
              <input
                type="date"
                id="dob"
                style={{ textTransform: "uppercase" }}
                {...register("dob", { required: true })}
                placeholder="Date of birth"
              />
              <input
                type="text"
                id="graduation"
                {...register("graduation", { required: true })}
                placeholder="* Graduation"
              />
              <input
                type="text"
                id="master"
                {...register("master", { required: true })}
                placeholder="* Masters"
              />
              <input
                type="text"
                id="designation"
                {...register("designation", { required: true })}
                placeholder="* Designation"
              />
              <input
                type="text"
                id="religion"
                {...register("religion", { required: true })}
                placeholder="* Religion"
              />
              <input
                type="text"
                id="language"
                {...register("language", { required: true })}
                placeholder="* Language"
              />
            </div>
            <div class="heading">
              <h4>Previous Company Details</h4>
              <div class="dropdown">
                <select
                  {...register("comp1", { required: true })}
                  class="drop-selec"
                >
                  <option>Apple</option>
                  <option>Adobe</option>
                  <option>Alphabet</option>
                  <option>Auto desk</option>
                </select>
                <select
                  {...register("comp2", { required: true })}
                  class="drop-selec"
                >
                  <option>Facebook</option>
                  <option>Instagram</option>
                  <option>Twitter</option>
                  <option>Whatsapp</option>
                </select>
                <select
                  {...register("comp3", { required: true })}
                  class="drop-selec"
                >
                  <option>Cadence</option>
                  <option>Broad ridge</option>
                  <option>Boris</option>
                  <option>Borland</option>
                </select>
                <select
                  {...register("comp4", { required: true })}
                  class="drop-selec"
                >
                  <option>Cadence</option>
                  <option>Broad ridge</option>
                  <option>Boris</option>
                  <option>Borland</option>
                </select>
              </div>
            </div>
            <h3>Communication address</h3>
            <input
              type="text"
              id="address"
              {...register("address", { required: true })}
              placeholder="House / Flat / Apartment Name"
            />
            <input
              type="text"
              id="street"
              {...register("street", { required: true })}
              placeholder="Street / Landmark"
            />
            <input
              type="text"
              id="locality"
              {...register("locality", { required: true })}
              placeholder="Colony name"
            />
            <input
              type="text"
              id="pincode"
              {...register("pincode", { required: true })}
              placeholder="Pin"
            />

            <div class="dropdown">
              <select
                {...register("city", { required: true })}
                id="gender"
                disabled={cities.length > 0 ? false : true}
              >
                <option value="">Select City</option>
                {cities.map((state, index) => (
                  <option style={{ textTransform: "capitalize" }}>
                    {state.name}
                  </option>
                ))}
              </select>
              <select
                {...register("state", { required: true })}
                id="gender"
                onChange={onChangeStates}
              >
                <option value="">Select State</option>
                {states.map((state, index) => (
                  <option
                    value={state.id}
                    style={{ textTransform: "capitalize" }}
                  >
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div class="buttons2">
            <input
              type="submit"
              class="send-otp back"
              value="BACK"
              onClick={backPage}
            />
            <input type="submit" class="send-otp next" value="NEXT" />
          </div>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Bio;
