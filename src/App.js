import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Requests from './pages/Requests';
import Guidelines from './pages/Guidelines';
import FeelingsCard from './pages/Feelings-card';
import Posts from './pages/Posts';



function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/requests' element={<Requests/>}/>
        <Route path='/guidelines' element={<Guidelines/>}/>
        <Route path='/feelings-card' element={<FeelingsCard/>}/>
        <Route path='/posts' element={<Posts/>}/>
        {/* <Route path='/' element={</>}/> */}



      </Routes>
     
    </div>
  );
}
/////

export default App;
