import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TableP14 from '../components/TableP14';
import { Spin } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Overview.css';
import UserDetailsAPIContainer from '../components/UserDetailsAPIContainer';
import { fetchData } from '../../utils/apiFunctions';
import { useQuery } from 'react-query';

function UserDetails() {
  const location = useLocation();
  const name = new URLSearchParams(location.search).get('name');
  const accountNumber = new URLSearchParams(location.search).get('account_number');
  const [data, setData] = useState(null);



  const columns = [
    {
      title: 'Account Number',
      dataIndex: 'Account_No',
      render: (text) => (
        <a style={{ fontSize: '17px', color: '#002855', fontWeight: '200' }}>
          {text}
        </a>
      ),
    },
    {
      title: 'Balance Amount',
      dataIndex: 'BALANCE_AMT',
      render: (text) => (
        <a style={{ fontSize: '17px', color: '#002855', fontWeight: '200' }}>
          {text}
        </a>
      ),
    },
    {
      title: 'Cheque',
      dataIndex: 'CHQ_NO',
      render: (text) => (
        <a style={{ fontSize: '17px', color: '#002855', fontWeight: '200' }}>
          {text}
        </a>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'DATE',
      render: (text) => (
        <a style={{ fontSize: '17px', color: '#002855', fontWeight: '200' }}>
          {text}
        </a>
      ),
    },
    {
      title: 'Deposit Amount',
      dataIndex: 'DEPOSIT_AMT',
      render: (text) => (
        <a style={{ fontSize: '17px', color: '#002855', fontWeight: '200' }}>
          {text}
        </a>
      ),
    },
    {
      title: 'Transaction Details',
      dataIndex: 'TRANSACTION DETAILS',
      render: (text) => (
        <a style={{ fontSize: '17px', color: '#002855', fontWeight: '200' }}>
          {text}
        </a>
      ),
    },
    {
      title: 'Value Date',
      dataIndex: 'VALUE DATE',
      render: (text) => (
        <a style={{ fontSize: '17px', color: '#002855', fontWeight: '200' }}>
          {text}
        </a>
      ),
    },
    {
      title: 'Withdrawal Amount',
      dataIndex: 'WITHDRAWAL_AMT',
      render: (text) => (
        <a style={{ fontSize: '17px', color: '#002855', fontWeight: '200' }}>
          {text}
        </a>
      ),
    },
    {
      title: 'Fraud',
      dataIndex: 'isFraud',
      render: (text) => (
        <a style={{ fontSize: '17px', color: '#002855', fontWeight: '200' }}>
          {text}
        </a>
      ),
    },
    {
      title: 'Risk Level',
      dataIndex: 'riskLevel',
      render: (text) => (
        <a style={{ fontSize: '17px', color: '#002855', fontWeight: '200' }}>
          {text}
        </a>
      ),
    },
  ];

  
  // useEffect(async () => {
  //   try {
  //     const response = await fetch('http://192.168.100.70:5000/transaction/list?account_no=409000611074');
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log(data);
  //       setData(data);
  //     } else {
  //       console.error('Failed to fetch data from the API');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   } finally {
  //     setLoading(false); // Set loading to false when data fetching is complete
  //   }
  // }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch('http://192.168.100.70:5000/transaction/list?account_no=409000611074');
  //       if (response.ok) {
  //         const data = await response.json();
  //         console.log(data);
  //         setData(data);
  //       } else {
  //         console.error('Failed to fetch data from the API');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     } finally {
  //       setLoading(false); // Set loading to false when data fetching is complete
  //     }
  //   }
  
  //   fetchData(); // Call the fetchData function to initiate the data fetching.

  // }, []);
  const {
    data: responses = [],
  } = useQuery(
    ['respfgf'],
    () => fetchData({ url: 'http://192.168.100.70:5000/transaction/list?account_no=' + accountNumber }),
    { refetchOnWindowFocus: false },
    {
      onError: (e) => {
        return (
          <Alert severity="error">This is an error alert — check it out!</Alert>
        );
      },
      
    }
  );





  return (
    <div className="container-fluid vh-90">
      <div className="row">
        <div className="col">
          <p className="title_name">
            Client
            <b>
              {name && <span className="name_label">/{name}</span>}
              {accountNumber && <span className="account_number_label">-{accountNumber}</span>}
            </b>
          </p>
        </div>
      </div>

      <div className="row" id="container_list">
        <UserDetailsAPIContainer accountNumber={accountNumber} />
      </div>

      <div className="overview_table">

          <TableP14 columns={columns} data={responses} />

      </div>
    </div>
  );
}

export default UserDetails;
