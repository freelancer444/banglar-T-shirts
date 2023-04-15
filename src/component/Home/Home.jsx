import React from 'react';
import Header from '../header/Header';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts= useLoaderData()
    return (
        <div>
          <h1>T-shirts:{tshirts.length}</h1>
        </div>
    );
};

export default Home;