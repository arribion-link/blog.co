import NewsLetterForm from "../components/UI/NewsLetterForm";
import BlogCard from "../components/UI/BlogCard";
import Header from "../components/UI/Header";
const Home = () => {
  return (
    <>
      <Header />
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

        {/* LANDING PAGE BLOGS  */}
        <section className="blog-section p-5 bg-gray-500 mx-8">
          <div className="blog-card-container">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
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
            <div className="text-start">
              <h1 className="font-bold text-4xl">Subscribe For New Content</h1>
              <p>
                By becomming a member of Blog.co you get access to all our
                premium contents.
              </p>
            </div>
            <div>
              <NewsLetterForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
