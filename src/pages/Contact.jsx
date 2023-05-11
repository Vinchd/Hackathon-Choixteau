import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Missive envoyée ! 🏰", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <div className="w-full h-[600px] by-28 bg-no-repeat bg-center bg-[url('./assets/fond-contact.png')] flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="text-primary flex flex-col items-center justify-center w-[300px]"
      >
        <div className="flex flex-col mt-4 w-full">
          <label className="font-bold mb-1" htmlFor="name">
            Name
          </label>
          <input id="name" type="name" required />
        </div>
        <div className="flex flex-col mt-4 w-full">
          <label className="font-bold mb-1" htmlFor="email">
            Email
          </label>
          <input id="email" type="email" required />
        </div>
        <div className="flex flex-col mt-4 w-full">
          <label className="font-bold mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            className="h-40 w-full"
            id="message"
            type="message"
            placeholder="Saisissez votre message ici"
            required
          />
        </div>
        <div className="flex justify-center mt-8 contactButton basicButton w-24">
          <button className="font-bold" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
