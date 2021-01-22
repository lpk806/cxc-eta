import React, { createContext,  useEffect,  useState } from 'react'
import { Mode, useLightSwitch } from 'use-light-switch'

export const ThemeContext = createContext();

 
const ThemeContextProvider = (props) => {
    const [themes, setTheme] = useState({
        isLightTheme:true,
        light: {syntax:'#555', ui: '#ddd', bg: '#DDD'},
        dark: {syntax:'#ddd', ui: '#333', bg: '#555'},
    })

    
    return ( 
        <ThemeContext.Provider value={{themes, setTheme}}>
        {props.children}
    </ThemeContext.Provider>
     );
}
 
export default ThemeContextProvider;