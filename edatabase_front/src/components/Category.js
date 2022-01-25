import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';

function Category() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => {
    console.log("Values", values);
    toast.success("success")
    navigate("/subcategory");
  };
  const backPage = () => {
    navigate("/");
  };

  return (
    <div>
      <div class="category">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Choose a category</h2>
          <div class="container">
            <div class="row1">
              <label class="card">
                <input
                  type="radio"
                  {...register("category", { required: true })}
                  value="Developer"
                />
                <img src="./images/category/004-web-development.png" alt="" />
                <h3>Developer</h3>
              </label>
              <label class="card">
                <input
                  type="radio"
                  {...register("category", { required: true })}
                  value="Designer"
                />
                <img src="./images/category/005-graphic-designer.jpg" alt="" />
                <h3>Designer</h3>
              </label>
              <label class="card">
                <input
                  type="radio"
                  {...register("category", { required: true })}
                  value="Testing"
                />
                <img src="./images/category/003-search.png" alt="sample" />
                <h3>Testing</h3>
              </label>
              <label class="card">
                <input
                  type="radio"
                  {...register("category", { required: true })}
                  value="Marketing"
                />
                <img src="./images/category/002-profit.png" alt="sample" />
                <h3>Marketing</h3>
              </label>
            </div>
            <div class="row2">
              <label class="card">
                <input
                  type="radio"
                  {...register("category", { required: true })}
                  value="Recruitment"
                />
                <img src="./images/category/007-hr.png" alt="sample" />
                <h3>Recruitment</h3>
              </label>
              <label class="card">
                <input
                  type="radio"
                  {...register("category", { required: true })}
                  value="Sales"
                />
                <img src="./images/category/008-acquisition.png" alt="sample" />
                <h3>Sales</h3>
              </label>
              <label class="card">
                <input
                  type="radio"
                  {...register("category", { required: true })}
                  value="Accountant"
                />
                <img src="./images/category/001-accounts.png" alt="sample" />
                <h3>Accountant</h3>
              </label>
              <label class="card">
                <input
                  type="radio"
                  {...register("category", { required: true })}
                  value="Other"
                />
                <img src="./images/category/006-analyst.png" alt="sample" />
                <h3>Other</h3>
              </label>
            </div>
          </div>
          <input
            type="button"
            class="send-otp back"
            value="BACK"
            onClick={backPage}
          />
          <input
            type="submit"
            class="send-otp next"
            value="NEXT"
            // onClick={backPage}
          />
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Category;
