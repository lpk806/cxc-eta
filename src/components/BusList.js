import React, {useContext, useEffect} from 'react';
import { BusContext } from '../contexts/BusContext';
import { TabContext } from '../contexts/TabContext';
import BusDetail from './BusDetail';

const BusList = () => {
    const { buses, refreshBus } = useContext(BusContext)
    const { tabs } = useContext(TabContext)
    let busList = []
    busList = buses.filter(bus => bus.toTC === tabs.toTc)

    useEffect(()=> {
        refreshBus()
    },[])

    useEffect(()=> {
        busList = buses.filter(bus => bus.toTC === tabs.toTc)
        console.log("change");
        console.log(buses);
    },[buses])
    
    return busList.length ?( 
        <div className="container">
           
                {busList.map(bus => {
                    return (<BusDetail bus={bus} key={bus.route}></BusDetail>)
                })}
            
        </div>
     ):(
        <div className="container">
         <div>沒有服務</div>    
         <div>Not in Service</div>
         </div>
     );
}
 
export default BusList;