import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react'
import { ThemeContexts } from '../contexts/ThemeContexts';
import {Link} from "react-router-dom";

const Navigation = () => {
    const { isBookLoading } = useContext(ThemeContexts)
    return (
        <div>
             <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Link
                    className='navbar-brand'
                    to='/'
                >
                    Epibooks
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link
                            className='nav-link'
                            to='/chi-siamo'
                        >
                            Who we are
                        </Link>
                        <Link className='nav-link' to='/contacts'>
                            Contacts
                        </Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation
