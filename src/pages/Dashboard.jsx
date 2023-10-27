import React, { useEffect, useState } from 'react';
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

function Dashboard() {
  const location = useLocation();
  const integration = new URLSearchParams(location.search).get('integration');
  const [data, setData] = useState([]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text, record) => (
        <Link to={`/UserDetails?name=${record.name}&account_number=${record.account_number}`}>
          <a style={{ fontSize: '17px', color: '#002855', fontWeight: '200' }}>
            {text}
          </a>
        </Link>
      ),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      render: (text) => (
        <a style={{ fontSize: '17px', color: '#002855', fontWeight: '200' }}>
          {text}
        </a>
      ),
    },
    {
      title: 'Date of Birth',
      dataIndex: 'dob',
      render: (text) => (
        <a style={{ fontSize: '17px', color: '#002855', fontWeight: '200' }}>
          {text}
        </a>
      ),
    },
    {
      title: 'Account Number',
      dataIndex: 'account_number',
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
        <Link to={`/UserDetails?name=${record.name}&account_number=${record.account_number}`}>
          <img
            src="https://i.ibb.co/tY7MTNq/pepicons-pop-dots-x.png"
            alt="Click Me"
            style={{ width: '28px', height: '28px' }}
          />
        </Link>
      ),
    },
  ];

  useEffect(() => {
    fetch('http://192.168.100.70:5000/clients/users/1')
      .then((response) => response.json())
      .then((result) => {
        if (result.users) {
          setData(result.users);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container-fluid vh-100">
      <div className="row">
        <div className="col">
          <p className="title_name">
            Dashboard
            {integration && (
              <span className="integration_label">/{integration}</span>
            )}
          </p>
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
              />{' '}
              Map
            </button>
          </Link>
        </div>

        <div className="col d-flex justify-content-end">
          <button className="btn_filterbtn">
            <img
              src="https://i.ibb.co/SmkQQ8G/editbuttonpwc.png"
              alt="Filter Icon"
            />{' '}
            Edit
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
