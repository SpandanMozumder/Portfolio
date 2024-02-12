const ContactForm = () => {
  return (
    <div>
      <div className="w-screen bg-black pt-20 relative text-white font-sourcecode pb-44">
        <h1 className="mx-60 my-10 text-4xl leading-[4rem] font-semibold">
          Contact Me
        </h1>
        <form className="mx-60">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                required
                className="w-full bg-gray-800 text-white rounded-md p-2"
              />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full bg-gray-800 text-white rounded-md p-2"
              />
            </div>
            <div>
              <label className="block mb-1">Subject</label>
              <input
                type="text"
                required
                className="w-full bg-gray-800 text-white rounded-md p-2"
              />
            </div>
            <div>
              <label className="block mb-1">Phone Number</label>
              <input
                type="text"
                className="w-full bg-gray-800 text-white rounded-md p-2"
              />
            </div>
            <div className="col-span-2">
              <label className="block mb-1">Company</label>
              <input
                type="text"
                className="w-full bg-gray-800 text-white rounded-md p-2"
              />
            </div>
            <div className="col-span-2">
              <label className="block mb-1">Message</label>
              <textarea className="w-full h-32 bg-gray-800 text-white rounded-md p-2"></textarea>
            </div>
          </div>
          <button className="bg-[#9A9A9A] text-white px-4 py-2 rounded-md mt-4 hover:bg-orange-500">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
