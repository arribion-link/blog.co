import NewsLetterForm from "../components/UI/NewsLetterForm"; ""

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <h1>Articles</h1>
        <div className="hero-container">
          <div>
            <img src="" alt="" />
          </div>
          <h1>Artificiak Inteligence Beyond Imagination</h1>
          <p></p>
        </div>
      </section>

      <section className="blog-section">
        <div className="blogs-container"></div>
      </section>

      <div className="more-blogs">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
      </div>

      <section className='subscribe-section'>
        <div className="subscribe-container">
          <div>
            <h1>Subscribe For New Content</h1>
            <p></p>
          </div>
          <div>
            <p>Email</p>
            <NewsLetterForm/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home
