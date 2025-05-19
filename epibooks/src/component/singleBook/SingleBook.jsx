import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react"
import {Link} from "react-router-dom";

const SingleBook = ({ book, toggleDetails, setModalData }) => {
    const [isSelected, setIsSelected] = useState(false)

    const handleClick = () => {
        setIsSelected((prevSelected) => !prevSelected)
    }


    const {
        asin,
        title,
        description,
        price,
        category,
        img
    } = book


    const showPopulateModal = () => {
        toggleDetails();

        setModalData(title)
    }

    return (
        <div className="col-12 col-md-6 col-lg-3">

            <div
            className={`card ${isSelected ? "selected" : ""}`}
            onClick={handleClick}>

            </div>

            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>

                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        {asin}
                    </Card.Text>
                    <Button variant="primary"
                        onClick={showPopulateModal}
                    >{price}€</Button>

                    <Link to={`/detail.page/${asin}`}>
                        <Button className='d-flex flex-column my-2' variant="primary">
                            Dettaglio libro
                        </Button>
                    </Link>

                </Card.Body>
            </Card>

        </div>
    )
}

export default SingleBook