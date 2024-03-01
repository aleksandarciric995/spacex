import { launchesReducer } from "../reducer/launchesReducer";
import { createContext, useReducer } from "react";
import { initialState } from "../reducer/launchesReducer";

export const LaunchesContext = createContext();

const LaunchesContextProvider = ({children}) => { // {children je isto kao i props.children}
    const [state, dispatch] = useReducer(launchesReducer, initialState);


    return <LaunchesContext.Provider value={{state, dispatch}}>
        {children}
    </LaunchesContext.Provider>
}

export default LaunchesContextProvider;