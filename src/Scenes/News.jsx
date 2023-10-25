import React from 'react';


const News = () => {

    const styles = {
        background: 'h-full bg-zinc-900',
        mobileTitle: 'text-neutral-100 text-5xl text-center pt-12 pb-8 lg:pt-52 tracking-widest',
        listStyles: 'list-disc ml-8',

        mobileContainer: 'block sm:block md:hidden',
        mobileDisplay: 'mx-6',
        mobileSubTitle: 'text-sky-800 text-2xl text-center uppercase pt-4 pb-6',
        mobileNewsCard: 'bg-neutral-100 rounded-lg drop-shadow-md mb-8 p-6 border-4 border-sky-800',

        desktopContainer: 'sm:block md:block hidden',
        desktopDisplay: 'grid grid-cols-2 gap-24 mx-12 px-12 py-8',
        newsOne: 'col-start-1 ',
        newsTwo: 'col-start-2',

        newsTitle: 'text-sky-800 font-bold text-3xl text-center uppercase py-4',
        newsImage: ' my-6 m-auto items-center',
        newsDescription: 'text-zinc-900 text-md leading-relaxed',

    }

    return (
        <div id='news' className={styles.background}>
            <h1 className={styles.mobileTitle}>NEWS</h1>

            {/* MOBILE & TABLET */}
            <div className={styles.mobileContainer}>
                <div className={styles.mobileDisplay}>

                    <div className={styles.mobileNewsCard}>
                        <div className='text-right mb-2'>
                            <small>September 2023</small>
                        </div>
                        <div className={styles.mobileSubTitle}>
                            <h3>RCS BIG <br />GUITAR WEEKEND</h3>
                        </div>

                        <div className={styles.newsDescription}>
                            <p >Isaac has been offered a full bursary for The Royal Conservatoire of Scotland's
                                Big Guitar Weekend in November. <br /> <br />The festival includes 2 lessons, classes and
                                concerts by world renowned performers such as Sean Shibe. <br /> <br />This is a tremendous
                                honor from the Head of Guitar Studies, Allan Neive and something Isaac is very
                                excited about.</p>
                        </div>
                    </div>

                    <div className={styles.mobileNewsCard}>
                        <div className='text-right mb-2'>
                            <small>July 2023</small>
                        </div>
                        <div className={styles.mobileSubTitle}>
                            <h3>Diploma Distinction!</h3>
                        </div>

                        <div className={styles.newsDescription}>
                            <p >Isaac has achieved a distinction in his AMTB Performance Diploma!<br /> <br />His programme included...</p>
                            <div className={styles.listStyles}>
                                <li>Scarlatti - Sonata in E minor K.11</li>
                                <li>Sor - Fantasia Op.40</li>
                                <li>Tarrega - Capricho Arabe</li>
                                <li>Barrios - Mazurka Appassionata</li>
                                <li>Andrew York - Sunburst</li>
                            </div>
                            <p><br /> As always, MTB provided a thorough, thoughtful and insightful report, praising Isaac's successes and providing
                                him with guitar specific advice moving forward.<br /> <br />
                                A wonderful result!</p>

                        </div>
                    </div>

                    <div className={styles.mobileNewsCard}>
                        <div className='text-right mb-2'>
                            <small>May 2023</small>
                        </div>
                        <div className={styles.mobileSubTitle}>
                            <h3>Masterclass with Craig Ogden</h3>
                        </div>

                        <div className={styles.newsDescription}>
                            <p >Isaac took part in a masterclass with world-renowned Craig Ogden at the Chipping
                                Norton Festival.<br /> <br />Isaac played Scarlatti's Sonata in E minor, K.11, in preparation for his diploma recital.
                                <br /> <br />Craig's knowledge and expertise are second to none, and Isaac found this experience to be enlightening,
                                particularly regarding Baroque ornaments.<br /> <br />Thank you very much to the Chipping Norton Music Festival for the opportunity!</p>
                        </div>
                    </div>

                    <div className={styles.mobileNewsCard}>
                        <div className='text-right mb-2'>
                            <small>January to March 2023</small>
                        </div>
                        <div className={styles.mobileSubTitle}>
                            <h3>Competition Season 2023</h3>
                        </div>
                        <div className={styles.newsDescription}>
                            <p >Isaac has been very busy this year, competiting across the country...</p>
                        </div>
                    </div>

                    <div className={styles.mobileNewsCard}>
                        <div className='text-right mb-2'>
                            <small>October 2022</small>
                        </div>
                        <div className={styles.mobileSubTitle}>
                            <h3>Masterclass with Ana Vidovic</h3>
                        </div>

                        <div className={styles.newsDescription}>
                            <p >As part of the IGF London Guitar Festival 2022, Isaac had a masterclass with the legendary
                                Ana Vidovic...</p>
                        </div>
                    </div>

                </div>

            </div>


            {/* DESKTOP */}
            <div className={styles.desktopContainer}>
                <div className={styles.desktopDisplay}>

                    <div className={styles.mobileNewsCard}>
                        <div className='text-right mb-2'>
                            <small>September 2023</small>
                        </div>
                        <div className={styles.newsTitle}>
                            <h3>RCS BIG GUITAR WEEKEND</h3>
                        </div>
                        <div className={styles.newsDescription}>
                            <p >Isaac has been offered a full bursary for The Royal Conservatoire of Scotland's
                                Big Guitar Weekend in November. <br /> <br />The festival includes 2 lessons, classes and
                                concerts by world renowned performers such as Sean Shibe. <br /> <br />This is a tremendous
                                honor from the Head of Guitar Studies, Allan Neive and something Isaac is very
                                excited about.</p>
                        </div>
                    </div>

                    <div className={styles.mobileNewsCard}>
                        <div className='text-right mb-2'>
                            <small>July 2023</small>
                        </div>
                        <div className={styles.newsTitle}>
                            <h3>Diploma Distinction!</h3>
                        </div>

                        <div className={styles.newsDescription}>
                            <p >Isaac has achieved a distinction in his AMTB Performance Diploma!<br /> <br />His programme included...</p>
                            <div className={styles.listStyles}>
                                <li>Scarlatti - Sonata in E minor K.11</li>
                                <li>Sor - Fantasia Op.40</li>
                                <li>Tarrega - Capricho Arabe</li>
                                <li>Barrios - Mazurka Appassionata</li>
                                <li>Andrew York - Sunburst</li>
                            </div>
                            <p><br /> As always, MTB provided a thorough, thoughtful and insightful report, praising Isaac's successes and providing him with guitar specific advice moving forward.<br /> <br />
                                A wonderful result!</p>
                        </div>
                    </div>

                    <div className={styles.mobileNewsCard}>
                        <div className='text-right mb-2'>
                            <small>May 2023</small>
                        </div>
                        <div className={styles.newsTitle}>
                            <h3>Masterclass with Craig Ogden</h3>
                        </div>

                        <div className={styles.newsDescription}>
                            <p >Isaac took part in a masterclass with world-renowned Craig Ogden at the Chipping
                                Norton Festival.</p>
                        </div>
                    </div>

                    <div className={styles.mobileNewsCard}>
                        <div className='text-right mb-2'>
                            <small>January to March 2023</small>
                        </div>
                        <div className={styles.newsTitle}>
                            <h3>Competition Season 2023</h3>
                        </div>

                        <div className={styles.newsDescription}>
                            <p >Isaac has been very busy this year, competiting across the country...</p>
                        </div>
                    </div>

                    <div className={styles.mobileNewsCard}>
                        <div className='text-right mb-2'>
                            <small>October 2022</small>
                        </div>
                        <div className={styles.newsTitle}>
                            <h3>Masterclass with Ana Vidovic</h3>
                        </div>

                        <div className={styles.newsDescription}>
                            <p >As part of the IGF London Guitar Festival 2022, Isaac had a masterclass with the legendary
                                Ana Vidovic...</p>
                        </div>
                    </div>

                </div>

            </div>



            <div className='pb-20'></div>

        </div>
    )
}

export default News
