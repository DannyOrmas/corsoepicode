import { Badge } from 'react-bootstrap'
import './bookCard.css'
import { useState } from 'react'


const BookCard = ({ img, title, category, price, toggleDetails, setModalData }) => {
    const [isCardSelected, setIsCardSelected] = useState(false);

    const toggleBadgeVisibility = () => {
        setIsCardSelected(!isCardSelected);
    };

    const showPopulateModal = () => {
        toggleDetails();

        setModalData(title)
    }

    return (
        <div
            className="border border-light-subtle position-relative book-card"
            onClick={toggleBadgeVisibility}
        >
            {
                isCardSelected && (
                    <Badge bg="warning" className='position-absolute card-badge' text="dark">
                        Selected
                    </Badge>

                )
            }
            <div className="ratio ratio-4x3 img-container">
                <img className="img-fluid object-fit-cover" src={img} alt="" />
            </div>
            <div className="d-flex flex-column gap-3 p-3">
                <h5 id="card-title" className="text-truncate mb-0">
                    {title}
                </h5>
                <small id="card-category" className="mb-0 mb-3">
                    {category}
                </small>
                <p id="card-price" className="text-end fw-bold mb-0">
                    {price} €
                </p>
                <button
                    className="btn btn-outline-info"
                    onClick={showPopulateModal}
                >
                    Details
                </button>
            </div>
        </div>
    )
}

export default BookCard  