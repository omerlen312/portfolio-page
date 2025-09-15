import Image from "next/image";

export const Opening = () => {
  return (
    <section id="opening" className="pt-16 pb-20 sm:pt-24 sm:pb-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto bg-gradient-to-br rounded-full flex items-center justify-center text-white text-4xl font-bold">
              <Image
                src="/profile.jpg"
                alt="Omer Len"
                width={176}
                height={176}
                className="rounded-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Full Stack Developer
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
            I create modern, responsive web applications using cutting-edge
            technologies. Passionate about clean code, user experience, and
            innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/resume.pdf"
              download
              className="border-2 border-slate-300 dark:border-slate-600
             text-slate-700 dark:text-slate-300
             hover:border-blue-600 dark:hover:border-blue-400
             hover:text-blue-600 dark:hover:text-blue-400
              font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
