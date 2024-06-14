
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import DashBoard from './components/DashBoard';
import AddBus from './components/AddBus';
import ViewBus from './components/ViewBus';
import SearchBus from './components/SearchBus';
import DeleteBus from './components/DeleteBus';

function App() {
  return (
    <div>

      <BrowserRouter><Routes>
        
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/add' element={<AddBus/>}/>
        <Route path='/view' element={<ViewBus/>}/>
        <Route path='/search' element={<SearchBus/>}/>
        <Route path='/delete' element={<DeleteBus/>}/>
        
        </Routes></BrowserRouter>
     
    </div>
  );
}

export default App;
