import React, { createContext,  useState } from 'react';

export const TabContext = createContext();

 
const TabContextProvider = (props) => {
    const [tabs, setTabs] = useState(
        {toTC: true},
)
    const selectTab = (toTc) => {
        setTabs({toTc})
    }
    return ( 
        <TabContext.Provider value={{tabs, selectTab}}>
        {props.children}
    </TabContext.Provider>
     );
}
 
export default TabContextProvider;