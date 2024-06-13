
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import DashBoard from './components/DashBoard';

function App() {
  return (
    <div>

      <BrowserRouter><Routes>
        
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        
        </Routes></BrowserRouter>
     
    </div>
  );
}

export default App;
