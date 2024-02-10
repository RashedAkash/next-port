"use client";







const ProjectCard = () => {
 
  return (
    <section className=" ">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Portfolio
        </h1>

        <p className="mt-4 text-center text-gray-500 dark:text-gray-300">
          My Recent Projects
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <a href="https://fitness-b1aa9.web.app/">
            <div
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
              style={{
                backgroundImage: `url('/fitnesspng.png')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                  Fitness gym
                </h2>
                <p className="mt-2 text-lg tracking-wider text-pink-700 uppercase ">
                  React
                </p>
              </div>
            </div>
          </a>

          <a href="https://event-lab-551ad.web.app/">
            <div
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
              style={{
                backgroundImage: `url('/eventlab.png')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                  Event lab
                </h2>
                <p className="mt-2 text-lg tracking-wider text-pink-700 uppercase ">
                  React
                </p>
              </div>
            </div>
          </a>

          <a href="https://rashedakash.github.io/fruit-brust/">
            <div
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
              style={{
                backgroundImage: `url('/fruit.png')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                  Fruit
                </h2>
                <p className="mt-2 text-lg tracking-wider text-pink-700 uppercase ">
                  Tailwind{" "}
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
