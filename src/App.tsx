import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Overview } from './pages/overview';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/casestudies/:overview' element={<Overview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
