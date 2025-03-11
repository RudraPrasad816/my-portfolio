import { NavLinks } from "../common/NavLinks";

export const Home = () => {
  return (
    <div className="home">
      <section className="home-left">
        <h4>Hi! I am</h4>
        <h3>Rudra prasad Rath</h3>
        <p>Front-end Developer / Web Designer / React Developer</p>
        <p>Currently working full-time as a front-end developer at</p>
        <a href="https://www.purecode.ai" target="_blank">PureCode AI</a>
      </section>
      <section className="home-right">
        <NavLinks />
      </section>
    </div>
  );
};
