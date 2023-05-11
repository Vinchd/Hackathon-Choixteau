export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center h-24 bg-primary w-full">
      <div className="flex flex-row justify-between items-center max-w-xs w-2/4">
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
      <p className="text-tertiary">
        © Choîteau - WCS - Hackathon 1 - 2023-02-Remote - Code Quantum
      </p>
    </footer>
  );
}
