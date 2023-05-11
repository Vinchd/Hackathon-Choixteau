export default function Contact() {
  return (
    <div className="w-full h-full by-28 bg-no-repeat bg-center bg-[url('./assets/fond-contact.png')] flex justify-center">
      <div className="flex flex-col items-center justify-center">
        <form className="text-primary">
          <div className="flex flex-col mt-4">
            <label className="font-bold" htmlFor="name">
              Name
            </label>
            <input id="name" type="name" />
          </div>
          <div className="flex flex-col mt-4">
            <label className="font-bold" htmlFor="email">
              Email
            </label>
            <input id="email" type="text" />
          </div>
          <div className="flex flex-col mt-4">
            <label className="font-bold" htmlFor="message">
              Message
            </label>
            <textarea
              className="h-40"
              id="message"
              type="message"
              placeholder="Saisissez votre message ici"
            />
          </div>
          <div className="flex justify-center mt-8 contactButton basicButton">
            <button className="font-bold" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
