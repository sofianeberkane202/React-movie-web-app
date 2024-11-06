import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StarRating from './components/StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Test/>
  </React.StrictMode>
);

function Test(){
  return (
    <StarRating
    maxRate={10}
    size={24}
    color='#fcc419'
    starClassName=''
    boxClassName='starRating'
    starIsfilled= {true}
    textClassName='text text-btn'
    />
  )
}
