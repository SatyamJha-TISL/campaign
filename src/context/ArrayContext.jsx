import React, { createContext, useContext, useEffect, useState } from 'react';

export const ListDataContext = createContext();

export const ListDataContextProvider = ({ children }) => {

    const [list, setList] = useState([])

    useEffect(() => {

        if (list.length > 0) sessionStorage.setItem("list", JSON.stringify(list))
    }, [list])

    useEffect(() => {

        const sessionList = sessionStorage.getItem("list");

        function updateList() {

            const parsedList = JSON.parse(sessionList)
            setList(parsedList)

        }

        sessionList && updateList()

    }, [])


    return (
        <ListDataContext.Provider value={{ list, setList }}>
            {children}
        </ListDataContext.Provider>
    );
};

