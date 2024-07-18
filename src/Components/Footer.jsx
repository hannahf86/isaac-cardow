const Footer = () => {
  return (
    <div
      id="footer"
      className="bg-white text-center text-black pt-4 bottom-0 w-screen font-serif mb-4">
      <small>© 2023 Isaac Cardow. All rights reserved.</small>
      <br />
      <div>
        <small>
          <strong>About this website:</strong> Built with React & Vite, JSX,
          Tailwind CSS, EmailJS and Vercel Hosting
          <div className="flex justify-center pt-2">
            <img
              src="./jwdLogo.webp"
              alt="jorvik web dev logo"
              width={28}
              className="mr-2"
            />
            <a
              href="https://www.jorvik-web.dev/"
              target="_blank"
              rel="noreferrer"
              className="text-accent font-bold">
              Jorvik Web Dev
            </a>
          </div>
        </small>
      </div>
    </div>
  );
};

export default Footer;
