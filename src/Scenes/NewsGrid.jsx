// IMAGES
import news01 from "../Assets/imgs/mrsS-01.png";
import news02 from "../Assets/imgs/mrsS-02.png";
import trophies from "../Assets/imgs/trophies.png";

const NewsGrid = () => {
  const desktopStyles = {
    background: "h-full bg-white",
    container: "sm:block md:block hidden mx-60 mb-12 flex justify-between",
    title: "font-sans text-black text-2xl text-left pb-8 pt-40 ",
    grid: "grid grid-cols-3 gap-12",
    newsCard:
      "shadow-lg shadow-slate-300 rounded-md px-6 py-6 flex justify-center",
    newsTitle: "font-serif xl:text-md text-center pt-4",
  };

  return (
    <div id="newsgrid" className={desktopStyles.background}>
      <div className={desktopStyles.container}>
        <h1 className={desktopStyles.title}>News</h1>
        <div className={desktopStyles.grid}>
          {/* NEWS ITEM 01 */}
          <div className={desktopStyles.newsCard}>
            <div className={desktopStyles.newsTitle}>
              <img src={news01} width={300} />
              <h2 className={desktopStyles.newsTitle}>
                Competition Season 2024
              </h2>
            </div>
          </div>

          {/* NEWS ITEM 02 */}
          <div className={desktopStyles.newsCard}>
            <div className={desktopStyles.newsTitle}>
              <img src={news02} width={300} />
              <h2 className={desktopStyles.newsTitle}>
                RBC Brum Strum Youth Day
              </h2>
            </div>
          </div>

          {/* NEWS ITEM 03 */}
          <div className={desktopStyles.newsCard}>
            <div className={desktopStyles.newsTitle}>
              <img src={trophies} width={300} />
              <h2 className={desktopStyles.newsTitle}>
                Conservatoire Success!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsGrid;
