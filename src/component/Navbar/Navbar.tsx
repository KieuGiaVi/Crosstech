import React from 'react';
import './Navbar.css';
import { AiOutlineDown } from "react-icons/ai";
import logo from '../../assets/logo.svg';
import { AppButton } from '../Button';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [activeButton, setActiveButton] = useState<'mainnet' | 'testnet'>('mainnet'); 

  const handleButtonClick = (button: 'mainnet' | 'testnet') => {
    setActiveButton(button); 
  };
  return (
    <div className='navbar'>
      <img src={logo} alt="" className ='logo'/>
      <ul>
        <li>Tapos</li>
        <li>Wallet</li>
        <li>Leaderboard</li>
        <li>Shop</li>
        <li className='more-item'>More<AiOutlineDown /></li> 
      </ul> 
      <div className='button-container'>
        <AppButton
          className={`mainnet-button ${activeButton === 'mainnet' ? 'active' : 'inactive'}`}
          onClick={() => handleButtonClick('mainnet')}>Mainnet</AppButton>
        <AppButton
          className={`testnet-button ${activeButton === 'testnet' ? 'active' : 'inactive'}`}
          onClick={() => handleButtonClick('testnet')}>Testnet
        </AppButton>
      </div>
    </div>
  );
};

export default Navbar;