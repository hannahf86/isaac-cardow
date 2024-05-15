// REACT
import { useRef } from "react";

// EMAIL JS
import emailjs from "@emailjs/browser";

// TOAST
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  // email js
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_18by4yc", "template_w8vevsc", form.current, {
        publicKey: "YMI-A2ta35eLOMgjl",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Thank you! Your message has been sent!");
          document.getElementById("contactForm").reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Oh no! There has been a problem!");
        },
      );
  };

  const styles = {
    background: "h-full bg-white pt-8",
    desktopContainer:
      "px-12 sm:px-16 md:mx-12 lg:mx-12 xl:mx-40 pt-8 sm:pt-12 md:pt-40 lg:pt-40 xl:pt-40",
    title:
      "font-sans text-black text-4xl md:text-5l text-center pb-8 tracking-widest",
    formContainer:
      "flex flex-col justify-center max-w-xs lg:max-w-2xl md:max-w-xl sm:max-w-lg mx-auto",
    inputName:
      "font-serif p-3 rounded-md mb-4 border-4 border-accent placeholder:font-serif placeholder:italic placeholder:text-slate-400",
    inputMessage:
      "font-serif rounded-md h-60 p-3 mb-4 border-4 border-accent placeholder:font-serif placeholder:italic placeholder:text-slate-400",
    button:
      "flex justify-evenly items-center bg-accent px-6 py-2 rounded-lg hover:outline outline-offset-2 outline-2 outline-darkAccent active:outline-lightAccent hover:bg-darkAccent active:bg-lightAccent mt-4",
    buttonText: "font-light tracking-widest text-white",
  };

  return (
    <div id="contact" className={styles.background} aria-label="contact page">
      <main className={styles.desktopContainer}>
        <h1 className={styles.title}>Contact</h1>
        <p className="text-center text-md pb-8 font-serif">
          Please get in touch to book Isaac for your event.
        </p>

        {/* FORM */}
        <form
          className={styles.formContainer}
          ref={form}
          onSubmit={sendEmail}
          id="contactForm"
          aria-label="contact form">
          <input
            type="text"
            name="from_name"
            placeholder="Full Name"
            className={styles.inputName}
            required
            minLength={2}
          />
          <input
            type="email"
            name="from_email"
            placeholder="Email"
            className={styles.inputName}
            required
            maxLength={100}
          />
          <input
            type="textarea"
            name="message"
            placeholder="Enter your message"
            className={styles.inputMessage}
            required
            maxLength={500}
          />

          <div className="flex justify-center">
            <button type="submit" value="Send" className={styles.button}>
              <h4 className={styles.buttonText}>Send</h4>
            </button>
            <Toaster position="top-center" />
          </div>
        </form>
      </main>

      <div className="pb-12"></div>
    </div>
  );
};

export default Contact;
