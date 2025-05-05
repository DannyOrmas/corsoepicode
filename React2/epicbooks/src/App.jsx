import Footer from "./componets/navigation/footer/Footer"
import Navigation from "./componets/navigation/Navigation"
import Welcome from "./componets/navigation/welcome/Welcome"
import BooksContainer from "./componets/booksContainer/booksContainer"

const App = () => {

  return (
    <>
      <Navigation />
      <main className="px-4 py-3">
      <Welcome />
      <BooksContainer />
      </main>
      <Footer />
    </>
  )
}

export default App
