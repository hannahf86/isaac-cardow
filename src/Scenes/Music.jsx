const Music = () => {
  const styles = {
    background: "h-full bg-white static ",
    container:
      "px-16 sm:px-16 md:mx-12 lg:mx-12 xl:mx-40 pt-12 xs:pt-12 sm:pt-16 md:pt-40 lg:pt-40 xl:pt-40 ",
    title: "font-sans text-black text-3xl text-left pb-8 ",
    text: "font-serif text-black text-base leading-loose text-justify ",
    subtitle: "font-serif font-bold text-xl pt-6 pb-2",
    list: "font-serif list-disc ml-4 leading-loose text-base",
  };

  return (
    <div
      id="music"
      className={styles.background}
      aria-label="music information page">
      <main className={styles.container}>
        <div className={styles.title}>
          <h1>Music </h1>
        </div>

        <div className={styles.text}>
          <p>
            Below is a sample repertoire list but Isaac can take requests for an
            additional fee.
          </p>
        </div>

        {/* MUSIC LIST */}
        <section>
          <h2 className={styles.subtitle}>Classical</h2>
          <ul className={styles.list}>
            <li>Canon in D - Johann Pachelbel</li>
            <li>Gymnopedie No. 1 - Eric Satie</li>
            <li>Cello Suite No. 1 in G major - J.S. Bach</li>
            <li>Jesu, Joy of Man&apos;s Desiring - J.S. Bach</li>
            <li>Air on the G String - J.S. Bach</li>
            <li>Water Music - Handel</li>
            <li>Ave Maria - Schubert</li>
            <li>Recuerdos de Alhambra - Tarrega</li>
            <li>La Fille aux Cheveaux de Lin - Debussy</li>
            <li>Cavatina - Stanley Myers</li>
          </ul>

          <h2 className={styles.subtitle}>Rock & Pop</h2>
          <ul className={styles.list}>
            <li>In My Life - The Beatles</li>
            <li>Here Comes the Sun - The Beatles</li>
            <li>I&apos;m Yours - Jason Mraz</li>
            <li>Thinking Out Loud - Ed Sheeran</li>
            <li>Perfect - Ed Sheeran</li>
            <li>Photograph - Ed Sheeran</li>
            <li>Wild Horses - Rolling Stones</li>
            <li>Somewhere over the Rainbow - </li>
            <li>Field of Gold - Sting</li>
            <li>Make You Feel My Love - Adele</li>
            <li>Can You Feel the Love Tonight - Elton John</li>
          </ul>
        </section>

        <div className={styles.text}>
          <p>
            <br /> For a complete list or to find out more about requesting a
            song, please get in touch!
          </p>
        </div>
      </main>
    </div>
  );
};

export default Music;
