import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Item from './pages/Item';
import Todo from './components/todo';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":folder" element={<Todo />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
