import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import CustomTable from "../Components/CustomTable";
const CST = () => {
  return (
    <Col
      xs={12}
      sm={12}
      md={10}
      lg={10}
      xl={10}
      className="card p-2"
      style={{
        marginLeft: "15rem",
        minHeight: "91vh",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <CustomTable />
    </Col>
  );
};

export default CST;
