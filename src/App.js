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


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/maintree' element={<Maintree />}/>
        <Route path='/background' element={<Example />}/>
      </Routes>
    </div>
  );
}

export default App;
