import React from 'react';
import Logo from '../../assets/logo.png';
import HeaderBanner from '../../assets/headerBanner.jpg';


const Header = () => {
  return (
    <div
      className="flex flex-col items-center w-full py-1"
      style={{
        background: `url(${HeaderBanner}) center`,
        backgroundSize: 'cover'
      }}
    >
      <img alt="logo" className="w-24 h-24 rounded-full" src={Logo} />
      <h1 className="text-white uppercase text-xl md:text-6xl my-1">autorizacion</h1>
    </div>
  );
};

export default Header;
