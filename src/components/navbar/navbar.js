import "./navbar.scss"

function Navbar() {

    
    return (
        <div className="navbar navbarHidden">
            <div className="menu">
                <a className="menuItem" href="#about">about</a>
                <a className="menuItem" href="#portfolio">Portfolio</a>
                <a className="menuItem" href="#contact">contact</a>
            </div>
        </div>
        
    )
}
export default Navbar