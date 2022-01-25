import { Close, KeyboardArrowUp } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCompaniesByUserId,getRegisterProjects } from "../api/register.api";
// import { data } from "./data.js";

function ProjectDetails() {
  const [inputData, setInputData] = useState([]);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCompaniesByUserId(`/users/companies/${localStorage.getItem('userId')}`)
      .then((resp) => {
        console.log(resp.data);
        let arrData = [];
        for (let i = 0; i < resp.data.data.length; i++) {
          arrData.push({
            compId: resp.data.data[i].id,
            name: resp.data.data[i].cname,
            items: [],
          });
        }
        setData(arrData)
      })
      .catch((err) => console.log(err));
  }, []);

  const addItem = (index) => {
    if (!inputData[index]) {
      setInputData([]);
    } else {
      data[index].items.push(inputData[index]);
      setInputData([]);
    }
    let x = document.getElementsByName("inputField");
    for (const x1 of x) x1.value = "";
  };

  const deleteItem = (i, id) => {
    data[i].items.splice(id, 1);
    setInputData([]);
    let x = document.getElementsByName("inputField");
    for (const x1 of x) x1.value = "";
  };

  const nextPage = () => {
    let payload = {
      userid:localStorage.getItem('userId'),
      data:data
    }
    console.log("DATA ", payload);
    getRegisterProjects('/users/add_project',payload)
    .then(data=>{
      console.log(data.data)
      navigate("/congratulation");
    }).catch(err=>console.log(err))
  };
  const backPage = () => {
    navigate("/upload");
  };

  return (
    <div>
      <div class="project">
        <h2>Enter your project details</h2>
        <div class="projects">
          {data.map((company, i) => {
            return (
              <div className="project-card">
                <div className="company">
                  <div className="box"></div>
                  <span className="chead">{company.name}</span>
                  <button className="upicon">
                    <KeyboardArrowUp />
                  </button>
                </div>
                <div className="project-list">
                  {company.items.map((elem, ind) => {
                    return (
                      <div className="list-item" key={ind}>
                        <li>{elem}</li>
                        <button
                          className="closeIcon"
                          onClick={() => deleteItem(i, ind)}
                        >
                          <Close fontSize="smaller" />
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className="add-div">
                  <input
                    className="add-input"
                    type="text"
                    name="inputField"
                    placeholder="Enter Project Title"
                    value={inputData[i]}
                    onChange={(e) => {
                      const temp = inputData;
                      temp[i] = e.target.value;
                      setInputData(temp);
                    }}
                  />
                  <button className="add-new" onClick={() => addItem(i)}>
                    ADD NEW
                  </button>
                </div>
              </div>
            );
          })}

          <div class="buttons btnp">
            <input
              type="submit"
              class="send-otp back"
              value="BACK"
              onClick={backPage}
            />
            <input
              type="submit"
              class="send-otp next"
              value="NEXT"
              onClick={nextPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
