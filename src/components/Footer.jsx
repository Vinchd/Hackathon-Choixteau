export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center bg-primary w-full">
      <div className="flex flex-row justify-between items-center max-w-xs w-3/12 m-2">
        <a href="https://en-gb.facebook.com/anthony.gorski.50" target="_blank">
          <img
            src="/assets/logo/Facebook.png"
            className="logo-facebook"
            alt="logo facebook"
            width="32"
            height="32"
          />
        </a>
        <a href="https://twitter.com/Gorski_anthony" target="_blank">
          <img
            src="/assets/logo/Twitter.png"
            className="logo-twitter"
            alt="logo twitter"
            width="32"
            height="32"
          />
        </a>
        <a href="https://www.youtube.com/@AnthoCode/videos" target="_blank">
          {" "}
          <img
            src="/assets/logo/YouTube.png"
            className="logo-youtube"
            alt="logo youtube"
            width="32"
            height="32"
          />
        </a>
      </div>
      <p className="text-tertiary text-md mb-2 lg:m-2 lg:absolute lg:right-0">
        © Choîteau - WCS - Hackathon 1 - Code Quantum
      </p>
    </footer>
  );
}
