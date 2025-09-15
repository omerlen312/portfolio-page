export const About = () => {
  return (
    <>
      <section id="about" className="py-20 bg-white dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Learn more about my journey, skills, and passion for development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                My Story
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                With over half a year of experience in web development, I
                specialize... in absolutely nothing, yet. I&apos;m passionate about
                learning new technologies and working my way into new horizons!
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                I believe in writing clean, efficient code and creating
                intuitive user experiences that make a difference.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "React Native",
                  "MongoDB",
                  "Express",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-slate-100 dark:bg-slate-700 rounded-lg p-3 text-center"
                  >
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
