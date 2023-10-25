import React, { useState } from 'react'
import { HiMinusSm, HiPlusSm } from 'react-icons/hi'


const styles = {
    container: 'flex flex-col bg-neutral-200 w-11/12 m-auto p-6',
    header: 'grid grid-col-2 content-center mt-4 mb-2',
    newsTitle: 'text-sky-800 font-bold text-md sm:text-md md:text-xl col-start-1 justify-items-start cursor-pointer',
    icon: 'text-zinc-900 col-start-2 justify-self-end pl-2 cursor-pointer',
    newsImage: ' my-6 flex justify-center items-center',
    newsDescription: 'text-zinc-900 text-sm sm:text-sm md:text-lg leading-relaxed text-justify',
}

const NewsSection = ({ section, isActive, setActive, newsIndex }) => {

    const toggleNews = () => {
        const nextIndex = isActive ? null : newsIndex;
        setActive(nextIndex)
    }

    return (
        <div className={styles.container}>

            {/* ACCORDION HEADER */}
            <div className={styles.header}>
                <div className={styles.newsTitle}
                    onClick={toggleNews}>
                    {section.title}
                </div>

                <div className={styles.icon} >
                    {isActive ? <HiMinusSm size={20} /> : <HiPlusSm size={20} />}
                </div>
            </div>

            {/* ACCORDION DESCRIPTION */}
            <div >
                {isActive &&
                    <div>
                        <div className={styles.newsImage}>
                            <img src={section.image} alt={section.alt} />
                        </div>

                        <div className={styles.newsDescription}>
                            {section.description}
                        </div>
                    </div>}

            </div>

        </div>
    )
};

const NewsAccordion = ({ sections }) => {

    const [active, setActive] = useState(0);

    return (
        <div>
            {sections.map((section, index) => (
                <NewsSection
                    section={section}
                    key={index}
                    isActive={index === active}
                    setActive={setActive}
                    newsIndex={index} />
            ))}
        </div>

    )
}

export default NewsAccordion
