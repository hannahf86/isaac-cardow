import { HiChevronDown } from "react-icons/hi";
import isaac from "../assets/isaac.png";

const Landing = () => {
  const styles = {
    background: "h-screen bg-zinc-900",
    mobileContainer: "block sm:block md:hidden",
    mobileTitle: "text-zinc-200 text-5xl mx-8 text-center pt-20 tracking-wider",
    mobileSubtitle:
      "text-sky-800 font-bold text-center tracking-widest text-2xl pb-12 pt-6 ",
    imageContainer: "w-6/12 sm:w-7/12 m-auto mb-16 ",
    bio: "text-zinc-200 text-md mx-8 sm:text-center tracking-wide",
    more: "m-auto my-4",

    tabletContainer: "hidden md:block lg:hidden",
    tabletTitle: "text-zinc-200 text-7xl text-center pt-12 pl-8 tracking-wider",
    tabletSubtitle:
      "text-sky-800 font-bold text-center tracking-widest text-3xl pb-12 pt-6 pl-8",
    tabletImage: "w-6/12 sm:w-7/12 m-auto mb-8",

    desktopContainer:
      "hidden lg:block  pt-56 mx-24 lg:grid grid-cols-2 grid-rows-2",
    desktopImage: "lg:w-9/12 ml-8 lg:row-span-2",
    titleContainer: "w-10/12 lg:col-start-2 justify-start self-center",
    desktopTitle: "text-neutral-100 text-7xl tracking-widest my-4",
    desktopSubtitle: "text-sky-800 font-bold tracking-wider text-4xl pt-8",
    desktopBio:
      "w-10/12 text-zinc-200 text-xl lg:col-start-2 lg:row-start-2 self-auto pt-8",
  };

  return (
    <div id="/" className={styles.background} aria-label="home page">
      {/* MOBILE */}
      <div id="moblile-landing" className={styles.mobileContainer}>
        <div className={styles.mobileTitle}>
          <h1>ISAAC CARDOW</h1>
        </div>

        <div className={styles.mobileSubtitle}>
          <h2>Classical Guitarist</h2>
        </div>

        <div className={styles.imageContainer}>
          <img src={isaac} alt="Isaac Cardow, Classical Guitarist" />
        </div>

        <div className={styles.bio}>
          <p>
            Transforming your event with the elegance of the classical guitar
          </p>
        </div>

        <a href="/#about">
          <HiChevronDown size={30} color="white" className={styles.more} />
        </a>
      </div>

      {/* TABLET */}
      <div id="tablet-landing" className={styles.tabletContainer}>
        <div className={styles.tabletTitle}>
          <h1>ISAAC CARDOW</h1>
        </div>

        <div className={styles.tabletSubtitle}>
          <h2>Classical Guitarist</h2>
        </div>

        <div className={styles.tabletImage}>
          <img src={isaac} alt="Isaac Cardow, Classical Guitarist" />
        </div>

        <div className={styles.bio}>
          <p>
            Transforming your event with the elegance of the classical guitar
          </p>
        </div>

        <a href="/#about">
          <HiChevronDown size={30} color="white" className={styles.more} />
        </a>
      </div>

      {/* DESKTOP */}
      <div id="desktop-landing" className={styles.desktopContainer}>
        <div className={styles.desktopImage}>
          <img src={isaac} alt="Isaac Cardow, Classical Guitarist" />
        </div>

        <div className={styles.titleContainer}>
          <div className={styles.desktopTitle}>
            <h1>ISAAC CARDOW</h1>
          </div>
          <div className={styles.desktopSubtitle}>
            <h2>Classical Guitarist</h2>
          </div>
        </div>

        <div className={styles.desktopBio}>
          <p>
            Transforming your event with the elegance of the classical guitar
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
