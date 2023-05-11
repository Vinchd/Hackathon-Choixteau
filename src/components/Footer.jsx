export default function Footer() {
  return (
    <footer className="bottom-0 flex flex-col justify-center items-center bg-primary w-full">
      <div className="flex flex-row justify-between items-center max-w-xs w-3/12 m-2">
        <img
          src="/assets/logo/Facebook.png"
          className="logo-facebook"
          alt="logo facebook"
          width="32"
          height="32"
        />
        <img
          src="/assets/logo/Twitter.png"
          className="logo-twitter"
          alt="logo twitter"
          width="32"
          height="32"
        />
        <img
          src="/assets/logo/YouTube.png"
          className="logo-youtube"
          alt="logo youtube"
          width="32"
          height="32"
        />
      </div>
      <p className="text-tertiary text-md mb-2 lg:m-2 lg:absolute lg:right-0">
        © Choîteau - WCS - Hackathon 1 - Code Quantum
      </p>
    </footer>
  );
}
