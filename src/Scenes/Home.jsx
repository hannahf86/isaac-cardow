// ASSETS
import xl from "../Assets/Backgrounds/bgxl.png";
import lg from "../Assets/Backgrounds/bglg.png";
import mdMid from "../Assets/Backgrounds/bgmdmid.png";
import md from "../Assets/Backgrounds/bgmd.png";
import sm from "../Assets/Backgrounds/bgsm.png";
import xs from "../Assets/Backgrounds/bgxs.png";
import logo from "../Assets/favicon.png";

// ICONS
import { HiChevronDown } from "react-icons/hi";

const Home = () => {
  const backgroundSize = {
    xl: "w-screen h-screen hidden xs:hidden sm:hidden md:hidden mdMid:hidden lg:hidden xl:block",
    lg: "w-screen h-screen hidden xs:hidden sm:hidden md:hidden mdMid:hidden lg:block xl:hidden",
    mdMid:
      "w-screen h-screen hidden xs:hidden sm:hidden md:hidden mdMid:block lg:hidden xl:hidden",
    md: "w-screen h-screen hidden xs:hidden sm:hidden md:block mdMid:hidden lg:hidden xl:hidden",
    sm: "w-screen h-screen hidden xs:hidden sm:block md:hidden mdMid:hidden lg:hidden xl:hidden",
    xs: "w-screen m-auto hidden xs:block sm:hidden md:hidden mdMid:hidden lg:hidden xl:hidden px-6 mb-8 mt-2",
  };

  const styles = {
    background:
      "relative md:top-12 sm:top-0 flex justify-center xs:justify-start h-screen",
    container:
      "absolute xl:top-80 xl:right-52 lg:top-60 lg:right-32 md:top-60 md:right-20 sm:top-80 sm:right-8 xs:inset-0 xs:flex xs:justify-center xs:top-80 grid gap-4",
    title:
      "text-accent xs:text-5xl xs:pt-16 xs:pb-4 xl:text-5xl lg:text-3xl md:text-3xl sm:text-2xl xs:text-2xl text-3xl sm:text-left text-center row-start-1 z-10",
    subtitle:
      "text-accent xs:text-4xl xl:text-2xl lg:text-lg md:text-lg sm:text-lg text-lg sm:text-md sm:text-left text-center row-start-2 z-10",
    highlighter:
      "xs:hidden absolute sm:w-4 xs:w-2 h-full bg-accent/30 -left-4 ",
    tagline:
      "hidden xs:text-center xs:pt-8 xs:text-2xl xs:block sm:block md:block lg:block xl:block 2xl:block text-white xs:text-black font-bold font-cursive xl:text-xl lg:text-lg md:text-lg sm:text-lg z-50 leading-10",
    callToAction:
      "bg-accent/80 text-white uppercase rounded-lg mx-32 py-2 px-4 font-serif absolute xs:flex xs:flex-col xs:justify-center xs:bottom-28 xs:items-center xs:inset-x-0",
    logo: "m-auto py-2",
  };

  return (
    <div className={styles.background} id="/">
      <div>
        <img src={logo} width={50} className={styles.logo} />
        <img src={xl} className={backgroundSize.xl} />
        <img src={lg} className={backgroundSize.lg} />
        <img src={mdMid} className={backgroundSize.mdMid} />
        <img src={md} className={backgroundSize.md} />
        <img src={sm} className={backgroundSize.sm} />
        <img src={xs} className={backgroundSize.xs} />
      </div>

      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>Isaac Cardow</h1>
          <h1 className={styles.subtitle}>Classical Guitarist</h1>

          <div className="relative mt-12 sm:mt-4 xs:mt-4 md:bg-black/5">
            <div className={styles.highlighter}></div>
            <h2 className={styles.tagline}>
              Perfect classical guitar music <br />
              for your event
            </h2>
          </div>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <a href="/#music">
        <div className={styles.callToAction}>
          <h3>Music List</h3>
          <HiChevronDown />
        </div>
      </a>
    </div>
  );
};

export default Home;
