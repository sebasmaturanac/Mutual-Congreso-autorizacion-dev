import React from 'react';
import Header from '../components/Header';

const PublicLayout = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default PublicLayout;
