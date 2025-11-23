export default function About() {
  return (
    <div className="container">
      <h1 style={{ fontSize: "64px", fontWeight: "900" }}>About Me</h1>

      <div className="about-wrapper">
        <div className="about-text">
          <p>
            I’m an experienced Freelance Social Media Consultant based in Ringwood,
            near the beautiful New Forest National Park. My interest in social
            media marketing sparked during my University placement year at Xerox.
          </p>

          <p>
            I later worked in the hospitality industry before joining a London
            social media agency. In 2013, I started my own freelance business,
            which has led me on an exciting journey working with wonderful clients
            and helping them meet their social media objectives.
          </p>
        </div>

        <img
          src="/mnt/data/c8e26203-7157-4989-9919-bea364ee1612.png"
          alt="Profile"
          className="photo"
        />
      </div>
    </div>
  );
}
