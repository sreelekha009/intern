import React, { useState } from 'react';
import './Menu.css';

const MENU_ITEMS = [
    {
      id: 1,
      image: '/food.jpg',
      name: 'Item 1',
      description: 'A delicious description of Item 1.'
    },
    {
        id: 1,
        image: '/img1.jpg',
        name: 'Item 2',
        description: 'A delicious description of Item 1.'
      },
      {
        id: 2,
        image: '/img2.jpg',
        name: 'Item 3',
        description: 'A delicious description of Item 1.'
      },
      {
        id: 3,
        image: '/components/img3.jpg',
        name: 'Item 4',
        description: 'A delicious description of Item 1.'
      },
      {
        id: 4,
        image: 'path/to/image1.jpg',
        name: 'Item 5',
        description: 'A delicious description of Item 1.'
      },
      {
        id: 5,
        image: 'path/to/image1.jpg',
        name: 'Item 6',
        description: 'A delicious description of Item 1.'
      },
      {
        id: 6,
        image: 'path/to/image1.jpg',
        name: 'Item 7',
        description: 'A delicious description of Item 1.'
      },
  ];
  
  function Menu() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={toggleMenu}>{isOpen ? 'Close Menu' : 'Menu'}</button>
        </header>
        <main className={`menu-container ${isOpen ? 'open' : ''}`}>
          {MENU_ITEMS.map((item) => (
            <MenuItem key={item.id} image={item.image} name={item.name} description={item.description} />
          ))}
        </main>
      </div>
    );
  }
  
  function MenuItem({ image, name, description }) {
    return (
      <div className="menu-item">
        <img src={image} alt={name} />
        <div className="menu-item-info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  }
export default Menu
