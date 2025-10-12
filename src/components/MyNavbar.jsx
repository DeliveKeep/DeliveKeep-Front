import {Container, Navbar} from "react-bootstrap";

export default function MyNavbar() {
    return (
        <>
            <Navbar className="bg-dark">
                <Container >
                    <Navbar.Brand className='text-white' href="/">Delive Keep</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className='text-white'>
                            Olá, <a>Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}