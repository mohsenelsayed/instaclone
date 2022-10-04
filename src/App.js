import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import Notifications from './routes/Notifications';
import Inbox from './routes/Inbox';
import Explore from './routes/Explore';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </div>
  );
}

export default App;
