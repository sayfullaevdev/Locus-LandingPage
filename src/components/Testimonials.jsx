import TestinonialKlamby from "/img/Testimonial-KLAMBY.png"
import TestinonialMoyoutfit from "/img/Testimonial-Moyoutfit.svg"
import TestinonialZalora from "/img/Testimonial-ZALORA.png"
import TestinonialGeulis from "/img/Testimonial-Geulis.png"
import TestinonialPeople from "/img/nnn.png"


function Testimonials() {
  return (
  
<div className="container">

    <section className="testimonial-section">
      <h2 className="testimonial-title">Testimonial</h2>
      <div className="testimonial-logos">
        <img src={TestinonialKlamby} alt="KLAMBY" />
        <img src={TestinonialMoyoutfit} alt="Mayoutfit" />
        <img className="zalora" src={TestinonialZalora} alt="Zalora" />
        <img src={TestinonialGeulis} alt="Geulis" />
      </div>

      <div className="testimonial-content">

        <div className="testimonial-image">
          <img src={TestinonialPeople} alt="Client" className="img_nnn" />
        </div>


        <div className="testimonial-text">
          <div className="testimonial-stats">
            <div>
              <p className="stat-number">105</p>
              <p className="stat-label">projects done</p>
            </div>
            <div>
              <p className="stat-number">12</p>
              <p className="stat-label">years of experience</p>
            </div>
            <div>
              <p className="stat-number">10+</p>
              <p className="stat-label">big company partnership</p>
            </div>
          </div>

          <blockquote className="testimonial-quote">
            “Not able to tell you how happy I am with interior design. Interior
            design has completely surpassed our expectations. Interior design
            saved my business. Interior design is worth much more than I paid.”
          </blockquote>
          <p className="testimonial-author">– Roscoe</p>
        </div>
      </div>
    </section>
</div>
  );
}

export default Testimonials;
