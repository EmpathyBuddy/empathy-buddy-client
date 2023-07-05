import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Requests from './pages/Requests';
import Guidelines from './pages/Guidelines';
import FeelingsCard from './pages/Feelings-card';
import Posts from './pages/Posts';
import RequestDetails from './pages/Request-details';
import EditRequest from './pages/EditRequestPage';
import PostDetails from './pages/PostDetails';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';



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
        <Route path='/requests/:requestId' element={<RequestDetails/>}/> 
        <Route path='/requests/edit/:requestId' element={<EditRequest />}/>
        <Route path='/posts/:postId' element={<PostDetails/>}/> 


        <Route path="/signup" element={ <SignUp /> }/>
        <Route path="/login" element={ <LogIn /> }/>
 
      </Routes>
     
    </div>
  );
}
/////

export default App;
