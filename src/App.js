import './App.css';
import Friends from './components/Friends List Page/Friends';
import CommentPage from './components/Homa Page/CommentPage';
import Marketplace from './components/Marketplace Page/Marketplace';
import Home from './components/Homa Page/Home';
import Profile from './components/Homa Page/Profile';
import Login from './components/Login Page/Login';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/friends' element={<Friends />}/>
        <Route path='/commentPage' element={<CommentPage />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/marketplace' element={<Marketplace />}/>
      </Routes>
    </>
  );
}

export default App;
