function AboutHighlight() {
  return (
    <>
       <div className="about-highlight about-highlight-flex">
        <div className="about-highlight-text">
          <h3>Our Mission</h3>
          <p>
            At Custom Boxing Rings UK, we create high-end, fully customised ring dressings at a price that works for real fight gyms and professional promoters alike. Whether you’re running a grassroots Muay Thai academy or hosting a major combat sports event, we’re here to make your ring stand out.
          </p>
          <p>
            We specialise in complete custom setups—canvas design, corner pads, skirts, rope covers, and more. Every piece is crafted with durability, clean aesthetics, and maximum brand impact in mind. From everyday training rings to high-level event setups, our products are built to perform and made to impress.
          </p>
          <h4>Featured At:</h4>
          <div className="featured-list">
            <div>Hitman Fight League</div>
            <div>Top King Europe Series</div>
            <div>Ultimate Fight Night</div>
            <div>The Hideout Arena</div>
            <div>The PBL Boxing</div>
            <div>Right 2’Fight Boxing Show</div>
            <div>Infightstyle Junior League</div>
            <div>…and many more gyms and promotions across the UK and Europe.</div>
          </div>
          <p>
            We’re passionate about supporting the growth of combat sports by helping gyms and promoters bring a professional, polished look to every ring—without breaking the budget.
          </p>
          <blockquote style={{fontWeight:600, marginTop:'1.2em', fontStyle:'italic'}}>
            Custom Boxing Rings UK – Built for fighters. Designed for promoters. Priced for everyone.
          </blockquote>
        </div>
      </div>
      <div className="enquire-button-container">
        <a href="https://wa.me/447931239316" className="enquire-btn" target="_blank" rel="noopener noreferrer">Enquire Now</a>
        <Link to="/products" className="gallery-btn">View Gallery</Link>
      </div>
    </>
  );
}

export default AboutHighlight;