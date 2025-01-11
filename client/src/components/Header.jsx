import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import person from '../assets/images/person.jpg';
import Icons from '../assets/icons';
import '../assets/styles/Header.css'

export default function Header({ onSearchQueryChange }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle the change in the search input
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchQueryChange(query);  
  };

  // Handle the Enter key press event
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearchQueryChange(searchQuery);  
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src={Icons.Sun} alt="Sun" className="sun-icon" />
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="header-middle">
        <div className="icon-label">
          <img src={Icons.Home} alt="Sun" style={{ height: '25px' }} className="sun-icon" />
          <p>Home</p>
        </div>
        <div className="icon-label">
          <img src={Icons.Popular} style={{ marginBottom: '5px', marginRight: '3px' }} alt="Sun" className="sun-icon" />
          <p style={{color:'hsl(16.24deg 100% 50%)'}}>Popular</p>
        </div>
        <div className="icon-label">
          <img src={Icons.All} alt="Sun" style={{ marginRight: '5px' }} className="sun-icon" />
          <p>All</p>
        </div>
       
        <input
          type="text"
          className="header-search"
          placeholder="Find community and posts"
          value={searchQuery}
          onChange={handleSearchChange}  
          onKeyPress={handleKeyPress}    
          aria-label="Search"
          style={{ paddingLeft: '40px' }}
        />
        
        
        <button>Create Post</button>
      </div>
      <div className="header-right">
        <img src={Icons.Messinging} alt="Sun" className="message-icon" />
        <img src={Icons.Mail} alt="Sun" style={{ height: '32px', marginLeft:'5px',marginBottom:'5px' }} className="mail-icon" />
        <div className="avator-icon">
          <img src={person} alt="Person" className="avatar" />
          <img src={Icons.Down} alt="Sun" className="down-icon" />
        </div>
      </div>
    </header>
  );
}
