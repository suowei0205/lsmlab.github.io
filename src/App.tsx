import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllPublications from './pages/AllPublications';
import AllNews from './pages/AllNews';
import PIProfile from './pages/PIProfile';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publications" element={<AllPublications />} />
        <Route path="/news" element={<AllNews />} />
        <Route path="/pi-profile" element={<PIProfile />} />
      </Routes>
    </Router>
  );
}
