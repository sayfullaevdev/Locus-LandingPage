import tovar from "/img/right_blok_img.png";
import figure from "/img/figure.png"

function Hero() {
  return (
    <div className="container">

      <section className="promo">

        <div className="left_block">
          <h2 className="title">Get the inspiration of interior design here</h2>
          <p className="paragph">architecture not only about engineering, it even
            lands to art and aesthetics. With us, you will get
            a residentical design with an extraordinary touch
            of art.</p>
          <button className="started">Get Started</button>
        </div>

        <div className="right_block">
          <div className="figure">

            <img className="figure_bg" src={figure} alt="" />
            <img className="tovar" src={tovar} alt="" />
          </div>
        </div>

      </section>

    </div>
  );
}

export default Hero;
