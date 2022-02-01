//import area from 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Uploadfile from './Pages/Uploadfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Uploadfile />} />
      </Routes>
    </Router>
  );
}

export default App;
