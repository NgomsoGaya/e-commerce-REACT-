import React from 'react';
import Button from '../components/common/Button';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the E-commerce Site</h1>
      <Button onClick={() => alert('Button Clicked!')}>Click Me</Button>
    </div>
  );
};

export default Home;
