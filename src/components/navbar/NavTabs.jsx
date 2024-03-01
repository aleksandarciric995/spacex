import './style.css'
import {Link} from 'react-router-dom'
import NavTabItem from './NavTabItem'

const NavTabs = () => {

    return <div className='navtabs-wrapper'>
      {/* {Object.values(routes).map((route) => (
        <NavTabsItem value={route} />
      ))} */}
        <NavTabItem value="Launches"/>
        <NavTabItem value="Rockets"/>
        <NavTabItem value="Ships"/>
    </div>
}

export default NavTabs;