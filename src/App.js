import './App.css';
import './index.css';
import { Routes, Route,} from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Maintree from './pages/Maintree';
import Background from './pages/Background';
import InfiniteCanvasBackground from './pages/InfiniteCanvas';
import Example from './pages/InfiniteCanvas';
import EditableTree from './pages/InfiniteCanvas';
import Details from './pages/Details';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/maintree' element={<Maintree />}/>
        <Route path='/details' element={<Details />}/>
        <Route path='/background' element={<Example />}/>
      </Routes>
    </div>
  );
}

export default App;
