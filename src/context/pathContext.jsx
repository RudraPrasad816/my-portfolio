import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const  PathContext = createContext();

export const PathProvider = ({children}) => {
    const location = useLocation();

    const [path, setPath] = useState(location.pathName);

    useEffect(() => {
        setPath(location.pathname)
    }, [location])

    return(
        <PathContext.Provider value = {path}>
            {children}
        </PathContext.Provider>
    )
}


export const usePathContext = () => {
    return useContext(PathContext)
}