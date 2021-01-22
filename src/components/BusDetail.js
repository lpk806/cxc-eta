import React from 'react';


const BusDetail = ({ bus }) => {
    return ( 
        <div className="container">
            <div className="d-flex justify-content-around">
            <div >{ bus.route }  </div>
            <div >{ bus.dest }</div>
            <div>{ bus.eta } 分鐘/min(s)</div>
            </div>
            <hr/>

        </div>
     );
}
 
export default BusDetail;