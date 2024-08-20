import './App.css';
import Banner from './components/banner';
import Experts from './components/Experts';
import Header from './components/header';
import './index.css'
// import { useState } from 'react';
function App() {
//   let [currentval,setcurrental]=useState(0);
//   function increasecounter() {
//      if (currentval>=20) {
//         return;
//       }
//  currentval++;
//  setcurrental(currentval);

    
//   }
//     function decresaecounter() {
//       if (currentval==0) {
//         return;
//       }
//  currentval--;
//  setcurrental(currentval);
 
    
//   }
  return (
    <div >
    

<Header/>  
<Banner/> 
<Experts/>
  </div>
  );
}

export default App;
  // {/* <header className="App-header">
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //       <div> {currentval}</div>
  //       <button onClick={increasecounter} >+</button>
  //               <button onClick={decresaecounter} >-</button>

  //     </header> */}