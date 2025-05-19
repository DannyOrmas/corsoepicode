import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage.jsx";
{/*import WeAre from "./pages/WeAre.jsx"; */ }
{/*import Contacts from "./pages/Contacts.jsx"; */ }
{/*import BookDetail from "./pages/BookDetail.jsx"; */ }
import ProtectedRoute from "./middlewares/ProtectedRoute.jsx";




const App = () => {

  return (

    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route element={<ProtectedRoute />} >

          {/* Se inserisco questi tre Route mi da solo file error 
    ho controllato più volte ma non riesco a capire del perchè non mi funziona */}
          {/*<Route path='/chi-siamo'element={<WeAre />} /> */}
          {/*<Route path='/contacts' element={<Contacts />} /> */}

        </Route>

        {/* <Route path='/detail/:asin' element={<BookDetail />} /> */}

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App
