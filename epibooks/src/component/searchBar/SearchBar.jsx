import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useContext, useEffect } from 'react'
import { SearchBookContext } from '../contexts/SearchBookContext';
import { ThemeContexts } from '../contexts/ThemeContexts';

const SearchBar = () => {
    const { query, setQuery } = useContext(SearchBookContext)
    const { books, setBooks, getAllBooks } = useContext(ThemeContexts)

    const onChangeInput = (e) => {
        setQuery(e.target.value)
    }

    const filterBooks = (e) => {
        e.preventDefault()

        const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()))
        setBooks(filteredBooks)
    }

    useEffect(() => {
        if (query === '') {
            getAllBooks()
        }
    }, [query])

    return (
        <div className='container pt-5'>
            <div className="row">
                <div className="col">
                    <form onSubmit={filterBooks}>
                        <InputGroup className="mb-3">
                            <Form.Control
                                value={query}
                                onChange={onChangeInput}
                                placeholder="Search the Books"


                            />
                            <Button
                                type='submit'
                                variant="primary" id="button-addon2">
                                Search
                            </Button>
                        </InputGroup>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default SearchBar