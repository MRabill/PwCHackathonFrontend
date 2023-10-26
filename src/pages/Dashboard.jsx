import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Overview.css";
import OverviewAPIContainer from "../components/OverviewAPIContainer";
import { Button, Input, Space } from "antd";
import { useLocation } from "react-router-dom";
import { SearchOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import Highlighter from "react-highlight-words";
import TableP14 from "../components/TableP14";
import DashboardAPIContainer from "../components/DashboardAPIContainer";

function Dashboard() {

  const location = useLocation();
  const integration = new URLSearchParams(location.search).get("integration");
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
      name: "Pravesh Gowreea",
      status: "Active",
      kycstatus: "85%",
      requests: 125,
      type: "Loan Client",
      flags: "0",
      null: "image_placeholder",
    },
    {
      key: "2",
      name: "Kavish",
      status: "Active",
      kycstatus: "85%",
      requests: 125,
      type: "Loan Client",
      flags: "0",
      null: "image_placeholder",
    },
    {
      key: "3",
      name: "Raj",
      status: "Active",
      kycstatus: "85%",
      requests: 125,
      type: "Loan Client",
      flags: "0",
      null: "image_placeholder",
    },
    {
      key: "4",
      name: "Rabill",
      status: "Active",
      kycstatus: "85%",
      requests: 125,
      type: "Loan Client",
      flags: "0",
      null: "image_placeholder",
    },
    {
      key: "5",
      name: "Kavish Gowreea",
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
          <p className="title_name">Dashboard {integration && (
            <span className="integration_label">
              /{integration}
            </span>
          )}</p>

        </div>
      </div>

      <div className="row" id="container_list">
        <DashboardAPIContainer />
      </div>

      <div className="row">
        <div className="col">
          <Link to="/Map">
            <button className="btn_filterbtn">
              <img
                src="https://i.ibb.co/DzNZFjh/Mapbuttonpwc.png"
                alt="Filter Icon"
              />{" "}
              Map
            </button>
          </Link>
        </div>
        <div className="col d-flex justify-content-end">
          <button className="btn_filterbtn">
            <Link to="/Edit">
              <img
                src="https://i.ibb.co/SmkQQ8G/editbuttonpwc.png"
                alt="Filter Icon"
              />{" "}
              Edit
            </Link>
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
