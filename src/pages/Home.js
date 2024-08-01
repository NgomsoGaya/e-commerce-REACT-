// src/pages/Home.js
import React from 'react';
import './Home.css';
import ProductCard from '../components/ProductCard';

const products = [
  { name: 'Product 1', price: 29.99, image: 'path/to/image1.jpg' },
  { name: 'Product 2', price: 19.99, image: 'path/to/image2.jpg' },
  { name: 'Product 3', price: 39.99, image: 'path/to/image3.jpg' },
  { name: 'Product 4', price: 49.99, image: 'path/to/image4.jpg' },
];

const Home = () => {
  return (
    <div className="home">
      <section className="banner">
        <h1>Welcome to MyEcommerce</h1>
        <p>Shop the best products at the best prices</p>
      </section>
      <section className="categories">
        <h2>Categories</h2>
        <div className="category-grid">
          <div className="category">Category 1</div>
          <div className="category">Category 2</div>
          <div className="category">Category 3</div>
          <div className="category">Category 4</div>
        </div>
      </section>
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>
      <section className="promotions">
        <h2>Promotions</h2>
        <div className="promotion-banner">Promotion 1</div>
        <div className="promotion-banner">Promotion 2</div>
      </section>
    </div>
  );
};

export default Home;
