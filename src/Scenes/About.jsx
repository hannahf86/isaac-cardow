const About = () => {
  const styles = {
    background: "h-full bg-zinc-900",
    mobileContainer: "md:hidden lg:hidden",
    mobileTitle:
      "font-sans text-neutral-100 text-5xl md:text-5l text-center py-12 tracking-widest",
    mobileText: "font-serif text-neutral-100 mx-8",

    desktopContainer: "sm:block md:block hidden",
    desktopTitle:
      "font-sans text-neutral-100 text-5xl text-center py-12 pt-40 tracking-widest",
    desktopText: "font-serif text-neutral-100 mx-60 text-lg leading-loose",
    button:
      "bg-zinc-200 px-6 py-2 rounded-lg border-4 border-sky-800 mt-4 text-zinc-900",
  };

  return (
    <div id="about" className={styles.background}>
      {/* MOBILE & TABLET */}
      <div id="mobile-about" className={styles.mobileContainer}>
        <h1 className={styles.mobileTitle}>Bio</h1>
        <p className={styles.mobileText}>
          Isaac is a talented and award winning classical guitarist, whose
          virtuosity has captivated audiences across the UK.
        </p>

        <p>
          <br />
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
          <p className=" pt-12">
            Isaac is a talented and award winning classical guitarist, whose
            virtuosity has captivated audiences across the UK.
          </p>

          <p>
            <br />
            He began his journey into the world of classical guitar at an early
            age, studying with Hannah Feehan in York. In September 2024, Isaac
            will begin studying under the expertise of Michael Lewin and Stephen
            Goss at The Royal Academy of Music. He was awarded a scholarship
            from RAM, demonstrating his passion and commitment to mastery of his
            instrument.
          </p>
          <p>
            <br />
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
