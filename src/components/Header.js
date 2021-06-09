import React from 'react';
import { useSelector } from 'react-redux';
const Header = () => {
  const isLogged = useSelector((state) => state.isLogged);
  console.log(isLogged);

  console.log('Header');
  return <div>Header</div>;
};

export default Header;
