// EMAIL
import { useRef } from "react";
import emailjs from "@emailjs/browser";

// TOAST
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const styles = {
    background: "h-full bg-white py-12",
    desktopContainer:
      "px-16 sm:px-16 md:mx-12 lg:mx-12 xl:mx-40 pt-8 sm:pt-32 md:pt-40 lg:pt-40 xl:pt-40",
    title:
      "font-sans text-black text-4xl md:text-5l text-center pb-8 tracking-widest",
    formContainer:
      "flex flex-col justify-center max-w-xs lg:max-w-2xl md:max-w-xl sm:max-w-lg mx-auto",
    inputName:
      "p-3 rounded-md mb-4 border-4 border-accent placeholder:font-serif placeholder:italic placeholder:text-slate-400",
    inputMessage:
      "rounded-md h-60 p-3 mb-4 border-4 border-accent placeholder:font-serif placeholder:italic placeholder:text-slate-400",
    button:
      "flex justify-evenly items-center bg-zinc-200 px-6 py-2 rounded-lg border-4 border-accent mt-4",
    buttonText: "font-light tracking-widest",
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2ih7tmh",
        "template_w8vevsc",
        form.current,
        "YMI-A2ta35eLOMgjl",
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Thank you! Your message has been sent!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Oh no! Something went wrong");
        },
      );
  };

  return (
    <div id="contact" className={styles.background} aria-label="contact page">
      <div className={styles.desktopContainer}>
        <h1 className={styles.title}>Contact</h1>
        <p className="text-center text-md pb-8 font-serif">
          Please get in touch to book Isaac for your event.
        </p>
        <form ref={form} onSubmit={sendEmail} className={styles.formContainer}>
          <input
            type="text"
            name="from_name"
            placeholder="Full Name"
            className={styles.inputName}
            minLength={2}
          />
          <input
            type="email"
            name="from_email"
            placeholder="Email"
            className={styles.inputName}
            maxLength={50}
          />
          <input
            type="textarea"
            name="message"
            placeholder="Enter your message"
            className={styles.inputMessage}
            maxLength={500}
          />

          <div className="flex justify-center">
            <button type="submit" value="Send" className={styles.button}>
              <h4 className={styles.buttonText}>Send</h4>
            </button>
            <Toaster position="top-center" />
          </div>
        </form>
      </div>

      <div className="pb-12"></div>
    </div>
  );
};

export default Contact;
