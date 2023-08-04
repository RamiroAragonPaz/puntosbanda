import { createContext, useEffect, useState } from 'react'


export const Context = createContext();

const ContextProvider = ({ children }) => {

    const [bandas, setBandas] = useState(null)
    const [currentBanda, setCurrentBanda] = useState(null);

   


    const data = {
        bandas,
        currentBanda,
        setCurrentBanda
    }

    return (
        <Context.Provider value={data} >
            {children}
        </Context.Provider>

    )
}
export { ContextProvider };