import "./header.css"
import {useState} from "react"
import Frame from './assets/icons/Frame.svg'
import menu from './assets/icons/menu.svg'

const Header = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <header>
            <div className="headerDiv">
                <h1 className="logo"> <img src={Frame} alt="" /> Mathience</h1>
                <ul className="navigationLinks">
                    <li><a href="#subjects">Subjects</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                </ul>
                <button className="headerButton" id="mainHeaderButton"><a href="tel:+918802883698">Book a Free Trial</a></button>
                <button className="hamburgerButton" onClick={() => setShowMobileMenu(!showMobileMenu)}> <img src={menu} alt="Menu" width="20px"/> </button>
            </div>
            {showMobileMenu && (
                <div className="mobileMenu">
                    <ul className="mobileNavigationLinks">
                        <li><a href="#subjects" onClick={() => setShowMobileMenu(false)}>Subjects</a></li>
                        <li><a href="#about" onClick={() => setShowMobileMenu(false)}>About</a></li>
                        <li><a href="#testimonials" onClick={() => setShowMobileMenu(false)}>Testimonials</a></li>
                    </ul>
                    <button className="headerButton" onClick={() => setShowMobileMenu(false)}><a href="tel:+918802883698">Book a Free Trial</a></button>
                </div>
            )}
        </header>
    )
}

export default Header