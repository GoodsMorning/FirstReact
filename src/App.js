
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './layout/navbar';
import Home from './layout/home'
import Profile from './components/profile';
import Footer from './layout/footer';


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path="/" element = {<Home/>}/>
          <Route exact path="/profile" element = {<Profile/>}/>
          {/* <Route exact path="/todo" element= {}/> */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
