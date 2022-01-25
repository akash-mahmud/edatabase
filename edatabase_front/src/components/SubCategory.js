import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function SecondCategory() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => {
    console.log("Values", values);
    navigate("/bio");
  };

  const backPage = () => {
    navigate("/category");
  };

  return (
    <div>
      <div
        class="category sub-category"
        // style="display: none"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Choose a sub category</h2>
          <div class="container">
            <div class="row1">
              <label class="card">
                <input
                  type="radio"
                  {...register("sub-category", { required: true })}
                  value="Fullstack"
                />
                <img
                  src="./images/category/004-web-development.png"
                  alt="sample"
                />
                <h3>Fullstack</h3>
              </label>
              <label class="card">
                <input
                  type="radio"
                  {...register("sub-category", { required: true })}
                  value="Python"
                />
                <img
                  src="./images/category/005-graphic-designer.jpg"
                  alt="sample"
                />
                <h3>Python</h3>
              </label>
              <label class="card">
                <input
                  type="radio"
                  {...register("sub-category", { required: true })}
                  value="PHP"
                />
                <img src="./images/category/003-search.png" alt="sample" />
                <h3>PHP</h3>
              </label>
              <label class="card">
                <input
                  type="radio"
                  {...register("sub-category", { required: true })}
                  value=".NET"
                />
                <img src="./images/category/002-profit.png" alt="sample" />
                <h3>.NET</h3>
              </label>
            </div>
            <div class="row2">
              <label class="card">
                <input
                  type="radio"
                  {...register("sub-category", { required: true })}
                  value="Java"
                />
                <img src="./images/category/007-hr.png" alt="sample" />
                <h3>Java</h3>
              </label>
              <label class="card">
                <input
                  type="radio"
                  {...register("sub-category", { required: true })}
                  value="Scala"
                />
                <img src="./images/category/008-acquisition.png" alt="sample" />
                <h3>Scala</h3>
              </label>
              <label class="card">
                <input
                  type="radio"
                  {...register("sub-category", { required: true })}
                  value="Node JS"
                />
                <img src="./images/category/001-accounts.png" alt="sample" />
                <h3>Node JS</h3>
              </label>
              <label class="card">
                <input
                  type="radio"
                  {...register("sub-category", { required: true })}
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
          <input type="submit" class="send-otp next" value="NEXT" />
        </form>
      </div>
    </div>
  );
}

export default SecondCategory;
