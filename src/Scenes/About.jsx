import React from 'react'

// IMAGES
import ygfOne from '../assets/YGF-01.png'
import ygfTwo from '../assets/YGF-02.png'
import trophies from '../assets/trophies.png'
import mrsSOne from '../assets/mrsS-01.png'
import mrsSTwo from '../assets/mrsS-02.png'
import lunchtime from '../assets/lunchtimeRecital-01.png'

const About = () => {

  const styles = {
    background: 'h-full bg-zinc-900',
    mobileContainer: 'md:hidden lg:hidden',
    mobileTitle: 'text-neutral-100 text-5xl md:text-5l text-center py-12 tracking-widest',
    mobileText: 'text-neutral-100 mx-8',

    desktopContainer: 'sm:block md:block hidden',
    desktopTitle: 'text-neutral-100 text-5xl text-center py-12 pt-40 tracking-widest',
    desktopText: 'text-neutral-100 mx-32 grid grid-cols-3 gap-8 text-xl leading-loose',

  }

  return (
    <div id='about' className={styles.background}>

      {/* MOBILE & TABLET */}
      <div id='mobile-about' className={styles.mobileContainer}>
        <h1 className={styles.mobileTitle}>ABOUT</h1>
        <p className={styles.mobileText}>
          Born in York, 17 year old Isaac Cardow began his
          classical guitar journey at the age of 6, studying with
          <a href='#'> Hannah Feehan</a>.
          <br /><br />
          At the age of 8, Isaac won the Year 6 and under class at the York Guitar
          Festival, and repeated this again the following year, placing him into a
          masterclass with Craig Odgen.
          <br /><br />
          Isaac went on to achieve a music scholarship for Bootham School in guitar
          and his second study, the double bass. In his time at Bootham, Isaac was
          a member of the Senior Guitar Ensemble, Junior and Senior Orchestra,
          Big Band and Junior and Senior Choir, as well as being a student who was
          regularly called upon to perform as a soloist.
          <br /><br />
          Isaac has been a member of the National Youth Guitar Ensemble, where
          the best young performers from around the UK join together for competitions,
          masterclasses and courses. In the last year, Isaac was asked to join the
          Camerata Ensemble, which demands a higher level of ability and commitment.
          Isaac performs around the country with NYGE, recently performing in famous
          guitar sites around Spain in July 2022, with a trip to Dresden, Germany, planned
          for 2024.
          <br /><br />
          Isaac regularly competes in music festivals around the country, and has had
          many successes, placing in top 2 spots in all competitions so far. His highlights
          have been the Mrs Sunderland Music Festival in Huddersfield, where he has won
          the Open Strings class two years in a row.
          <br /><br />
          Having recently achieved a distincion for his Associate Performance Diploma
          through MTB, Isaac is now focusing on preparation for his auditions to various
          conservatoires, as well as The BBC Young Musician competition.
          <br /><br />
          If you wish to see Isaac in action, please see the <a href='#calendar'>calendar</a> section below.
        </p>
      </div>


      {/* DESKTOP */}
      <div id='desktop-about' className={styles.desktopContainer}>
        <div className={styles.desktopTitle}>
          <h1>ABOUT</h1>
        </div>

        <div className={styles.desktopText}>
          <p className='col-span-3 pt-12'> Born in York, 17 year old Isaac Cardow began his
            classical guitar journey at the age of 6, studying with <a href='#'> Hannah Feehan</a>.<br /> <br />
            At the age of 8, Isaac won the Year 6 and under class at the York Guitar
            Festival, and repeated this again in the following year, placing him into a masterclass with Craig Odgen.</p>
          <img src={ygfOne} alt='York Guitar Festival' />
          <img src={ygfTwo} alt='York Guitar Festival with Craig Ogden' />
          <img src={lunchtime} alt='York Guitar Festival with Craig Ogden' />

          <p className='col-span-3 '> Isaac went on to achieve a music scholarship for Bootham School in guitar
            and his second study, the double bass. In his time at Bootham, Isaac was
            a member of the Senior Guitar Ensemble, Junior and Senior Orchestra,
            Big Band and Junior and Senior Choir, as well as being a student who was
            regularly called upon to perform as a soloist.</p><br />

          <p className='col-span-3 '> Isaac has been a member of the National Youth Guitar Ensemble, where
            the best young performers from around the UK join together for competitions,
            masterclasses and courses. In the last year, Isaac was asked to join the
            Camerata Ensemble, which demands a higher level of ability and commitment.
            Isaac performs around the country with NYGE, recently performing in famous
            guitar sites around Spain in July 2022, with a trip to Dresden, Germany, planned
            for 2024, for which he has received a 50% bursary from NYGE.</p><br />

          <p className='col-span-3 '> Isaac regularly competes in music festivals around the country, and has had
            many successes, placing in top 2 spots in all competitions so far. His highlights
            have been the Mrs Sunderland Music Festival in Huddersfield, where he has won
            the Open Strings class two years in a row.</p>

          <img src={trophies} alt='Isaac Cardow with trophies from music competitions' />
          <img src={mrsSOne} alt='Isaac Cardow with trophies from music competitions' />
          <img src={mrsSTwo} alt='Isaac Cardow with trophies from music competitions' />

          <p className='col-span-3 '> Having recently achieved a distincion for his Associate Performance Diploma
            through MTB, Isaac is now focusing on preparation for his auditions to various
            conservatoires, as well as The BBC Young Musician competition.</p><br />

          <p className='col-span-3 '>If you wish to see Isaac in action, please see the <a href='#calendar'>calendar</a> section below.</p>

        </div>

      </div>

      <div className='pb-20'></div>

    </div>
  )
}

export default About
