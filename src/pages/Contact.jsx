import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y58p5i8",
        "template_wxy56xa",
        form.current,
        "WwoXTwb7UjUWP496V"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-full h-[600px] by-28 bg-no-repeat bg-center bg-[url('./assets/fond-contact.png')] flex justify-center">
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="text-primary flex flex-col items-center justify-center w-[300px]"
      >
        <div className="flex flex-col mt-4 w-full">
          <label className="font-bold mb-1" htmlFor="name">
            Name
          </label>
          <input id="name" name="user_name" type="name" required />
        </div>
        <div className="flex flex-col mt-4 w-full">
          <label className="font-bold mb-1" htmlFor="email">
            Email
          </label>
          <input id="email" name="user_email" type="email" required />
        </div>
        <div className="flex flex-col mt-4 w-full">
          <label className="font-bold mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            className="h-40 w-full"
            id="message"
            type="message"
            name="message"
            placeholder="Saisissez votre message ici"
            required
          />
        </div>
        <div className="flex justify-center mt-8 contactButton basicButton w-24">
          <button className="font-bold" type="submit" value="Send">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
