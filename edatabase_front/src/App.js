import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Bio from "./components/Bio";
import Category from "./components/Category";
import Congration from "./components/Congration";
import ProjectDetails from "./components/ProjectDetails";
import Register from "./components/Register";
import SubCategory from "./components/SubCategory";
import Upload from "./components/Upload";
import VerifyOTP from "./components/VerifyOTP";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="parent">
        <div class="navbar">
          <img src="./images/logo.png" alt="logo" />
        </div>
        <div class="logo" style={{ alignSelf: "center" }}></div>
        <section class="hero">
          <Router>
            <Routes>
              <Route exact path="/" element={<Register />} />
              <Route path="/verify" element={<VerifyOTP />} />
              <Route path="/category" element={<Category />} />
              <Route path="/subcategory" element={<SubCategory />} />
              <Route path="/bio" element={<Bio />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/project-details" element={<ProjectDetails />} />
              <Route path="/congratulation" element={<Congration />} />
            </Routes>
          </Router>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
