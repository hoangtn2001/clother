import { createContext, useState } from "react";

export const SideBarContext = createContext();
export const SidebarProvider=({children}) =>{
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState('');
    const [product, setProduct] = useState({});
    const value = {isOpen, setIsOpen, type,setType, setProduct, product};
    return (
        <SideBarContext.Provider value = {value}>
            {children}
        </SideBarContext.Provider>
    );
};