import React, {createContext, useContext, useReducer} from 'react';

// on prépare le data layer
export const StateContext = createContext();

//wrap nos components et fournir le provide
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);


//pour pouvoir utiliser le state dans nos component
// on l'importe dans index.js
export const useStateValue = () => useContext(StateContext);