import { createContext, useEffect, useState } from "react";

export const ThemeContexts = createContext()

export const ThemeProvider = ({ children }) => {
    const [books, setBooks] = useState([])
    const [isBooksLoading, setIsBooksLoading] = useState(false)
    const [error, setError] = useState('')

    const getAllBooks = async () => {
        setIsBooksLoading(true)
        try {
            const response = await fetch('https://epibooks.onrender.com/')
            const data = await response.json()
            setBooks(data)
            setIsBooksLoading(false)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getAllBooks()
    }, [])


    return (
        <ThemeContexts.Provider value={{
            books,
            setBooks,
            isBooksLoading,
            setIsBooksLoading,
            error,
            getAllBooks
        }}
        >
            {children}
        </ThemeContexts.Provider>
    )
}