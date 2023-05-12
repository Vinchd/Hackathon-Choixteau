export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center bg-primary w-full">
      <div className="flex flex-row justify-between items-center max-w-xs w-3/12 m-2">
        <a
          href="https://www.instagram.com/jule.gorski/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/assets/logo/Instagram.png"
            className="logo-facebook"
            alt="Instagram"
            width="32"
            height="32"
          />
        </a>
        <a
          href="https://twitter.com/Gorski_anthony"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/assets/logo/Twitter.png"
            className="logo-twitter"
            alt="Twitter"
            width="32"
            height="32"
          />
        </a>
        <a
          href="https://www.youtube.com/@AnthoCode/videos"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img
            src="/assets/logo/YouTube.png"
            className="logo-youtube"
            alt="Youtube"
            width="32"
            height="32"
          />
        </a>
      </div>
      <p className="text-tertiary text-md mb-2 lg:m-2 lg:absolute lg:right-0">
        © Choîxteau - WCS - Hackathon 1 - Code Quantum
      </p>
    </footer>
  );
}
