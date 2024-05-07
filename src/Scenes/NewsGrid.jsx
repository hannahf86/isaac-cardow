// IMAGES
import nyge from "../Assets/imgs/nyge.png";
import rbc from "../Assets/imgs/rbc.png";
import ram from "../Assets/imgs/ram.png";
import trophies from "../Assets/imgs/trophies.png";
import recital from "../Assets/imgs/recital.png";
import rcs from "../Assets/imgs/rsc.png";

const NewsGrid = () => {
  const desktopStyles = {
    background: "h-full bg-white",
    container: "sm:block md:block hidden mx-60 mb-20 flex justify-between",
    title: "font-sans text-black text-2xl text-center pb-8 pt-40 ",
    grid: "grid grid-cols-3 gap-x-40 gap-y-20",
    newsCard:
      "shadow-lg shadow-slate-300 rounded-md py-8 flex-col justify-center",
    newsTitle: "font-sans xl:text-md text-center pt-4 tracking-wider font-bold",
  };

  return (
    <div id="newsgrid" className={desktopStyles.background}>
      <div className={desktopStyles.container}>
        <h1 className={desktopStyles.title}>News</h1>
        <div id="grid" className={desktopStyles.grid}>
          {/* ITEM 01 */}
          <div className={desktopStyles.newsCard}>
            <img src={recital} width={300} className="m-auto" loading="lazy" />
            <h2 className={desktopStyles.newsTitle}>Summer Recital Series</h2>
          </div>

          {/* ITEM 06 */}
          <div className={desktopStyles.newsCard}>
            <img src={nyge} width={300} className="m-auto" loading="lazy" />
            <h2 className={desktopStyles.newsTitle}>
              Looking forward to Dresden
            </h2>
          </div>

          {/* ITEM 03 */}
          <div className={desktopStyles.newsCard}>
            <img src={rbc} width={300} className="m-auto" loading="lazy" />
            <h2 className={desktopStyles.newsTitle}>
              RBC Brum Strum Youth Day
            </h2>
          </div>

          {/* ITEM 04 */}
          <div className={desktopStyles.newsCard}>
            <img src={trophies} width={300} className="m-auto" loading="lazy" />
            <h2 className={desktopStyles.newsTitle}>Competition Season 2024</h2>
          </div>

          {/* ITEM 05 */}
          <div className={desktopStyles.newsCard}>
            <img src={ram} width={300} className="m-auto" loading="lazy" />
            <h2 className={desktopStyles.newsTitle}>Conservatoire Success!</h2>
          </div>

          {/* ITEM 06 */}
          <div className={desktopStyles.newsCard}>
            <img src={rcs} width={300} className="m-auto" loading="lazy" />
            <h2 className={desktopStyles.newsTitle}>RCS Big Guitar Weekend</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsGrid;
