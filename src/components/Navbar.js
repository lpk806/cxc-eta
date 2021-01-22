import React, { useContext, useEffect} from 'react';
import { TabContext } from '../contexts/TabContext';
import {ThemeContext} from '../contexts/ThemeContext';

const Navbar = () => {
    const { themes } = useContext(ThemeContext)
    const { selectTab } = useContext(TabContext)
    const theme =  themes.isLightTheme ?  themes.light :  themes.dark;

    useEffect(() => {
        selectTab(true)
    },[])

    return ( 
        
        <ul className="nav nav-tabs  justify-content-around mb-5 pt-3 pb-3"  style={{background:theme.bg}}>
            <li className="nav-item"><button className="nav-link" onClick={() => selectTab(true)}>往東涌</button></li>
            <li className="nav-item"><button className="nav-link" onClick={() => selectTab(false)}>往國泰城</button></li>
        </ul>
     

     );
}
 
export default Navbar;