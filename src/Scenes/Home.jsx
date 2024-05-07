// ASSETS
import xl from "../Assets/backgrounds/bg-xl.png";
import lg from "../Assets/backgrounds/bg-lg.png";
import mdMid from "../Assets/backgrounds/bg-md-mid.png";
import md from "../Assets/backgrounds/bg-md.png";
import sm from "../Assets/backgrounds/bg-sm.png";
import mobile from "../Assets/backgrounds/bg-mobile.png";

const Home = () => {
  const backgroundSize = {
    xl: "w-screen h-screen hidden xs:hidden sm:hidden md:hidden mdMid:hidden lg:hidden xl:block",
    lg: "w-screen h-screen hidden xs:hidden sm:hidden md:hidden mdMid:hidden lg:block xl:hidden",
    mdMid:
      "w-screen h-screen hidden xs:hidden sm:hidden md:hidden mdMid:block lg:hidden xl:hidden",
    md: "w-screen h-screen hidden xs:hidden sm:hidden md:block mdMid:hidden lg:hidden xl:hidden",
    sm: "w-screen h-screen hidden xs:hidden sm:block md:hidden mdMid:hidden lg:hidden xl:hidden",
    mobile:
      "xs:block sm:hidden md:hidden mdMid:hidden lg:hidden xl:hidden xs:ml-6",
  };

  const styles = {
    background:
      " relative top-12 sm:top-0 flex justify-center xs:justify-start",
    container:
      " absolute xl:top-80 xl:right-52 lg:top-60 lg:right-32 md:top-60 md:right-20 sm:top-80 sm:right-8 xs:top-12 xs:right-6 top-72 grid gap-4 ",
    title:
      "text-black xl:text-5xl lg:text-3xl md:text-3xl sm:text-2xl xs:text-2xl text-3xl sm:text-left text-center row-start-1 z-10",
    subtitle:
      "text-black xl:text-2xl lg:text-lg md:text-lg sm:text-lg text-lg sm:text-md sm:text-left text-center row-start-2 z-10",
    highlighter: "absolute sm:w-4 xs:w-2 h-full bg-accent/30 -left-4 xs:left-0",
    tagline:
      "hidden xs:block sm:block md:block lg:block xl:block 2xl:block text-white xs:text-black font-bold font-cursive xl:text-xl lg:text-lg md:text-lg sm:text-lg z-50 ",
    taglineMobile:
      "block xs:hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden sm:text-white xs:text-black font-bold font-cursive text-lg z-50 row-start-3",
  };

  return (
    <div className={styles.background}>
      <div>
        <img src={xl} className={backgroundSize.xl} />
        <img src={lg} className={backgroundSize.lg} />
        <img src={mdMid} className={backgroundSize.mdMid} />
        <img src={md} className={backgroundSize.md} />
        <img src={sm} className={backgroundSize.sm} />
        <img src={mobile} className={backgroundSize.mobile} />
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>Isaac Cardow</h1>
        <h2 className={styles.subtitle}>Classical Guitarist</h2>
        <div className="relative mt-12 sm:mt-4 xs:mt-4 md:bg-black/5">
          <div className={styles.highlighter}></div>
          <small className={styles.tagline}>
            &quot;Stunning! <br /> You took us on a musical journey&quot;
          </small>
        </div>
        <small className={styles.taglineMobile}>
          &quot;Stunning! You took us on a musical journey&quot;
        </small>
      </div>
    </div>
  );
};

export default Home;
