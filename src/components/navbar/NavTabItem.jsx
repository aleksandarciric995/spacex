import { Link } from 'react-router-dom';

const NavTabItem = ({value}) => {
    return <Link to={value.toLowerCase()}>{value}</Link>;
}

export default NavTabItem;