import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='container w-100'>
            <div className="row w-100 justify-content-center align-items-center">
                <div className="col-12 w-100">
                    <img src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png" alt="pagina non trovata"/>
                </div>
            </div>
            <div className="row w-100">
                <div className="col-12">
                    <div className='d-flex gap-3'>
                        <p>Attenzione, la pagina richiesta non è stata trovata</p>
                        <button className='btn btn-info'>
                            Torna alla home!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;