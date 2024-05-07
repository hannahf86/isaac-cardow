const Slider = () => {
  return (
    <div>
      <section
        aria-labelledby="slider"
        className="container grid gap-4 text-center sm:text-left fade-up">
        {/* TEXT */}
        <div className="relative">
          <div className="hidden sm:block absolute w-8 bg-accent/10 -left-4 h-full"></div>
          <div>
            <small className="tracking-widest text-accent uppercase drop-shadow-text-sm">
              Off The Beaten Path
            </small>
            <h2 id="headline" className="text-3xl font-bold tracking-wide">
              Places without People
            </h2>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between space-x-4 space-y-4">
            <p className="text-muted drop-shadow-text-sm max-w-2xl">
              We specialize in finding places no one else knows about. Here are
              a few of our favorite spots for true adventurers.
            </p>
            {/* BUTTONS */}
            <div className="flex space-x-4">
              <button
                data-slideBtn
                id="prev"
                aria-label="show previous image"
                className="grid place-items-center bg-accent hover:bg-accent/90 rounded-full p-2 text-bkg focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent disabled:bg-accent/20 disabled:text-accent"
                disabled>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  className="pointer-events-none"
                  fill="currentColor"
                  viewBox="0 0 256 256">
                  <path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm52-84a12,12,0,0,1-12,12H117l11.52,11.51a12,12,0,0,1-17,17l-32-32a12,12,0,0,1,0-17l32-32a12,12,0,0,1,17,17L117,116h51A12,12,0,0,1,180,128Z"></path>
                </svg>
              </button>

              <button
                data-slideBtn
                id="next"
                aria-label="show next image"
                className="grid place-items-center bg-accent hover:bg-accent/90 rounded-full p-2 text-bkg focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent disabled:bg-accent/20 disabled:text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  className="pointer-events-none"
                  fill="currentColor"
                  viewBox="0 0 256 256">
                  <path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm48.49-92.49a12,12,0,0,1,0,17l-32,32a12,12,0,1,1-17-17L139,140H88a12,12,0,0,1,0-24h51l-11.52-11.51a12,12,0,1,1,17-17Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTOS */}
      <div className="-mt-10 sm:-mt-20 lg:-mt-36 container xs:w-screen fade-up">
        <div
          data-slideContainer
          className="flex transition-transform duration-500">
          <div
            className="relative w-full xs:w-auto flex-grow flex-shrink-0 xs:basis-96 pr-4"
            data-slide>
            <img
              loading="lazy"
              src="./images/slider-1.jpg"
              alt="Iceland Scene"
              className="object-cover h-full [@media(hover:hover)]:grayscale hover:grayscale-0 transition-all peer"
            />
            <p className="absolute bottom-4 left-4 pr-4 py-2 bg-bkg font-bold text-lg pointer-events-none tracking-wide [@media(hover:hover)]:opacity-0 peer-hover:opacity-100 transition-opacity">
              Ocean Wonders
            </p>
          </div>

          <div
            className="relative w-full xs:w-auto flex-grow flex-shrink-0 xs:basis-96 pr-4"
            data-slide>
            <img
              loading="lazy"
              src="./images/slider-2.jpg"
              alt="Iceland Scene"
              className="object-cover h-full [@media(hover:hover)]:grayscale hover:grayscale-0 transition-all peer"
            />
            <p className="absolute bottom-4 left-4 pr-4 py-2 bg-bkg font-bold text-lg pointer-events-none tracking-wide [@media(hover:hover)]:opacity-0 peer-hover:opacity-100 transition-opacity">
              Waterfall Cave
            </p>
          </div>

          <div
            className="relative w-full xs:w-auto flex-grow flex-shrink-0 xs:basis-96 pr-4"
            data-slide>
            <img
              loading="lazy"
              src="./images/slider-3.jpg"
              alt="Iceland Scene"
              className="object-cover h-full [@media(hover:hover)]:grayscale hover:grayscale-0 transition-all peer"
            />
            <p className="absolute bottom-4 left-4 pr-4 py-2 bg-bkg font-bold text-lg pointer-events-none tracking-wide [@media(hover:hover)]:opacity-0 peer-hover:opacity-100 transition-opacity">
              Starlit Falls
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
