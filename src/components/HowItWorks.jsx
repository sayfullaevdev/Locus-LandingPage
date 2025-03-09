import content from "/img/worksContent.png"
import MissionImg from "/img/MissionImg.png"

function HowItWorks() {
  return (
    <div className="container">
      <section className="works">
        <h2 className="works_title">How it works</h2>
        <p className="works_paragraph">
          Spice up your space even simpler <br />
          than you think
        </p>

        <div className="works_content">
          <div className="works_image">
            <img src={content} alt="Interior" className="image" />
            <button className="play_button">
              <span className="play_icon">▶</span>
            </button>
          </div>
          <div className="works_text">
            <p>
              We provide design and build for commercial building, interior and
              furniture to improve the better life.
            </p>
            <a href="#" className="see_video">
              SEE VIDEO
            </a>
          </div>
        </div>

        <div className="mission">

          <div className="mission_left">
            <img src={MissionImg} alt="" />
          </div>


          <div className="mission_right">
            <h2 className="mission_title">
              Our mission is to
              deliver aesthetic visual
              for your home
            </h2>

            <p className="mission_paragraph">
              By applying bacis psychology principles,
              we are going to explain how perception
              works and how we can use this understanding
              to maximise the space that we occupy in
              our homes.
            </p>
          </div>

        </div>


      </section>
    </div>
  );
}

export default HowItWorks;
