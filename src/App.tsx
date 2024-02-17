import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Overview } from './pages/overview';
import ScrollToTop from './scrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/casestudies/:overview' element={<Overview />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
