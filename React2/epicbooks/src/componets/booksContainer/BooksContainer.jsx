import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import BookCard from "../bookCard/BookCard"
import Fantasy from '../../assets/data/fantasy.json'
import BookModalDetails from "./partials/BookModalDetails/BookModalDetails"

const BooksContainer = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [modalData, setModalData] = useState('')

    const toggleModalVisibility = () => {
        setIsModalVisible(!isModalVisible)

    }
    return (
        <>
            <Container className="py-2">
                <Row className="gy-3"
                    xs={1}
                    ms={2}
                    lg={4}
                >
                    {
                        Fantasy.map(book => (
                            <Col
                                key={book.asin}
                            >
                                <BookCard
                                    title={book.title}
                                    category={book.category}
                                    img={book.img}
                                    price={book.price}
                                    setModalData={setModalData}
                                    toggleDetails={toggleModalVisibility}
                                />
                            </Col>
                        ))
                    }
                </Row>
            </Container>

            <BookModalDetails
                show={isModalVisible}
                bookTitle={modalData}
                closeModal={toggleModalVisibility}
            />
        </>
    )
}

export default BooksContainer


