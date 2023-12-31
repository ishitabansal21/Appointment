import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './Login/login';
import Home from './Home/Home';
import Personal from './Personal/Personal';
import Thankyou from './ThankyouPage/Thankyou';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/personal" element={<Personal/>}/>
          <Route path="/thankyou" element={<Thankyou/>}/>
        </Routes>
      </Router>
  );
}

export default App;
