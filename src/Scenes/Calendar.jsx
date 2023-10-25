import React from 'react'

const Calendar = () => {

    const styles = {
        background: 'h-full bg-zinc-900',
        mobileTitle: 'text-neutral-100 text-5xl text-center py-12 lg:pt-52 tracking-widest',
        eventCard: 'flex flex-col bg-neutral-200 w-11/12 m-auto px-6 py-4 border-4 border-sky-800 lg:text-center lg:w-9/12',
        eventTypeRecital: 'text-sky-800 mt-2',
        eventTypeCompetition: 'text-green-800 mt-2',
        eventTypeNYGE: 'text-violet-800 mt-2',
        eventTitle: 'text-2xl mb-1',
        eventDate: 'text-md',
        rectialInfo: 'text-sky-800 font-bold mt-2',
        competitionInfo: 'text-green-800 font-bold mt-2',
        nygeInfo: 'text-violet-800 font-bold mt-2',
        eventDescription: 'text-sm',
    }


    return (
        <div id='calendar' className={styles.background}>

            <h1 className={styles.mobileTitle}>CALENDAR</h1>

            {/* MOBILE & TABLET */}
            <div className={styles.eventCard}>

                {/* EVENT ONE */}
                <h2 className={styles.eventTypeRecital}>Recital</h2>
                <h3 className={styles.eventTitle}>Lunchtime Recital</h3>
                <h3 className={styles.eventDate}>Thursday 14th September at 13:00</h3>
                <a href='https://www.boothamschool.com/events/bootham-recitals/' target='_blank'>
                    <h3>Bootham School</h3>
                </a>
                <h3 className={styles.rectialInfo}>Info</h3>
                <p className={styles.eventDescription}>This is not a ticketed event, but it is advised to
                    get there in plenty of time.</p>
                <p className={styles.eventDescription}><br />Entry to the event is off the main road, Bootham,
                    not through the school</p>
                <div className='my-4 m-auto'>_______________________________________</div>



                {/* EVENT TWO */}
                <h2 className={styles.eventTypeRecital}>Recital</h2>
                <h3 className={styles.eventTitle}>Christmas Fundraiser</h3>
                <h3 className={styles.eventDate}>tbc</h3>
                <a href='http://staelredscc.org.uk/' target='_blank'>
                    <h3>St Aelred's Community Center</h3>
                </a>
                <h3 className={styles.rectialInfo}>Info</h3>
                <p className={styles.eventDescription}>This is not a ticketed event.</p>
                <p className={styles.eventDescription}><br />Parking is available but limited. Please respect the residents space.</p>
                <div className='my-4 m-auto'>_______________________________________</div>



                {/* EVENT THREE */}
                <h2 className={styles.eventTypeCompetition}>Competition</h2>
                <h3 className={styles.eventTitle}>Oxford Music Festival</h3>
                <h3 className={styles.eventDate}>January 2024</h3>
                <a href='https://www.oxfordmusicfestival.org/' target='_blank'>
                    <h3>Oxford, tbc</h3>
                </a>
                <h3 className={styles.competitionInfo}>Info</h3>
                <p className={styles.eventDescription}>Tickets can be bought on the door.</p>
                <div className='my-4 m-auto'>_______________________________________</div>



                {/* EVENT FOUR */}
                <h2 className={styles.eventTypeCompetition}>Competition</h2>
                <h3 className={styles.eventTitle}>Mrs Sunderland Performing Arts Festival</h3>
                <h3 className={styles.eventDate}>February 2024</h3>
                <a href='https://www.mrssunderlandfestival.com/' target='_blank'>
                    <h3>Huddersfield Town Hall</h3>
                </a>
                <h3 className={styles.competitionInfo}>Info</h3>
                <p className={styles.eventDescription}>Tickets can be booked online or bought on the door.</p>
                <div className='my-4 m-auto'>_______________________________________</div>



                {/* EVENT FIVE */}
                <h2 className={styles.eventTypeCompetition}>Competition</h2>
                <h3 className={styles.eventTitle}>Chipping Norton</h3>
                <h3 className={styles.eventDate}>March 2024</h3>
                <a href='https://www.cnmf.org.uk/' target='_blank'>
                    <h3>Chipping Norton Town Hall</h3>
                </a>
                <h3 className={styles.competitionInfo}>Info</h3>
                <p className={styles.eventDescription}>Tickets can be bought on the door.</p>
                <div className='my-4 m-auto'>_______________________________________</div>



                {/* EVENT SIX */}
                <h2 className={styles.eventTypeCompetition}>Competition</h2>
                <h3 className={styles.eventTitle}>Rothwell</h3>
                <h3 className={styles.eventDate}>March 2024</h3>
                <a href='https://www.facebook.com/rothwellfestival' target='_blank'>
                    <h3>Chipping Norton Town Hall</h3>
                </a>
                <h3 className={styles.competitionInfo}>Info</h3>
                <p className={styles.eventDescription}>Tickets can be bought on the door.</p>
                <div className='my-4 m-auto'>_______________________________________</div>



                {/* EVENT SEVEN */}
                <h2 className={styles.eventTypeCompetition}>Competition</h2>
                <h3 className={styles.eventTitle}>Harrogate Competitive Fesitval for Music</h3>
                <h3 className={styles.eventDate}>March 2024</h3>
                <a href='http://www.hcfmsd.co.uk/' target='_blank'>
                    <h3>Harrogate, tbc</h3>
                </a>
                <h3 className={styles.competitionInfo}>Info</h3>
                <p className={styles.eventDescription}>Tickets can be bought on the door.</p>
                <div className='my-4 m-auto'>_______________________________________</div>



                {/* EVENT EIGHT */}
                <h2 className={styles.eventTypeNYGE}>NYGE Event</h2>
                <h3 className={styles.eventTitle}>NYGE Easter Residential</h3>
                <h3 className={styles.eventDate}>4th to 6th April 2024</h3>
                <a href='https://guitarcircus.org.uk/nyge-3/dates/' target='_blank'>
                    <h3>Blohxam School, Oxfordshire</h3>
                </a>
                <h3 className={styles.nygeInfo}>Info</h3>
                <p className={styles.eventDescription}>tbc</p>
                <div className='my-4 m-auto'>_______________________________________</div>



                {/* EVENT NINE */}
                <h2 className={styles.eventTypeNYGE}>NYGE Event</h2>
                <h3 className={styles.eventTitle}>NYGE Summer Tour</h3>
                <h3 className={styles.eventDate}>24th to 29th July 2024</h3>
                <a href='https://guitarcircus.org.uk/nyge-3/dates/' target='_blank'>
                    <h3>Dresden, Germany</h3>
                </a>
                <h3 className={styles.nygeInfo}>Info</h3>
                <p className={styles.eventDescription}>tbc</p>



            </div>

            {/* DESKTOP */}

            <div className='pb-20'></div>

        </div>
    )
}

export default Calendar



