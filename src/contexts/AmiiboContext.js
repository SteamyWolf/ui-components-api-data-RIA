import React, { createContext, useContext, useEffect, useState } from 'react';

const AmiiboContext = createContext({
    data: []
})

export const AmiiboContextProvider = (props) => {
    const [amiiboData, setAmiiboData] = useState([]);

    useEffect(() => {
        //use axios here. 
        //try using async await for fun
    }, [])
    

    return (
        <AmiiboContext.Provider value={amiiboData}>
            {props.children}
        </AmiiboContext.Provider>
    )
}

export const useAmiiboContext = () => useContext(AmiiboContext);