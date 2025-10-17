import { FaArrowRight } from "react-icons/fa";

import services from "../data/services";

const Services = () => {
  return (
    <>
      <section className="service-hero">
        <div>
          <h1 className="font-bold font-5xl text-blue-800">
            Empowering Your Journey Through <br /> Content, Creativity, and
            Connection.
          </h1>
          <p>
            Welcome to the heart of what we offer—where ideas meet impact.
            Whether you're here to explore insightful articles, discover helpful
            resources, or engage with a vibrant community, our services are
            designed to elevate your experience. From personalized content and
            expert advice to interactive tools and exclusive member perks, we’re
            here to support your goals and spark your curiosity.
          </p>
        </div>
      </section>
      <section className="services-s-conttainer">
        <h1>📝 Core Services</h1>
        <div className="services-container">
          {
            services.map((service) => (
              <div key={service.id} className="service-card">
                <div>
                  {service.icon}
                </div>
                <div>
                  <h2>{service.title}</h2>
                  <p> {service.description} </p>
                  <p>
                    learn more <FaArrowRight />{" "}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </>
  );
};

export default Services;
