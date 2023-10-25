import React from 'react';
import NewsAccordion from '../Components/NewsAccordion'

// IMAGES
import rcs from '../assets/rcs.png'
import distinction from '../assets/distinction.png'
import craig from '../assets/craig.png'
import trophies from '../assets/trophies.png'
import ana from '../assets/ana.png'

const News = () => {

    const newsData = [
        {
            title: 'RCS Big Guitar Weekend',
            image: { rcs },
            alt: 'Logo for the Royal Scottish Conservatoire',
            description: `Isaac has been offered a full bursary for The Royal Conservatoire of Scotland's 
                    Big Guitar Weekend in November. The festival includes 2 lessons, classes and 
                    concerts by world renowned performers such as Sean Shibe. This is a tremendous 
                    honor from the Head of Guitar Studies, Allan Neive and something Isaac is very
                    excited about.`,

        },
        {
            title: 'Diploma Distinction!',
            image: { distinction },
            alt: 'MTB Logo and an image of Isaac',
            description: `Isaac achieved a distinction in his Associate Diploma that he took 
                    through the Music Teachers' Board. The report included comments such as "much to admire" and 
                    "plenty of musical and technical skills on show". Whilst there is still plenty of work
                    to be done, this is a commendable result and a great first step towards Isaac's future
                    in his musical career.`,

        },
        {
            title: 'Masterclass with Craig Ogden',
            image: { craig },
            alt: 'Masterclass with Craig Ogden',
            description: `Isaac took part in a masterclass with world-renowned Craig Ogden at the Chipping 
                        Norton Festival. `,

        },
        {
            title: 'Competition Season 2023',
            image: { trophies },
            alt: 'Various trophy images of Isaac',
            description: `Isaac has been very busy this year, competiting across the country...`,

        },
        {
            title: 'Masterclass with Ana Vidovic',
            image: { ana },
            alt: 'Masterclass with Ana Vidovic',
            description: `As part of the IGF London Guitar Festival 2022, Isaac had a masterclass with the legendary 
        Ana Vidovic...`,
        },
    ];

    const styles = {
        background: 'h-full bg-zinc-900',
        mobileTitle: 'text-neutral-100 text-5xl text-center pt-12 pb-20 lg:pt-52 tracking-widest',

        desktopContainer: 'sm:block md:block hidden',
        desktopDisplay: 'grid grid-cols-2 gap-24 mx-12 bg-neutral-200 px-12 py-8 border-4 border-sky-800',
        newsOne: 'col-start-1 ',
        newsTwo: 'col-start-2',

        newsTitle: 'text-sky-800 font-bold text-3xl text-center uppercase pt-4',
        newsImage: ' my-6 m-auto items-center',
        newsDescription: 'text-zinc-900 text-md leading-relaxed text-justify',

    }

    return (
        <div id='news' className={styles.background}>
            <h1 className={styles.mobileTitle}>NEWS</h1>

            {/* MOBILE & TABLET */}
            <div className='md:hidden lg:hidden'><NewsAccordion sections={newsData} /></div>


            {/* DESKTOP */}
            <div className={styles.desktopContainer}>
                <div className={styles.desktopDisplay}>

                    <div className={styles.newsOne}>
                        <div className={styles.newsTitle}>
                            <h3>RCS BIG GUITAR WEEKEND</h3>
                        </div>
                        <img src={rcs} alt='Logo for the Royal Scottish Conservatoire' className={styles.newsImage} />
                        <div className={styles.newsDescription}>
                            <p >Isaac has been offered a full bursary for The Royal Conservatoire of Scotland's
                                Big Guitar Weekend in November. The festival includes 2 lessons, classes and
                                concerts by world renowned performers such as Sean Shibe. This is a tremendous
                                honor from the Head of Guitar Studies, Allan Neive and something Isaac is very
                                excited about.</p>
                        </div>
                    </div>

                    <div className={styles.newsTwo}>
                        <div className={styles.newsTitle}>
                            <h3>Diploma Distinction!</h3>
                        </div>
                        <img src={distinction} alt='MTB Logo and an image of Isaac' className={styles.newsImage} />
                        <div className={styles.newsDescription}>
                            <p >Isaac has been offered a full bursary for The Royal Conservatoire of Scotland's
                                Big Guitar Weekend in November. The festival includes 2 lessons, classes and
                                concerts by world renowned performers such as Sean Shibe. This is a tremendous
                                honor from the Head of Guitar Studies, Allan Neive and something Isaac is very
                                excited about.</p>
                        </div>
                    </div>

                    <div className={styles.newsOne}>
                        <div className={styles.newsTitle}>
                            <h3>Masterclass with Craig Ogden</h3>
                        </div>
                        <img src={craig} alt='Masterclass with Craig Ogden' className={styles.newsImage} />
                        <div className={styles.newsDescription}>
                            <p >Isaac took part in a masterclass with world-renowned Craig Ogden at the Chipping
                                Norton Festival.</p>
                        </div>
                    </div>

                    <div className={styles.newsTwo}>
                        <div className={styles.newsTitle}>
                            <h3>Competition Season 2023</h3>
                        </div>
                        <img src={trophies} alt='Various trophy images of Isaac' className={styles.newsImage} />
                        <div className={styles.newsDescription}>
                            <p >Isaac has been very busy this year, competiting across the country...</p>
                        </div>
                    </div>

                    <div className={styles.newsOne}>
                        <div className={styles.newsTitle}>
                            <h3>Masterclass with Ana Vidovic</h3>
                        </div>
                        <img src={ana} alt='Masterclass with Ana Vidovic' className={styles.newsImage} />
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
