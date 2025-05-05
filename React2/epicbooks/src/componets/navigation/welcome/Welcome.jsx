import { Alert } from "react-bootstrap"

const Welcome = () => {
    return (
      <div className="container mb-4">
        <h1 className="mb-4" id="site-title" >EpicBooks</h1>
        <Alert variant='info'>
         Welcome!
        </Alert>
      </div>
    )
}

export default Welcome