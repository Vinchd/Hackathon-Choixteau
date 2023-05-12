function Team() {
  return (
    <div className="flex max-sm:flex-col sm:flex-row sm:max-2xl:flex-wrap items-center justify-center">
      <div>
        <a
          className="flex flex-col items-center pt-5"
          href="https://www.linkedin.com/in/vincent-daviaud-2786a120b/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="../assets/team/vincent.png"
            alt="Vincent"
            className="w-[50%] rounded-full drop-shadow-[-4px_4px_4px_rgba(0,0,0,0.25)]"
          />
          <h2 className="p-[1rem] font-bold text-primary">Vincent</h2>
        </a>
      </div>
      <div>
        <a
          className="flex flex-col items-center"
          href="https://www.linkedin.com/in/chlo%C3%A9-elle-a2898a115/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="../assets/team/chloe.jpg"
            alt="Chloé"
            className="w-[50%] rounded-full drop-shadow-[-4px_4px_4px_rgba(0,0,0,0.25)]"
          />
          <h2 className="p-[1rem] font-bold text-primary">Chloé</h2>
        </a>
      </div>
      <div>
        <a
          className="flex flex-col items-center"
          href="https://www.linkedin.com/in/samuelfaberdev/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="../assets/team/samuel.jpeg"
            alt="Samuel"
            className="w-[50%] rounded-full drop-shadow-[-4px_4px_4px_rgba(0,0,0,0.25)]"
          />
          <h2 className="p-[1rem] font-bold text-primary">Samuel</h2>
        </a>
      </div>
      <div>
        <a
          className="flex flex-col items-center"
          href="https://www.linkedin.com/in/oyhana-mahjoubi-6a8798160/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="../assets/team/oyhana.png"
            alt="Oyhana"
            className="w-[50%] rounded-full drop-shadow-[-4px_4px_4px_rgba(0,0,0,0.25)]"
          />
          <h2 className="p-[1rem] font-bold text-primary">Oyhana</h2>
        </a>
      </div>
      <div>
        <a
          className="flex flex-col items-center"
          href="https://www.linkedin.com/in/s%C3%A9bastien-birolleau/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="../assets/team/sebastien.png"
            alt="Sebastien"
            className="w-[50%] rounded-full drop-shadow-[-4px_4px_4px_rgba(0,0,0,0.25)]"
          />
          <h2 className="p-[1rem] font-bold text-primary">Sebastien</h2>
        </a>
      </div>
    </div>
  );
}

export default Team;
