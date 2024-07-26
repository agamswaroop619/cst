import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import CustomTable from "../Components/CustomTable";
import { MdModeEditOutline } from "react-icons/md";

const CST = () => {
  const columns = [
    { header: "Product", field: "product" },
    { header: "Comments", field: "comments" },
    { header: "Category", field: "category" },
    {
      header: "SPOC",
      field: "spoc",
      cell: (row) => <span className="tag">{row.spoc}</span>,
    },
    {
      header: "Action",
      field: "action",
      cell: (row) => (
        <span style={{ cursor: "pointer" }}>
          <MdModeEditOutline color="#A21094" />
        </span>
      ),
    },
  ];

  const data = [
    {
      product: "Product 1",
      comments: "Username",
      category: "Contact",
      spoc: "Pending",
    },
    {
      product: "Product 2",
      comments: "Username",
      category: "Contact",
      spoc: "Pending",
    },
    {
      product: "Product 3",
      comments: "Username",
      category: "Contact",
      spoc: "Pending",
    },
    {
      product: "Product 4",
      comments: "Username",
      category: "Contact",
      spoc: "Pending",
    },
  ];

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
      <CustomTable columns={columns} data={data} />
    </Col>
  );
};

export default CST;
