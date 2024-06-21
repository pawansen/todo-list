import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Todo from './pages/Todo/Todo';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
