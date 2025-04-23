import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Tamil from './App';
import Success from './Components/Success';
// import reportWebVitals from './reportWebVitals';

// var objs={
//   rno:1002,
//   sname:"prabhu",
//   nest:{
//       mark:100,
//       tamil:100,
//       english:98,
//       maths:96
//       },
//   hobbies  :["cricket","chess","batmitton","tennis","football","sleeping"]
// }


// var arr =[{sno:1,sname:"tamil",mark:100},{sno:1002,sname:"prabhu",mark:200},{sno:1003,sname:"tp",mark:300}]
var jsonobj ={
  //change function in constructor prameter passed from index.js
  rno:1001,
      sname:"prbhu",
       mark:100
}

// ReactDOM.render(<App></App>document.getelmentbyid)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Success/>
    <Tamil  stud = {jsonobj}/>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
