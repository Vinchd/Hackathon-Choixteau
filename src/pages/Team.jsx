function Team() {
  return (
    <div className="flex max-sm:flex-col sm:flex-row sm:flex-wrap items-center justify-center">
      <div className="flex flex-col items-center pt-5">
        <img
          src="../assets/team/vincent.png"
          alt="Vincent"
          className="w-[50%] rounded-full drop-shadow-[-4px_4px_4px_rgba(0,0,0,0.25)]"
        />
        <h2 className="p-[1rem]">Vincent</h2>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="../assets/team/chloe.jpg"
          alt="Chloé"
          className="w-[50%] rounded-full drop-shadow-[-4px_4px_4px_rgba(0,0,0,0.25)]"
        />
        <h2 className="p-[1rem]">Chloé</h2>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="../assets/team/samuel.jpeg"
          alt="Samuel"
          className="w-[50%] rounded-full drop-shadow-[-4px_4px_4px_rgba(0,0,0,0.25)]"
        />
        <h2 className="p-[1rem]">Samuel</h2>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="../assets/team/oyhana.png"
          alt="Oyhana"
          className="w-[50%] rounded-full drop-shadow-[-4px_4px_4px_rgba(0,0,0,0.25)]"
        />
        <h2 className="p-[1rem]">Oyhana</h2>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="../assets/team/sebastien.png"
          alt="Sebastien"
          className="w-[50%] rounded-full drop-shadow-[-4px_4px_4px_rgba(0,0,0,0.25)]"
        />
        <h2 className="p-[1rem]">Sebastien</h2>
      </div>
    </div>
  );
}

export default Team;
