import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div className='title'>
       
          <h1>SEVENTH-Heaven</h1>
        
      </div>
      <div>
        <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
       
      </div>
    </header>
  );
}
