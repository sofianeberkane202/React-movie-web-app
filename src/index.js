import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// function Test(){
//   const [rate, setRate]= useState(0); 

//   return (
//     <StarRating
//     maxRate={10}
//     size={24}
//     color='#fcc419'
//     starClassName=''
//     boxClassName='starRating'
    
//     textClassName='text text-btn'

//     onRate={setRate}
//     rate={rate}


//     />
//   )
// }
