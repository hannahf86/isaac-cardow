// RRD
import { NavLink, Outlet } from "react-router-dom";

// ASSETS
import logo from "../assets/favicon.png";
import { HiHome, HiCalendar, HiMail } from "react-icons/hi";
import { BiSolidBookBookmark } from "react-icons/bi";

const Nav = () => {
  const styles = {
    container: "hidden sm:hidden md:block lg:block",
    background:
      "fixed w-full flex flex-row justify-evenly items-center bg-white ",
    text: "text-black font-serif text-md tracking-widest py-12 px-2 hover:text-neutral-200 hover:bg-accent hover:scale-110 cursor-pointer",
    button:
      "bg-accent rounded-lg py-4 px-12 m-1 text-neutral-200 my-8 font-serif text-md tracking-widest cursor-pointer hover:scale-110 active:bg-lightAccent ",
    mobileContainer: "block lg:hidden md:hidden sm:block",
    mobileBackground:
      "flex flex-row w-full justify-evenly items-center fixed bottom-0 z-50 bg-white z-10",
    icon: "text-black my-6 mx-6 ",
  };

  return (
    <>
      {/* DESKTOP */}
      <div className={styles.container}>
        <div id="nav" className={styles.background}>
          <NavLink to="/" id="nav-link">
            <h2 className={styles.text}>HOME</h2>
          </NavLink>

          <NavLink to="about">
            <h2 className={styles.text}>ABOUT</h2>
          </NavLink>

          <NavLink to="/" id="nav-link">
            <img src={logo} width={60} />
          </NavLink>

          <NavLink to="calendar">
            <h2 className={styles.text}>CALENDAR</h2>
          </NavLink>

          <NavLink to="contact">
            <button className={styles.button}>BOOK</button>
          </NavLink>
        </div>
      </div>

      {/* MOBILE & TABLET */}
      <div className={styles.mobileContainer}>
        <div className={styles.mobileBackground}>
          <NavLink aria-current="page" className="nav-link">
            <HiHome size={28} className={styles.icon} />
          </NavLink>

          <NavLink to="about" aria-current="page" className="nav-link">
            <BiSolidBookBookmark size={25} className={styles.icon} />
          </NavLink>

          <NavLink to="calendar" aria-current="page" className="nav-link">
            <HiCalendar size={28} className={styles.icon} />
          </NavLink>

          <NavLink to="contact" aria-current="page" className="nav-link">
            <HiMail size={28} className={styles.icon} />
          </NavLink>
        </div>
      </div>

      {/* DO NOT FORGET OUTLET!! */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Nav;
