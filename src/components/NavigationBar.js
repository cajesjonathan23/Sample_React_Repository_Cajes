import NavBar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const NavigationBar = () =>{
    return(
        <>
            <NavBar className="bg-warning">
                <NavBar.Brand>Anime List</NavBar.Brand>
            </NavBar>
        </>
    );
}

export default NavigationBar;