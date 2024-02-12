import { currentprojects } from "../constants";

const Current = () => {
  return (
    <div>
      <div className=" mx-60 pt-10">
        <h1 className="mt-10 text-2xl leading-[3rem] font-semibold">
          Projects That I am Working On
        </h1>
        <h1 className=" text-md text-gray-400">
          A collection of projects that currently under development.
        </h1>

        <div>
          <div className="pt-20 bg-black pb-60 font-sourcecode">
            {currentprojects.map((project) => (
              <div
                key={project.id}
                className="bg-black text-white rounded-2xl mb-20 p-10 border border-gray-600"
              >
                <h3 className="text-2xl font-bold mb-2 leading-10">
                  {project.name}
                </h3>
                <p className="mb-4 leading-7">{project.description}</p>
                <div className="flex space-x-4">
                  <button className="bg-[#9A9A9A] rounded-lg px-5 py-3 hover:bg-orange-500 mt-10">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black font-semibold "
                    >
                      GitHub Repo
                    </a>
                  </button>
                  {project.netlify && (
                    <a
                      href={project.netlify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black font-semibold"
                    >
                      Netlify
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;
