import {createContext, useState} from "react";

export const SearchBookContext = createContext()

export const SearchBookProvider = ({ children }) => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])

    return (

        <SearchBookContext.Provider
        value={{ query, setQuery, results, setResults }}
        >
            {children}
        </SearchBookContext.Provider>
    )
}