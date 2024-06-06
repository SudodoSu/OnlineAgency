function ContactForm() {
  return (
    <form className="flex flex-col gap-6 w-full">
      <div>
        <input
          className="text-white bg-gray2 placeholder-gray w-[80%] rounded-md py-3 px-8"
          required
          type="text"
          name="from_name"
          placeholder="Name"
        />
      </div>
      <div>
        <input
          className="text-white bg-gray2 placeholder-gray w-[80%] rounded-md py-3 px-8"
          required
          type="email"
          name="from_email"
          placeholder="Email"
        />
      </div>
      <div>
        <textarea
          className="text-white resize-none h-52 bg-gray2 placeholder-gray w-[80%] rounded-md py-3 px-8"
          name="message"
          placeholder="Message"
        />
      </div>
      <div>
        <button>
          <input className="btn " type="submit" placeholder="Send" />
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
