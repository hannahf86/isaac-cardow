// ASSETS
import xl from "../Assets/Backgrounds/bgxl.png";
import lg from "../Assets/Backgrounds/bglg.png";
import mdMid from "../Assets/Backgrounds/bgmidmd.png";
import md from "../Assets/Backgrounds/bgmd.png";
import sm from "../Assets/Backgrounds/bgsm.png";
import xs from "../Assets/Backgrounds/bgxs.png";
import logo from "../Assets/favicon.png";

const Home = () => {
  const backgroundSize = {
    xl: "w-screen hidden xs:hidden sm:hidden md:hidden mdMid:hidden lg:hidden xl:block",
    lg: "w-screen hidden xs:hidden sm:hidden md:hidden mdMid:hidden lg:block xl:hidden",
    mdMid:
      "w-screen hidden xs:hidden sm:hidden md:hidden mdMid:block lg:hidden xl:hidden",
    md: "w-screen hidden xs:hidden sm:hidden md:block mdMid:hidden lg:hidden xl:hidden",
    sm: "w-screen hidden xs:hidden sm:block md:hidden mdMid:hidden lg:hidden xl:hidden px-6 pt-24",
    xs: "w-screen block xs:block sm:hidden md:hidden mdMid:hidden lg:hidden xl:hidden px-6 pt-24",
  };

  const styles = {
    background:
      "flex flex-col h-screen md:top-12 sm:top-0 flex justify-center xs:justify-start ",
    logo: "absolute md:hidden mdMid:hidden lg:hidden xl:hidden top-8 xs:top-6 flex self-center",
    container: "flex flex-col",
    title: "text-accent text-5xl sm:text-3xl text-center pt-8 pb-4",
    subtitle: "text-accent text-3xl sm:text-xl text-center pb-4",
    tagline:
      "text-black text-2xl mx-12 xs:mx-16 sm:text-lg text-center font-cursive py-6",
    actionContainer: "flex justify-between self-center mx-12 my-8 xs:mt-4",
    buttons:
      "bg-accent rounded-lg p-4 mx-8 text-white font-serif uppercase font-light tracking-wider",
  };

  return (
    <div className={styles.background} id="/">
      <img src={logo} width={50} className={styles.logo} />

      <div className="w-screen md:pt-28">
        <img src={xl} className={backgroundSize.xl} />
        <img src={lg} className={backgroundSize.lg} />
        <img src={mdMid} className={backgroundSize.mdMid} />
        <img src={md} className={backgroundSize.md} />
        <img src={sm} className={backgroundSize.sm} />
        <img src={xs} className={backgroundSize.xs} />
      </div>

      <div className={styles.container}>
        <h1 className={styles.title}>Isaac Cardow</h1>
        <h1 className={styles.subtitle}>Classical Guitarist</h1>

        <h2 className={styles.tagline}>
          Perfect classical guitar music for your event or wedding
        </h2>
      </div>

      {/* CALL TO ACTION */}
      <div className={styles.actionContainer}>
        <a href="/#music">
          <button className={styles.buttons}>Music List</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
