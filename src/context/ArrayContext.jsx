import React, { createContext, useContext, useState } from 'react';

export const ListDataContext = createContext();

export const ListDataContextProvider = ({ children }) => {

    const [list, setList] = useState([])


    return (
        <ListDataContext.Provider value={{ list, setList }}>
            {children}
        </ListDataContext.Provider>
    );
};

