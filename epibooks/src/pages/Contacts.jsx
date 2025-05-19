import React from 'react'
import BaseLayout from "../components/layouts/BaseLayout.jsx";
import {useLocation} from "react-router-dom";

const Contacts= () => {

  const location = useLocation()

  return (

   <BaseLayout>
            <h1>Questa è la pagina CONTATTACI</h1>
        </BaseLayout>

  )
}

export default Contacts
