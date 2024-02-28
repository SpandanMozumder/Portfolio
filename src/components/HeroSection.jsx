import Carousel from "./Carousel";
import Current from "./Current";
import Socials from "./Socials";

const HeroSection = () => {
  return (
    <div>
      <div className="w-screen bg-black pt-20 relative text-white font-sourcecode pb-44">
        <h1 className="mx-40 my-20 text-4xl leading-[4rem] font-semibold">
          Engineering Dynamic and User-Centric <br></br> Digital Experiences
          that seamlessly merge <br></br> Creativity and Functionality.
        </h1>

        <div className="mx-40 border-b-2 border-gray-600 mt-[-3rem]"></div>

        <p className="mx-40 mb-10 mt-20 leading-10 text-lg text-gray-400">
          I'm Spandan Mozumder, a college student with knowledge in Full Stack
          Web Development.
        </p>

        <p className="mx-40 mb-10 leading-10 text-lg text-gray-400">
          I'm currently a student in{" "}
          <span className="text-bold underline underline-offset-4">
            Techno India University
          </span>
          , Kolkata, West Bengal, India pursuing BTech. in Computer Science and
          Engineering with specialisation in Artificial Intelligence and Machine
          Learning.
        </p>

        <Carousel />

        <Socials />

        <div className="mx-40 border-b-2 border-gray-600 pt-10"></div>

        <Current />
      </div>
    </div>
  );
};

export default HeroSection;
