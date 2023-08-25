'use client'
import { createContext, useContext } from "react";


type ProductProviderProps = {
    children: React.ReactNode
};
type GlobalContext = {
    getAllProductData: () => void;
    getHotProductData: () => void;

};

const GlobalContext = createContext({} as GlobalContext);



export const GlobalContextProvider = ({ children }: ProductProviderProps) => {

    const getAllProductData = async () => {
        const res = await fetch('https://api.hiring.masterkey.tech/api/v1/products')
        return res.json();
    };


    const getHotProductData = async () => {
        const res = await fetch('https://api.hiring.masterkey.tech/api/v1/products?product_type=Today’s hot deals')
        return res.json();
    };

    return (
        <GlobalContext.Provider value={{
            getAllProductData,
            getHotProductData
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);