import React from 'react'
import { HiHome, HiCalendar, HiMail } from 'react-icons/hi';
import { BiSolidNews, BiSolidBookBookmark } from 'react-icons/bi'

const MobileNav = () => {

    const styles = {
        background: ' flex justify-center justify-evenly items-center fixed bottom-0 left-0 z-50 w-full bg-neutral-200 z-10',
        icon: 'text-zinc-900 active:text-sky-800 active:scale-110 my-6 mx-6',
    }

    return (
        <div id='mobile-nav' >
            <div className={styles.background}>
                <a href='/'><HiHome size={28} className={styles.icon} /></a>
                <a href='/#about'><BiSolidBookBookmark size={25} className={styles.icon} /></a>
                <a href='/#news'><BiSolidNews size={28} className={styles.icon} /></a>
                <a href='/#calendar'><HiCalendar size={28} className={styles.icon} /></a>
                <a href='/#contact'><HiMail size={28} className={styles.icon} /></a>
            </div>
        </div>
    )
}

export default MobileNav
