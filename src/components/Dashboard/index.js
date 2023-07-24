import { Row, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import DashboardAdmin from './DashboardAdmin';
import DashboardVendedor from './DashboardVendedor';

const roles = ['admin', 'vendedor'];

const Dashboard = ({ history }) => {
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState('');

  useEffect(() => {
    const roleLoaded = sessionStorage.getItem('role');
    if (!roleLoaded || !roles.includes(roleLoaded)) {
      sessionStorage.clear();
      history.push('login');
    }
    setRole(roleLoaded);
    setLoading(false);
  }, [history]);

  return loading ? (
    <Row
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        alignItems: 'center',
      }}
    >
      <Spin />
    </Row>
  ) : role === 'vendedor' ? (
    <DashboardVendedor history={history} />
  ) : (
    <DashboardAdmin history={history} />
  );
};

export default Dashboard;
