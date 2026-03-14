import "./callToAction.css"

const callToAction = () => {
    return (
        <div className="callToAction">
            <div className="callToActionCard">
                <h2 className="callToActionTitle">Ready to get started?</h2>
                <p className="callToActionText">Book a free 30-minute trial session — no commitment. Let's figure out where you are and build a plan to get you where you want to be.</p>
                <div className="callToActionButtons">
                    <button className="callToActionButton"><a href="tel:+918802883698">Book Free Trial</a></button>
                </div>
            </div>
            <iframe className="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.4856620156756!2d77.07963097565678!3d28.464917175756774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d199a2f435073%3A0xfa71004892663220!2sIB%20Mathience%20Academy%20-%20IB%20MYP%2C%20IBDP%20%26%20IGCSE%20Tutoring%20%7C%20Gurgaon%2C%20New%20Delhi%2C%20Noida%20%26%20NCR.!5e0!3m2!1sen!2sin!4v1773486607422!5m2!1sen!2sin" width="600" height="450"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default callToAction