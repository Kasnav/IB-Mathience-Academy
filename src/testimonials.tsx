import "./testimonials.css"
import star from "./assets/icons/starRating.svg"

const testimonials = () => {
    return (
        <div className="testimonials" id="testimonials">
            <div className="testimonialsDiv">
                <h2 className="testimonialsHeading">What Students and Parents Say</h2>
                <p className="subHeading">Real results from real IB students.</p>
            </div>
            <div className="testimonialCards">
                <div className="testimonialCard">
                    <div className="stars">
                        <img src={star} width="19px" height="19px" alt="star rating" />
                        <img src={star} width="19px" height="19px" alt="star rating" />
                        <img src={star} width="19px" height="19px" alt="star rating" />
                        <img src={star} width="19px" height="19px" alt="star rating" />
                        <img src={star} width="19px" height="19px" alt="star rating" />
                    </div>
                    <p className="review">"Ashmit sir is teaching my son from last 6 years now, and I must say that he is an excellent teacher with a vast knowledge of the subject. His ability to break down complex problems into simple steps is extremely helpful for the kids to understand the concepts. He also connects very well with the kids, making the learning process very comfortable for them, which eventually leads to gaining further interest in the subject as well as achieving great results."</p>
                    <h3 className="reviewerName">Priyanka Sharma</h3>
                    <p className="grade">Parent of Physics HL & Math AA HL 7/7 scorer</p>
                </div>
                <div className="testimonialCard">
                    <div className="stars">
                        <img src={star} width="19px" height="19px" alt="star rating" />
                        <img src={star} width="19px" height="19px" alt="star rating" />
                        <img src={star} width="19px" height="19px" alt="star rating" />
                        <img src={star} width="19px" height="19px" alt="star rating" />
                        <img src={star} width="19px" height="19px" alt="star rating" />
                    </div>
                    <p className="review">"Maths classes with Ashmit sir have been quite helpful for me as I have an increasing pattern in my grades in Extended Mathematics and my confidence when it comes to my math topics. He is extremely patient and guides students through questions precisely and ensures that they understand all the topics being covered. Highly recommended for IB MYP maths."</p>
                    <h3 className="reviewerName">Devyani Sanapala</h3>
                    <p className="grade">MYP 4 - Extended Maths</p>
                </div>
                <div className="testimonialCard">
                    <div className="stars">
                        <img src={star} width="19px" height="19px" alt="star rating" />
                        <img src={star} width="19px" height="19px" alt="star rating" />
                        <img src={star} width="19px" height="19px" alt="star rating" />
                        <img src={star} width="19px" height="19px" alt="star rating" />
                        <img src={star} width="19px" height="19px" alt="star rating" />
                    </div>
                    <p className="review">"Great teacher and mentor. Always there for you and the way Ashmit sir explains every topic by breaking it down helps in understanding them better and have a deeper understanding. Highly recommended if looking for good IB tutors!!"</p>
                    <h3 className="reviewerName">Alman Bansal</h3>
                    <p className="grade">IB CP Valedictorian</p>
                </div>
            </div>
        </div>
    )
}

export default testimonials