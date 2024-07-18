// IMAGES
import nyge from "../Assets/Imgs/nyge.png";
import rbc from "../Assets/Imgs/rbc.png";
import ram from "../Assets/Imgs/ram.png";
import trophies from "../Assets/Imgs/trophies.png";
import recital from "../Assets/Imgs/recital.png";
import rcs from "../Assets/Imgs/rsc.png";

const NewsGrid = () => {
  const styles = {
    background: "h-full bg-white",
    container: "mx-12 2xl:mx-40 xl:mx-32 lg:mx-24 md:mx-12 mb-20 ",
    title:
      "font-sans text-black text-4xl sm:text-3xl text-center py-12 lg:pt-40 md:pt-32  ",
    grid: "grid grid-cols-1 gap-y-12 gap-x-12 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ",
    newsCard:
      "bg-accent/10 shadow-lg shadow-slate-300 rounded-md p-4 xl:p-8 lg:p-6 md:px-4 sm:p-6 flex-col justify-center",
    newsTitle:
      "font-serif xl:text-md sm:text-md text-center pt-4 tracking-wider font-bold",
    newsDesc: "font-serif mx-4 pt-2 pb-2 text-sm leading-relaxed text-justify",
  };

  return (
    <div id="newsgrid" className={styles.background}>
      <main className={styles.container}>
        <h1 className={styles.title}>News</h1>
        <section id="grid" className={styles.grid}>
          {/* ITEM 01 */}
          <div className={styles.newsCard}>
            <img src={recital} width={300} className="m-auto" loading="lazy" />
            <h2 className={styles.newsTitle}>Summer Recital Series</h2>
            <p className={styles.newsDesc}>
              Isaac will be performing in York this summer. His programme
              includes the Grand Overture by Giuliani, Sakura Variations by
              Yocoh, Songe Capricorne by Dyens and many more...
            </p>
          </div>

          {/* ITEM 06 */}
          <div className={styles.newsCard}>
            <img src={nyge} width={300} className="m-auto" loading="lazy" />
            <h2 className={styles.newsTitle}>Looking forward to Dresden</h2>
            <p className={styles.newsDesc}>
              As part of the National Youth Guitar Ensemble, Isaac will be
              travelling to Dresden in July to perform and take in the sites!
            </p>
          </div>

          {/* ITEM 03 */}
          <div className={styles.newsCard}>
            <img src={rbc} width={300} className="m-auto" loading="lazy" />
            <h2 className={styles.newsTitle}>RBC Brum Strum Youth Day</h2>
            <p className={styles.newsDesc}>
              Teaming up with NYGE, Isaac took part in the RBC Youth Day. There
              was a warm, excited energy around the conservatoire with students
              supporting each other and encouraging the performances throughout
              the day. <br />
              <br />
              Isaac took part in a masterclass with Xuefei Yang where he played
              the Grand Overture by Giuliani. The day finished with an
              incredible performance from Xuefei.
            </p>
          </div>

          {/* ITEM 04 */}
          <div className={styles.newsCard}>
            <img src={trophies} width={300} className="m-auto" loading="lazy" />
            <h2 className={styles.newsTitle}>Competition Season 2024</h2>
            <p className={styles.newsDesc}>
              This competition season has been another successful one for Isaac!
              He was placed first in the String Solo Open class at the Mrs
              Sunderland Festival.
            </p>
          </div>

          {/* ITEM 05 */}
          <div className={styles.newsCard}>
            <img src={ram} width={300} className="m-auto" loading="lazy" />
            <h2 className={styles.newsTitle}>Conservatoire Success!</h2>
            <p className={styles.newsDesc}>
              After a tense few months, we can announce that Isaac has had
              IMMENSE success with his conservatoire auditions. Isaac was
              offered a place to all the institues he applied for, but accepted
              a scholarship from The Royal Academy of Music. He will start the
              next chapter of his journey in September 2024! Good luck and well
              done Isaac!
            </p>
          </div>

          {/* ITEM 06 */}
          <div className={styles.newsCard}>
            <img src={rcs} width={300} className="m-auto" loading="lazy" />
            <h2 className={styles.newsTitle}>RCS Big Guitar Weekend</h2>
            <p className={styles.newsDesc}>
              Isaac was offered a grant to attend the RCS Big Guitar Weekend.
              The weekend included two 1 hour lessons with Allan Neave and
              Matthew McAllister, as well as workshops and lectures, solo and
              ensemble performances.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NewsGrid;
