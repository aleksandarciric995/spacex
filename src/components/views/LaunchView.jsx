import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { LaunchesContext } from "../../context/LaunchesContext";

const LaunchView = () => {
    const [launch, setMyLaunch] = useState(null);
    const {launchId} = useParams();
    // const {state} = useContext(LaunchesContext);

    const navigate = useNavigate();
    const backBtn = () => {
        navigate(-1);
    }

    useEffect(() => {
        api.get(`/launches/${launchId}`)
        .then((res) => {
            setMyLaunch(res.data)
        })
        // const myLaunch = state.launches.filter(launch => launch.id === launchId)[0]
        // console.log(`myLaunch`, myLaunch);
        // setMyLaunch(myLaunch)
    }, [])

    return <div>
        <button onClick={backBtn}>back to launches</button>
        LaunchView Single
{/* dodaj loading i error da bi mogao da ispisujes */}
        {/* {launch.name} */}
    </div>
}

export default LaunchView;