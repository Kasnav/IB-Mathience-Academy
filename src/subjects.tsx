import "./subjects.css"
import atom from "./assets/icons/atom.svg"
import math from "./assets/icons/math.svg"
import flask from "./assets/icons/flask.svg"

const subjects = () => {
    return (
        <div className="subjects" id="subjects">
            <div className="subjectsDiv">
                <h2 className="sectionHeading">Subjects I Teach</h2>
                <p className="subHeading">Covering the full IB continuum — whether you're starting MYP or pushing for a 7 in DP.</p>
            </div>
            <div className="subjectCards">
                <div className="subjectCard">
                    <div className="subject">
                        <div className="subjectIcon">
                            <img src={atom} alt="Atom Icon" className="icon" />
                        </div>
                        <h3 className="subjectHeading">Physics</h3>
                    </div>
                    <p className="gradeBracket">MYP · DP SL & HL</p>
                    <p className="description">Understand the 'why' behind every formula. Develop strong conceptual thinking alongside exam technique.</p>
                </div>
                <div className="subjectCard">
                    <div className="subject">
                        <div className="subjectIcon" id="mathIcon">
                            <img src={math} alt="Math Icon" className="icon" />
                        </div>
                        <h3 className="subjectHeading">Mathematics</h3>
                    </div>
                    <p className="gradeBracket" id="mathGradeBracket">MYP 1–5 · DP AA & AI (SL/HL)</p>
                    <p className="description">From algebra fundamentals to calculus mastery. Build problem-solving intuition with clear, structured explanations.</p>
                </div>
                <div className="subjectCard">
                    <div className="subject">
                        <div className="subjectIcon">
                            <img src={flask} alt="Flask Icon" className="icon" />
                        </div>
                        <h3 className="subjectHeading">Chemistry</h3>
                    </div>
                    <p className="gradeBracket">MYP · DP SL & HL</p>
                    <p className="description">Make sense of reactions, bonding, and stoichiometry. Hands-on problem practice to lock in understanding.</p>
                </div>
            </div>
        </div>
    );
}

export default subjects;