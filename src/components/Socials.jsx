const Socials = () => {
  const emailAddress = "spandan.mozumder.prof@gmail.com";

  return (
    <div>
      <div className="w-screen bg-black relative flex mx-60">
        <button className="p-2 rounded-lg m-3 hover:bg-gray-700">
          <a href="https://www.instagram.com/spandy._.pvt/">
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/ios/50/FFFFFF/instagram-new--v1.png"
              alt="instagram-new--v1"
            />
          </a>
        </button>

        <button className="p-2 rounded-lg m-3 hover:bg-gray-700">
          <a href="https://github.com/SpandanMozumder">
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/ios-glyphs/30/FFFFFF/github.png"
              alt="github"
            />
          </a>
        </button>

        <button className="p-2 rounded-lg m-3 hover:bg-gray-700">
          <a href="https://www.linkedin.com/in/spandan-mozumder-729386240/">
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/ios/50/FFFFFF/linkedin.png"
              alt="linkedin"
            />
          </a>
        </button>

        <button className=" bg-gray-800 p-2 px-5 rounded-full m-3 hover:bg-gray-700 text-white font-sourcecode">
          <a href={`mailto:${emailAddress}`}>Email Me</a>
        </button>
      </div>
    </div>
  );
};

export default Socials;
