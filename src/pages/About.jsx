import MyResume from "../assets/Resume.pdf";
import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <div>
      <div className="w-screen bg-black pt-20 relative text-white font-sourcecode pb-44 ">
        <div>
          <div className="w-screen flex justify-center items-center mt-20">
            <img src={profile} className="w-[30rem] rounded-3xl"></img>
          </div>
          <h1 className="mx-60 my-10 text-3xl leading-[4rem] font-semibold">
            My Resume
          </h1>
          <div className="mx-60">
            <iframe
              src={MyResume}
              width="100%"
              height="100%"
              className="h-screen"
            ></iframe>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default About;
