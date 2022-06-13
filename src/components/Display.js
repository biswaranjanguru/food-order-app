import React from 'react';
import Product from './Product';

export default function Display(props) {
  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Our Delicious Dishes</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}
