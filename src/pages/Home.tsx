import NewsLetterForm from "../components/UI/NewsLetterForm";

const Home = () => {
  return (
    <>
      <main>
        <section className="hero-section">
          <h1>Articles</h1>
          <div className="hero-container">
            <div>
              <img src="" alt="" />
            </div>
            <h1>Artificial Inteligence Beyond Imagination</h1>
            <p></p>
          </div>
        </section>

        <section className="blog-section">
          <div className="blogs-container"></div>
        </section>

        <div className="more-blogs-select-container">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>

        <section className="subscribe-section">
          <div className="subscribe-container">
            <div>
              <h1>Subscribe For New Content</h1>
              <p></p>
            </div>
            <div>
              <p>Email</p>
              <NewsLetterForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
