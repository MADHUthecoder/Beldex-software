import './App.css';
import './index.css';
import { Routes, Route,} from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Maintree from './pages/Maintree';
import Details from './pages/Details';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/maintree' element={<Maintree />}/>
        <Route path='/details' element={<Details />}/>
      </Routes>
    </div>
  );
}

export default App;
