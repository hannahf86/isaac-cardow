import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const styles = {
        background: 'h-full bg-zinc-900',
        mobileTitle: 'text-neutral-100 text-5xl text-center pt-12 mb-8 lg:pt-52 tracking-widest',
        formContainer: 'flex flex-col justify-center max-w-xs lg:max-w-2xl md:max-w-xl sm:max-w-lg mx-auto',
        inputName: 'p-2 rounded-md mb-4 border-4 border-sky-800',
        inputMessage: 'rounded-md h-60 p-2 mb-4 border-4 border-sky-800',
        button: 'bg-zinc-200 px-6 py-2 rounded-lg border-4 border-sky-800 mt-4',
        buttonText: 'font-light tracking-widest',
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2ih7tmh', 'template_w8vevsc', form.current, 'YMI-A2ta35eLOMgjl')
            .then((result) => {
                console.log(result.text);
                console.log("Success! The pigeon has flown the nest!")
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contact' className={styles.background}>

            {/* MOBILE & TABLET */}
            <h1 className={styles.mobileTitle}>CONTACT</h1>


            <div>
                <form ref={form} onSubmit={sendEmail} className={styles.formContainer}>
                    <input
                        type='text'
                        name='from_name'
                        placeholder='Full Name'
                        className={styles.inputName}
                        minLength={2}
                    />
                    <input
                        type='email'
                        name='from_email'
                        placeholder='Email'
                        className={styles.inputName}
                        maxLength={50}
                    />
                    <input
                        type='textarea'
                        name='message'
                        placeholder='Enter your message'
                        className={styles.inputMessage}
                        maxLength={500}
                    />

                    <div className='flex justify-center'>
                        <button type="submit" value='Send' className={styles.button}>
                            <h3 className={styles.buttonText}>SEND</h3>
                        </button>
                    </div>
                </form>
            </div>

            <div className='pb-12'></div>


            {/* DESKTOP */}

        </div>
    )
}

export default Contact
