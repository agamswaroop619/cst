import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Layout/Sidebar";
import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex" }} className="app-container">
        <Sidebar />
        <div
          className="app-content"
          style={{ backgroundColor: "#e4e6ef", padding: "2rem", flex: 1 }}
        >
          <Col xl={12} lg={11} md={10} sm={6} xs={6}>
            <Routes>
              {/* <Route path="/keyword-optimisation" element={<Keyword />} /> */}
            </Routes>
          </Col>
        </div>
      </div>
    </Router>
  );
};

export default App;
