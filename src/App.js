import './App.css';
// import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomeView from './components/views/HomeView';
import LaunchesView from './components/views/LaunchesView';
import RocketsView from './components/views/RocketsView';
import ShipsView from './components/views/ShipsView';
import Navbar from './components/navbar/Navbar';
import LaunchesContextProvider from './context/LaunchesContext';
import LaunchView from './components/views/LaunchView';


function App() {
  return (
    <div className="App">
      <Router>
        <LaunchesContextProvider>
        <Navbar />
        <div className='view-wrapper'>
        <Routes>
          <Route path='/launches' element={<LaunchesView />} />
          <Route path='/launches/:launchId' element={<LaunchView />} />
          <Route path='/rockets' element={<RocketsView />} />
          <Route path='/ships' element={<ShipsView />} />
          <Route path='/' element={<HomeView />} />
        </Routes>
        </div>
        </LaunchesContextProvider>
      </Router>
    {/* <Router>
      <Navbar />
      <Link to='/'>HomeView</Link>
      <Link to='launchesview'>LaunchesView</Link>
      <Link to='rocketsview'>RocketsView</Link>
      <Link to='shipsview'>ShipsView</Link>

    <Routes>
      <Route path='/launchesview' element={<LaunchesView />} />
      <Route path='/rocketsview' element={<RocketsView />} />
      <Route path='/shipsview' element={<ShipsView />} />
      <Route path='/' element={<HomeView />} />
    </Routes>
    </Router> */}
  {/* <Navbar /> */}
    </div>
  );
}

export default App;
