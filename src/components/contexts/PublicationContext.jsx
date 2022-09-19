import { createContext, useState } from "react";

export const PublicationContext = createContext();

export function PublicationProvider({ children }) {
    const [imageContext, setimageContext] = useState([]);

    function handleAddImage(image) {
        setimageContext(image)
    }
    
    return (
        <PublicationContext.Provider value={{ imageContext, getImage: handleAddImage }}>
            {children}
        </PublicationContext.Provider>
    )
}