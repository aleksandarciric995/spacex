import LaunchesList from "./LaunchesList";
import { Card } from "../../styledComponents/GlobalStyles";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const LaunchesListItem = ({launch}) => {
    const launchId = launch.id;

    return (
    <Link to={`/launches/${launch.id}`}>
    <Card>
        <h3>{launch.name}</h3>
        <img src={launch.links.patch.small} alt={launch.name} />
        <p>{launch.details}</p>
    </Card>
    </Link>
)}

export default LaunchesListItem;