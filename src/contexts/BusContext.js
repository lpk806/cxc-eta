import React, { createContext,  useState,  useEffect} from 'react';
import axios from 'axios';
import config from '../config'
export const BusContext = createContext();

 
const BusContextProvider = (props) => {
    const [buses, setBuses] = useState([])

    const delay = 15000;

    useEffect(() => {
    setInterval(async() => {
        await refreshBus()
    }, delay);

    }, [])


    const refreshBus = async() => {
        await axios.get(config.apiUrl + 'cxc/cxc-eta')
        .then((res) => {
            setBuses(res.data)
        })
        
    }

    return ( 
        <BusContext.Provider value={{buses ,refreshBus}}>
        {props.children}
        </BusContext.Provider>
     );
}
 
export default BusContextProvider;