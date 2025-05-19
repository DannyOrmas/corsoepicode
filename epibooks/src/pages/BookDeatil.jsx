import BaseLayout from "../components/layouts/BaseLayout.jsx";
import { useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const BookDetail = () => {
    const [bookDetail, setBookDetail] = useState(null)
    const { asin } = useParams()
    const navigate = useNavigate()



    const redirectToContacts = () => {
        navigate('/contacts')
    }

    const getSingleBook = async () => {
        try {
            const response = await fetch(`https://epibooks.onrender.com/${asin}`)
            const book = await response.json()
            setBookDetail(book[0])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSingleBook()
    }, [asin])


    return (
        <BaseLayout>
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        Pagina di dettaglio del libro con asin <h1>{asin}</h1>
                    </div>
                    {bookDetail && (
                        <div className='d-flex flex-column gap-3'>
                            <p>{bookDetail.asin}</p>
                            <p>{bookDetail.price}</p>
                            <p>{bookDetail.category}</p>
                            <p>{bookDetail.img}</p>
                        </div>
                    )}
                </div>
                <button onClick={redirectToContacts}>
                    naviga in contatti
                </button>
            </div>
        </BaseLayout>
    );
};

export default BookDetail;