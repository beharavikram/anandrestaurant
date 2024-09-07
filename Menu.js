import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <section id="menu">
      <h2>Our Menu</h2>
      <div className="menu-item">
        <h3>Margherita Pizza</h3>
        <p>A classic pizza topped with fresh mozzarella, tomatoes, and basil.</p>
        <span className="price">$12.99</span>
      </div>
      {/* Add more menu items here */}
    </section>
  );
}

export default Menu;