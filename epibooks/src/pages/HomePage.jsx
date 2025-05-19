import React from 'react'
import BaseLayout from '../component/layouts/BaseLayout'
import SearchBar from '../component/searchBar/SearchBar'
import Books from '../component/books/Books'
import Welcome from '../component/welcome/Welcome'

const HomePage = () => {
    return (
        <BaseLayout>
            <Welcome />
            <SearchBar />
            <Books />
        </BaseLayout>
    )
}

export default HomePage
