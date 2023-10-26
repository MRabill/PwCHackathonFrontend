import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Overview.css";
import OverviewAPIContainer from "../components/OverviewAPIContainer";
import { Button, Input, Space } from "antd";
import { SearchOutlined } from '@ant-design/icons';

import Highlighter from "react-highlight-words";
import TableP14 from "../components/TableP14";

function Dashboard() {


  //columnd data and structure
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => (
        <a style={{ fontSize: "17px", color: "#002855", fontWeight: "200" }}>
          {text}
        </a>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <a style={{ fontSize: "17px", color: "#002855", fontWeight: "200" }}>
          {text}
        </a>
      ),
    },
    {
      title: "KYC Status",
      dataIndex: "kycstatus",
      render: (text) => (
        <a style={{ fontSize: "17px", color: "#002855", fontWeight: "200" }}>
          {text}
        </a>
      ),
    },
    {
      title: "Requests",
      dataIndex: "requests",
      render: (text) => (
        <a style={{ fontSize: "17px", color: "#002855", fontWeight: "200" }}>
          {text}
        </a>
      ),
    },
    {
      title: "Type",
      dataIndex: "type",
      render: (text) => (
        <a style={{ fontSize: "17px", color: "#002855", fontWeight: "200" }}>
          {text}
        </a>
      ),
    },
    {
      title: "Flags",
      dataIndex: "flags",
      render: (text) => (
        <a style={{ fontSize: "17px", color: "#002855", fontWeight: "200" }}>
          {text}
        </a>
      ),
    },
    {
      title: null,
      dataIndex: "null",
      render: (text, record) => (
        <a href="/#">
          <img
            src="https://i.ibb.co/tY7MTNq/pepicons-pop-dots-x.png"
            alt="Click Me"
            style={{ width: "28px", height: "28px" }}
          />
        </a>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      integration: "Pravesh Gowreea",
      status: "Active",
      kycstatus: "85%",
      requests: 125,
      type: "Loan Client",
      flags: "0",
      null: "image_placeholder",
    },
    {
      key: "2",
      integration: "Kavish",
      status: "Active",
      kycstatus: "85%",
      requests: 125,
      type: "Loan Client",
      flags: "0",
      null: "image_placeholder",
    },
    {
      key: "3",
      integration: "Raj",
      status: "Active",
      kycstatus: "85%",
      requests: 125,
      type: "Loan Client",
      flags: "0",
      null: "image_placeholder",
    },
    {
      key: "4",
      integration: "Rabill",
      status: "Active",
      kycstatus: "85%",
      requests: 125,
      type: "Loan Client",
      flags: "0",
      null: "image_placeholder",
    },
    {
      key: "5",
      integration: "Kavish Gowreea",
      status: "Active",
      kycstatus: "85%",
      requests: 125,
      type: "Loan Client",
      flags: "0",
      null: "image_placeholder",
    },
  ];


  //end of column data and structure



  return (
    <div className="container-fluid vh-100">
      <div className="row">
        <div className="col">
          <p className="title_name">Dashboard</p>
        </div>
      </div>

      <div className="row" id="container_list">
        <OverviewAPIContainer />
      </div>

      <div className="row">
        <div className="col d-flex justify-content-end">
          <button className="btn_filterbtn">
            <img
              src="https://i.ibb.co/QQNg4mg/Group-11.png"
              alt="Filter Icon"
            />{" "}
            Filter
          </button>
        </div>
      </div>

      <div className="overview_table">
        <TableP14 columns={columns} data={data} />
      </div>
    </div>
  );
}

export default Dashboard;
