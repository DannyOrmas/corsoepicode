import SingleBook from '../singleBook/SingleBook'
import BookModalDetails from '../partials/BookModalDeatils'
import { useContext, useState } from 'react'
import { ThemeContexts } from '../contexts/ThemeContexts'




const Books = () => {
    const { books } = useContext(ThemeContexts)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [modalData, setModalData] = useState('')

    const toggleModalVisibility = () => {
        setIsModalVisible(!isModalVisible)

    }
    return (

        <>
            <div className="container">
                <div className="row">

                    {
                        books && books.map((book, idx) => (
                            <SingleBook
                                key={`book-${book.asin}-${idx}`}
                                book={book}
                                setModalData={setModalData}
                                toggleDetails={toggleModalVisibility}
                            />
                        ))
                    }

                </div>
            </div>

            <BookModalDetails
                show={isModalVisible}
                bookTitle={modalData}
                closeModal={toggleModalVisibility}
            />
        </>




    )
}

export default Books
