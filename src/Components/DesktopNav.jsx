const DesktopNav = () => {
  const styles = {
    background: "fixed w-full flex flex-row justify-evenly bg-zinc-900 ",
    icons: "flex flex-row content-center text-neutral-200 my-12",
    text: "font-serif text-md ml-3 tracking-widest hover:text-sky-800 hover:scale-110 cursor-pointer",
  };

  return (
    <div>
      <div id="desktop-nav" className={styles.background}>
        <div className={styles.icons}>
          <a href="/">
            <h2 className={styles.text}>HOME</h2>
          </a>
        </div>

        <div className={styles.icons}>
          <a href="/#about">
            {" "}
            <h2 className={styles.text}>ABOUT</h2>
          </a>
        </div>

        <div className={styles.icons}>
          <a href="/#news">
            <h2 className={styles.text}>NEWS</h2>
          </a>
        </div>

        <div className={styles.icons}>
          <a href="/#calendar">
            <h2 className={styles.text}>CALENDAR</h2>
          </a>
        </div>

        <div className={styles.icons}>
          <a href="/#contact">
            {" "}
            <h2 className={styles.text}>CONTACT</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
