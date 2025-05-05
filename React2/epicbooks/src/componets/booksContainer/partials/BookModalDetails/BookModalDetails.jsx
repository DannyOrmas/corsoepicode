import { useState } from 'react'
import { Modal, Button } from "react-bootstrap"


const BookModalDetails = ({ bookTitle, show, closeModal }) => {

    return (
        <Modal
            show={show}
        >
            <Modal.Header closeButton></Modal.Header>

            <Modal.Body>
                <p>
                    {bookTitle}
                </p>
            </Modal.Body>

            <Modal.Footer>
                <Button
                    onClick={closeModal}
                    variant="secondary"
                >
                    Close</Button>
            </Modal.Footer>
        </Modal>

    )
}

export default BookModalDetails