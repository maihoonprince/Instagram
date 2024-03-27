import './App.css';
import Home from './components/Home';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './components/profile/Profile';
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';

function App() {
  return (
    <BrowserRouter>

    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
    </div>
 
    </BrowserRouter>
  );
}

export default App;
