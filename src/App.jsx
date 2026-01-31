import { HashRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Countdown from './pages/Countdown';
import Memory from './pages/Memory';
import Todo from './pages/Todo';
import TopSecret from './pages/TopSecret';
import './App.css';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/countdown" element={<Countdown />} />
        <Route path="/memory" element={<Memory />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/top-secret" element={<TopSecret />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
