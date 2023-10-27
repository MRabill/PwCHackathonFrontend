import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import OverviewAPIContainer from '../components/OverviewAPIContainer';
import TableP14 from '../components/TableP14';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Overview.css';

function UserDetails() {
  const location = useLocation();
  const name = new URLSearchParams(location.search).get('name');
  const accountNumber = new URLSearchParams(location.search).get('account_number');
  const [data, setData] = useState(null); // Change to null to indicate no data initially

  const columns = [
    {
      title: 'Account Number',
      dataIndex: 'account_number',
      render: (text) => (
        <a style={{ fontSize: '17px', color: '#002855', fontWeight: '200' }}>{text}</a>
      ),
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (text) => (
        <a style={{ fontSize: '17px', color: '#002855', fontWeight: '200' }}>{text}</a>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      render: (text) => (
        <a style={{ fontSize: '17px', color: '#002855', fontWeight: '200' }}>{text}</a>
      ),
    },
    {
      title: 'Predicted Amount',
      dataIndex: 'predicted_amount',
      render: (text) => (
        <a style={{ fontSize: '17px', color: '#002855', fontWeight: '200' }}>{text}</a>
      ),
    },
  ];

  useEffect(() => {
    // Fetch data using the provided accountNumber
    fetch('http://192.168.100.70:5000/clients/users/1')
      .then((response) => response.json())
      .then((result) => {
        const matchingPrediction = result.prediction.find((prediction) => prediction.account_number === accountNumber);
        if (matchingPrediction) {
          setData([matchingPrediction]); // Wrap the matching prediction in an array
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [accountNumber]); // Add accountNumber to the dependency array

  return (
    <div className="container-fluid vh-100">
      <div className="row">
        <div className="col">
          <p className="title_name">
            Client
            <b>
              {name && <span className="name_label">/{name}</span>}
              {accountNumber && <span className="account_number_label">/{accountNumber}</span>}
            </b>
          </p>
        </div>
      </div>

      <div className="row" id="container_list">
        <OverviewAPIContainer />
      </div>

      <div className="overview_table">
        <TableP14 columns={columns} data={data} />
      </div>
    </div>
  );
}

export default UserDetails;
