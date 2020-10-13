import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AmiiboContext = createContext({
    data: []
})

export const AmiiboContextProvider = (props) => {
    const [amiiboData, setAmiiboData] = useState({
        loading: false,
        data: []
    })

    const fetchAmiibo = () => {
        setAmiiboData({ loading: true });
        axios.get('https://www.amiiboapi.com/api/amiibo/?character=link')
            .then(res => {
                setAmiiboData({
                    loading: false,
                    data: res.data.amiibo
                })
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        fetchAmiibo();
    }, [])
    

    return (
        <AmiiboContext.Provider value={amiiboData}>
            {props.children}
        </AmiiboContext.Provider>
    )
}

export const useAmiiboContext = () => useContext(AmiiboContext);