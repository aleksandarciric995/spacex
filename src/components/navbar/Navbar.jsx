// import slika from '../SpaceX-Logo.svg';
// import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
// import HomeView from '../views/HomeView';
// import LaunchesView from '../views/LaunchesView';
// import RocketsView from '../views/RocketsView';
// import ShipsView from '../views/ShipsView';
// import NavTabs from './NavTabs';

// const Navbar = () => {


//     return <>
//     <Router>
//         <Link to='/'> <img src={slika}></img></Link>
//         <Link to='/'>HomeView</Link>
//         <Link to='launchesview'>LaunchesView</Link>
//         <Link to='rocketsview'>RocketsView</Link>
//         <Link to='shipsview'>ShipsView</Link>

//         <Routes>
//         <Route path='/launchesview' element={<LaunchesView />} />
//         <Route path='/rocketsview' element={<RocketsView />} />
//         <Route path='/shipsview' element={<ShipsView />} />
//         <Route path='/' element={<HomeView />} />
//         </Routes>
//     </Router>
//     </>
// }

// export default Navbar;
// import logoSvg from '../../assets/SpaceX-Logo.svg'
import {ReactComponent as Logo} from '../../assets/SpaceX-Logo.svg'
import {useNavigate} from 'react-router-dom'
import NavTabItem from './NavTabItem';
import NavTabs from './NavTabs';

const Navbar = () => {
    const navigate = useNavigate();
    return <div className='navbar'>
        {/* <img src={logoSvg} /> */}
        <Logo fill="white" onClick={() => navigate(`/`)} style={{ cursor: "pointer" }}/>
        <NavTabs />
    </div>
}

export default Navbar;