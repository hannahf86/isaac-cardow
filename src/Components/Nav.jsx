// ASSETS
import logo from "../Assets/favicon.png";
import { HiHome, HiMail, HiNewspaper, HiMusicNote } from "react-icons/hi";
import { BiSolidBookBookmark } from "react-icons/bi";

const Nav = () => {
  const styles = {
    container: "hidden sm:hidden md:block lg:block fixed z-10",
    background:
      "fixed w-full flex flex-row justify-evenly items-center bg-white ",
    text: "text-black font-serif text-sm tracking-widest py-10 px-2 hover:text-neutral-200 hover:bg-accent hover:scale-110 cursor-pointer",
    button:
      "bg-accent rounded-lg py-4 px-12 m-1 text-neutral-200 my-6 font-serif text-md tracking-widest cursor-pointer hover:scale-110 active:bg-lightAccent ",
    mobileContainer: "block lg:hidden md:hidden sm:block z-50",
    mobileBackground:
      "flex flex-row w-full justify-evenly items-center fixed bottom-0 z-50 bg-nav z-10",
    icon: "text-black my-6 mx-6 ",
  };

  return (
    <>
      {/* DESKTOP */}
      <div className={styles.container}>
        <nav
          id="nav"
          className={styles.background}
          aria-label="navigation menu">
          <a href="/#music" aria-label="link to music information">
            <h2 className={styles.text}>MUSIC</h2>
          </a>

          <a href="/#about" aria-label="link to about">
            <h2 className={styles.text}>ABOUT</h2>
          </a>

          <a href="/" id="nav-link" aria-label="link to home page">
            <img src={logo} width={60} />
          </a>

          <a href="/#newsgrid" aria-label="link to news page">
            <h2 className={styles.text}>NEWS</h2>
          </a>

          <a href="/#contact" aria-label="link to contact page">
            <h2 className={styles.text}>CONTACT</h2>
          </a>
        </nav>
      </div>

      {/* MOBILE & TABLET */}
      <div className={styles.mobileContainer}>
        <nav
          className={styles.mobileBackground}
          aria-label="mobile navigation menu">
          <a aria-current="page" href="/" className="nav-link">
            <HiHome size={28} className={styles.icon} />
          </a>

          <a href="/#music" aria-current="page" className="nav-link">
            <HiMusicNote size={25} className={styles.icon} />
          </a>

          <a href="/#about" aria-current="page" className="nav-link">
            <BiSolidBookBookmark size={25} className={styles.icon} />
          </a>

          <a href="/#newsgrid" aria-current="page" className="nav-link">
            <HiNewspaper size={28} className={styles.icon} />
          </a>

          <a href="/#contact" aria-current="page" className="nav-link">
            <HiMail size={28} className={styles.icon} />
          </a>
        </nav>
      </div>
    </>
  );
};

export default Nav;
