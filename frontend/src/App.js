import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='login' element={<Login/>}/>
        <Route exact path='register' element={<Register/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
