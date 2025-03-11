import {NavLinks} from '../common/NavLinks'

export const Works = () => {
  return (
    <div className="works">
      <section className="works-left">
        <h3>My Works</h3>
        <p>
          This is a showcase of my best work in a variety of fields including
          Front-end development, Back-end development, Web Design.
        </p>
        <p>
          The world of digital design and development is constantly evolving and
          so has my role over the last 2 years. I'm still learning and gaining
          new skills every day.
        </p>
      </section>
      <section className="works-right">
        <NavLinks /> 
      </section>
    </div>
  );
};
