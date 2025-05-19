import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Tool from './routes/Tool';
import NotFound from './routes/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tool/:id" element={<Tool />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
