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
import { AuthProvider } from './contexts/authContext';
import ForgotPass from './pages/ForgotPass';
import Portal from './pages/Portal';

function App() {
  return (
    <div>
      <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/maintree' element={<Maintree />}/>
        <Route path='/details' element={<Details />}/>
        <Route path="/viewportal" element={<Portal />} />
        <Route path='/forgotpassword' element={<ForgotPass />}/>
        <Route path='/background' element={<Example />}/>
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
