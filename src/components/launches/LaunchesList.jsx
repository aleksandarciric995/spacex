import LaunchesListItem from "./LaunchesListItem"
import { Link } from "react-router-dom";

const LaunchesList = ({launches}) => {

    return <div>
        {launches.map(launch => (
            <LaunchesListItem key={launch.id} launch={launch} />
            // <Link to={`${launch.id}`} launch={launch}>{launch.name}</Link>
        ))}
    </div>
}

export default LaunchesList;