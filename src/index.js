import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App'

function Card(){
  return   <div className='card'> 
       <h1>Hi Fariza, This is for you. </h1>
       <div> <p className='new'>life is beautiful When u are single🤣🤣
       🤣🤣🤣</p></div>
          </div>
}
function App(){

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
    <Card/>
    </div>

  </React.StrictMode>
);
