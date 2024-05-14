const NotFound = () => {
  return (
    <div id="error" aria-label="error page">
      <h1>Oh no! There&apos;s been an error!</h1>
      <section>
        <a href="#" aria-label="go back button">
          <h2>Take me back</h2>
        </a>
        <a href="/" aria-label="home page button">
          <h2>Return to the home page</h2>
        </a>
      </section>
    </div>
  );
};

export default NotFound;
