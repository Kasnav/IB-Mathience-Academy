import "./hero.css";
import Image from "./assets/classImage.jpeg"
import TeacherImage from "./assets/AshmitMishra.jpeg"
import Star from './assets/icons/star_filled.svg';

const Hero = () => {
    return (
        <div className="heroDiv">
            <div className="heroContainer">
                <div className="circle" id="circleTwo"></div>
                <img src={Image} alt="Classroom Image" className="tuitionCenter" />
                <div className="heroText">
                <div className="circle" id="circleOne"></div>
                    <div className="specialist"><p className="specialistText">IB Specialist - MYP to DP</p></div>
                    <h1 className="heroHeading">Make IB Maths & Sciences <div className="highlightText">Click.</div></h1>
                    <p className="heroSubheading">Personalised tutoring in Mathematics, Physics, and Chemistry — from MYP foundations all the way to DP & beyond. Build confidence, crush exams, and actually enjoy the journey. Taught by <div className="teacherName"> <div className="teacherImageContainer"><img className="teacherImage" src={TeacherImage} alt="" /></div> Ashmit Mishra.</div></p>
                    <button className="heroButton">Book a Free Trial</button>
                    <div className="stats">
                        <div className="highlightStat" id="firstChild" style={{ paddingLeft: 0 }}><p className="highlightedNumber">200+</p>Students Tutored</div>
                        <div className="highlightStat" id="secondChild"><p className="highlightedNumber">10+</p>Years Experience</div>
                        <div className="highlightStat" style={{ borderRight: 0 }}><p className="highlightedNumber">5 <img src={Star} alt="Star" className="star" /></p>Average Rating</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero