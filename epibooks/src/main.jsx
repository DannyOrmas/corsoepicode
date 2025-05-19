import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "./component/contexts/ThemeContexts"
import { SearchBookProvider } from "./component/contexts/SearchBookContext"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <SearchBookProvider>
        <App />
      </SearchBookProvider>
    </ThemeProvider>
  </StrictMode>,
)
