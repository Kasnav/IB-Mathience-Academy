import "./about.css"
import target from "./assets/icons/target.svg"
import speech from "./assets/icons/speech.svg"
import clock from "./assets/icons/clock.svg"
import clipboard from "./assets/icons/clipboard.svg"

const about = () => {
    return (
        <div className="aboutSection" id="about">
            <div className="aboutDiv">
                <h2 className="aboutHeading">Why Students Choose Me</h2>
                <p className="subHeading">Tutoring that actually works — because it's designed around how IB students learn.</p>
            </div>
            <div className="aboutCards">
                <div className="aboutCard">
                    <div className="iconHolder">
                        <img src={target} alt="" />
                    </div>
                    <div className="aboutCardTextSection">
                        <h3 className="aboutCardHeading">IB-Specific Expertise</h3>
                        <p className="aboutCardText">Deep knowledge of IB curricula, assessment criteria, and what examiners look for.</p>
                    </div>
                </div>
                <div className="aboutCard">
                    <div className="iconHolder">
                        <img src={speech} alt="" />
                    </div>
                    <div className="aboutCardTextSection">
                        <h3 className="aboutCardHeading">Patient & Approachable</h3>
                        <p className="aboutCardText">No question is too basic. Sessions are relaxed, judgement-free, and built around your pace.</p>
                    </div>
                </div>
                <div className="aboutCard">
                    <div className="iconHolder">
                        <img src={clipboard} alt="" />
                    </div>
                    <div className="aboutCardTextSection">
                        <h3 className="aboutCardHeading">Proven Grade Boosts</h3>
                        <p className="aboutCardText">Students consistently improve 1–2 grade bands within a term of regular sessions.</p>
                    </div>
                </div>
                <div className="aboutCard">
                    <div className="iconHolder">
                        <img src={clock} alt="" />
                    </div>
                    <div className="aboutCardTextSection">
                        <h3 className="aboutCardHeading">Flexible Scheduling</h3>
                        <p className="aboutCardText">Online & in-person options. Evening and weekend slots to fit around your school timetable.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about