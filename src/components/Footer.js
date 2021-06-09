import React from 'react';
import { useSelector } from 'react-redux';
import FooterChild from './FooterChild';
const Footer = () => {
  const counter = useSelector((state) => state.counter);
  console.log(counter);
  console.log('Footer');
  return (
    <div>
      Footer
      <FooterChild />
    </div>
  );
};

export default Footer;
