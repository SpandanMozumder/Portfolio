import Current from "./Current";
import Socials from "./Socials";

const HeroSection = () => {
  return (
    <div>
      <div className="w-screen bg-black pt-20 relative text-white font-sourcecode pb-44">
        <h1 className="mx-60 my-20 text-4xl leading-[4rem] font-semibold">
          Engineering Dynamic and User-Centric <br></br> Digital Experiences
          that seamlessly merge <br></br> Creativity and Functionality.
        </h1>

        <div className="mx-60 border-b-2 border-gray-600 mt-[-3rem]"></div>

        <p className="mx-60 mb-10 mt-20 leading-10 text-lg text-gray-400">
          I'm Spandan Mozumder, a college student with knowledge in Full Stack
          Web Development. Among my skills my speciality is in Front-End Web
          Development using the frameworks of{" "}
          <span className="text-bold underline underline-offset-4">
            React JS
          </span>{" "}
          and{" "}
          <span className="text-bold underline underline-offset-4">
            Tailwind CSS
          </span>{" "}
          and using UI library of{" "}
          <span className="text-bold underline underline-offset-4">
            Material UI
          </span>
          .
        </p>

        <p className="mx-60 mb-10 leading-10 text-lg text-gray-400">
          I'm currently a student in{" "}
          <span className="text-bold underline underline-offset-4">
            Techno India University
          </span>
          , Kolkata, West Bengal, India pursuing BTech. in Computer Science and
          Engineering with specialisation in Artificial Intelligence and Machine
          Learning.
        </p>

        <p className="mx-60 mb-20 leading-10 text-lg text-gray-400">
          Since being a student, there is one thing that I have to constantly
          engaged in is 'learning'. So currently I am trying to participate in
          as many hackathons and competitions in order to advance my skills in
          deploying fully functional Full-Stack Websites by repeated application
          of my learnt skills. I am also learning the{" "}
          <span className="text-bold underline underline-offset-4">
            NEXT JS
          </span>{" "}
          as a frontend framework as many developers are actually switching to
          it as it is built on React JS only but provides better features like
          Server-Side Rendering and Static-File Generation. I also want to learn{" "}
          <span className="text-bold underline underline-offset-4">
            Blockchain Development
          </span>{" "}
          in JavaScript environment because I have a desire to make a career in
          that field.
        </p>

        <Socials />

        <div className="mx-60 border-b-2 border-gray-600 pt-10"></div>

        <Current />
      </div>
    </div>
  );
};

export default HeroSection;
