import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Overview.css';
import OverviewAPIContainer from '../components/OverviewAPIContainer';
import { Button, Input, Space } from 'antd';
import { useLocation } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import TableP14 from '../components/TableP14';
import DashboardAPIContainer from '../components/DashboardAPIContainer';

function UserDetails() {
  const location = useLocation();
  const name = new URLSearchParams(location.search).get('name');
  //columnd data and structure
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => (
        <a style={{ fontSize: '17px', color: '#002855', fontWeight: '200' }}>
          {text}
        </a>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (text) => (
        <a style={{ fontSize: '17px', color: '#002855', fontWeight: '200' }}>
          {text}
        </a>
      ),
    },
    {
      title: 'KYC Status',
      dataIndex: 'kycstatus',
      render: (text) => (
        <a style={{ fontSize: '17px', color: '#002855', fontWeight: '200' }}>
          {text}
        </a>
      ),
    },
    {
      title: 'Requests',
      dataIndex: 'requests',
      render: (text) => (
        <a style={{ fontSize: '17px', color: '#002855', fontWeight: '200' }}>
          {text}
        </a>
      ),
    },
    {
      title: 'Type',
      dataIndex: 'type',
      render: (text) => (
        <a style={{ fontSize: '17px', color: '#002855', fontWeight: '200' }}>
          {text}
        </a>
      ),
    },
    {
      title: 'Flags',
      dataIndex: 'flags',
      render: (text) => (
        <a style={{ fontSize: '17px', color: '#002855', fontWeight: '200' }}>
          {text}
        </a>
      ),
    },
    {
      title: null,
      dataIndex: 'null',
      render: (text, record) => (
        <a href="/#">
          <img
            src="https://i.ibb.co/tY7MTNq/pepicons-pop-dots-x.png"
            alt="Click Me"
            style={{ width: '28px', height: '28px' }}
          />
        </a>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Pravesh Gowreea',
      status: 'Active',
      kycstatus: '85%',
      requests: 125,
      type: 'Loan Client',
      flags: '0',
      null: 'image_placeholder',
    },
    {
      key: '2',
      name: 'Kavish',
      status: 'Active',
      kycstatus: '85%',
      requests: 125,
      type: 'Loan Client',
      flags: '0',
      null: 'image_placeholder',
    },
    {
      key: '3',
      name: 'Raj',
      status: 'Active',
      kycstatus: '85%',
      requests: 125,
      type: 'Loan Client',
      flags: '0',
      null: 'image_placeholder',
    },
    {
      key: '4',
      name: 'Rabill',
      status: 'Active',
      kycstatus: '85%',
      requests: 125,
      type: 'Loan Client',
      flags: '0',
      null: 'image_placeholder',
    },
    {
      key: '5',
      name: 'Kavish Gowreea',
      status: 'Active',
      kycstatus: '85%',
      requests: 125,
      type: 'Loan Client',
      flags: '0',
      null: 'image_placeholder',
    },
  ];

  //end of column data and structure

  return (
    <div className="container-fluid vh-100">
      <div className="row">
        <div className="col">
          <p className="title_name">
            Client
            <b>
              {name && (
                <span className="name_label">/{name}</span>
              )}
            </b>
          </p>
        </div>
      </div>

      <div className="row" id="container_list">
        <OverviewAPIContainer />
      </div>



      <div className="row">
        <div className="col">
          <p className="padding">Incoming Transaction {">"} Entity Name</p>
        </div>
      </div>
      <div className="overview_table">
        <TableP14 columns={columns} data={data} />
      </div>

      
      <div className="row">
        <div className="col">
          <p className="padding">Outgoing Transaction {">"} Entity Name</p>
        </div>
      </div>
      <div className="overview_table">
        <TableP14 columns={columns} data={data} />
      </div>

      <div className="row">
        <div className="col">
          <p className="padding">Transactions with Watchlist People {">"} Entity Name</p>
        </div>
      </div>

      <div className="overview_table">
        <TableP14 columns={columns} data={data} />
      </div>


    </div>
  );
}

export default UserDetails;
