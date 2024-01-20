import { ReactNode, useState } from "react"
import { AppContext } from "./AppContext";

type TypeContext = {
    children: ReactNode
}

export function AppProvider({children}: TypeContext){

    const [search, setSearch] = useState<string>('');

    const value = {search, setSearch};

    return (
        <>
            <AppContext.Provider value={value}>
                {children}
            </AppContext.Provider>
        </>
    )
}