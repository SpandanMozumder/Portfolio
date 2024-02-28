import MyResume from "../assets/Resume.pdf";
import Carousel from "../components/Carousel";

const About = () => {
  return (
    <div>
      <div className="w-screen bg-black pt-20 relative text-white font-sourcecode pb-44 ">
        <div>
          <h1 className="mx-40 my-10 text-3xl leading-[4rem] font-semibold">
            My Resume
          </h1>
          <div className="mx-40">
            <iframe
              src={MyResume}
              width="100%"
              height="100%"
              className="h-screen"
            ></iframe>
          </div>
        </div>

        <p className="mx-40 mb-10 mt-20 leading-10 text-lg text-gray-400">
          I'm Spandan Mozumder, a college student with knowledge in Full Stack
          Web Development. I'm currently a student in Techno India University, Kolkata, West Bengal, India pursuing BTech. in Computer Science and
          Engineering with specialisation in Artificial Intelligence and Machine
          Learning.
        </p>        

        <Carousel />
      </div>
    </div>
  );
};

export default About;
