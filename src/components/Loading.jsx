import { TripleMaze } from "react-spinner-animated";

import "react-spinner-animated/dist/index.css";

function Loading() {
  return (
    <TripleMaze
      text={"Loading... Please wait..."}
      center={true}
      width={"150px"}
      height={"150px"}
    />
  );
}

export default Loading;
