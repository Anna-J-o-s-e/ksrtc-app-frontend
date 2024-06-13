
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import DashBoard from './components/DashBoard';
import AddBus from './components/AddBus';

function App() {
  return (
    <div>

      <BrowserRouter><Routes>
        
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/add' element={<AddBus/>}/>
        
        </Routes></BrowserRouter>
     
    </div>
  );
}

export default App;
