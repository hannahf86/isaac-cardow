const About = () => {
  const styles = {
    background: "h-full bg-white",
    mobileContainer: "md:hidden lg:hidden",
    mobileTitle:
      "font-sans text-black text-5xl md:text-5l text-center py-12 tracking-widest",
    mobileText: "font-serif text-black mx-8",

    desktopContainer: "sm:block md:block hidden",
    desktopTitle: "font-sans text-black text-2xl text-left pb-8 pt-40 ml-40",
    desktopText: "font-serif text-black mx-40 text-base leading-loose",
    button: "bg-accent px-6 py-2 rounded-lg mt-12 text-white",
  };

  return (
    <div id="about" className={styles.background} aria-label="about page">
      {/* MOBILE & TABLET */}
      <div id="mobile-about" className={styles.mobileContainer}>
        <h1 className={styles.mobileTitle}>Bio</h1>
        <p className={styles.mobileText}>
          Isaac is a talented and award winning classical guitarist, whose
          virtuosity has captivated audiences across the UK.
        </p>

        <p>
          He began his journey into the world of classical guitar at an early
          age, studying with Hannah Feehan in York. In September 2024, Isaac
          will begin studying under the expertise of Michael Lewin and Stephen
          Goss at The Royal Academy of Music. He was awarded a scholarship from
          RAM, demonstrating his passion and commitment to mastery of his
          instrument.
        </p>
        <p>
          <br />
          Isaac will bring elegance and provie a refined ambience to your event,
          in a professional and experienced manner.
        </p>
      </div>

      {/* DESKTOP */}
      <div id="desktop-about" className={styles.desktopContainer}>
        <div className={styles.desktopTitle}>
          <h1>About</h1>
        </div>

        <div className={styles.desktopText}>
          <p>
            Isaac is a talented and award winning classical guitarist, whose
            virtuosity has captivated audiences across the UK.
          </p>

          <p className="pt-4">
            He began his journey into the world of classical guitar at an early
            age, studying with Hannah Feehan in York. In September 2024, Isaac
            will begin studying under the expertise of Michael Lewin and Stephen
            Goss at The Royal Academy of Music. He was awarded a scholarship
            from RAM, demonstrating his passion and commitment to mastery of his
            instrument.
          </p>
          <p className="pt-4">
            Isaac will bring elegance and provie a refined ambience to your
            event, in a professional and experienced manner.
          </p>

          <button className={styles.button}>Book now</button>
        </div>
      </div>

      <div className="pb-20"></div>
    </div>
  );
};

export default About;
