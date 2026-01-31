import { HashRouter, Route, Routes } from 'react-router-dom';
import BubbleLanding from './pages/BubbleLanding';
import Countdown from './pages/Countdown';
import Memory from './pages/Memory';
import Todo from './pages/Todo';
import TopSecret from './pages/TopSecret';
import Backpack from './pages/Backpack';
import './App.css';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<BubbleLanding />} />
        <Route path="/countdown" element={<Countdown />} />
        <Route path="/memory" element={<Memory />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/top-secret" element={<TopSecret />} />
        <Route path="/backpack" element={<Backpack />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
