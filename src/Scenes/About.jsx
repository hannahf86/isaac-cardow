const About = () => {
  const styles = {
    background: "h-full bg-white",
    container:
      "px-16 sm:px-16 md:mx-12 lg:mx-12 xl:mx-40 pt-40 xs:pt-12 sm:pt-16 md:pt-40 lg:pt-40 xl:pt-40 ",
    title: "font-sans text-black text-3xl text-left pb-8 ",
    text: "font-serif text-black text-base leading-loose text-justify",
    button: "bg-accent px-6 py-2 rounded-lg mt-12 text-white",
  };

  return (
    <div id="about" className={styles.background} aria-label="about page">
      {/* DESKTOP */}
      <div id="desktop-about" className={styles.container}>
        <div className={styles.title}>
          <h1>About</h1>
        </div>

        <div className={styles.text}>
          <p>
            Isaac is a talented and award winning classical guitarist, whose
            virtuosity has captivated audiences across the UK.
          </p>

          <p className="pt-4">
            <br />
            He began his journey into the world of classical guitar at an early
            age, studying with{" "}
            <a
              href="https://www.hannahfeehan.com"
              rel="noreferrer"
              target="_blank"
              className="active:text-accent hover:text-accent hover:font-bold sm:text-accent xs:text-accent sm:font-bold xs:font-bold">
              Hannah Feehan
            </a>{" "}
            in York. <br />
            <br />
            In September 2024, Isaac will begin studying under the expertise of
            Michael Lewin and Stephen Goss at The Royal Academy of Music. He was
            awarded a scholarship from RAM, demonstrating his passion and
            commitment to the mastery of his instrument.
          </p>
          <p className="pt-4">
            <br />
            As an experienced performer, despite his young age, Isaac will bring
            elegance and provie a refined ambience to your event, in a
            professional and experienced manner.
          </p>
          <div className="flex justify-center mt-8">
            <button className={styles.button}>Book now</button>
          </div>
        </div>
      </div>

      <div className="pb-20"></div>
    </div>
  );
};

export default About;
