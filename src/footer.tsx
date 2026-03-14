import "./footer.css"
import Frame from './assets/icons/Frame.svg'

const footer = () => {
    return (
        <footer>
            <div className="footer">
                <h1 className="logo"> <img src={Frame} alt="" /> Mathience</h1>
                <p className="footerText">© 2026 IB Mathience Academy. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default footer