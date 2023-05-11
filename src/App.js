import { Route, Routes } from 'react-router-dom';
import './categories.styles.scss';
import Home from './routes/home.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App;
