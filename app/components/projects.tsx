export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src="/miluim picture.png"
              alt="Miluim"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Miluim
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                a portal site made for soldiers in the Israeli army to make
                their lives easier. a MERN stack project with real-time chat
                using Socket.io for live chats with psychologists and other
                soldiers.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                  React
                </span>
                <span className="px-3 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                  MERN
                </span>
                <span className="px-3 py-1 text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
                  Socket.io
                </span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/aimanshomre/hackathon-miluim"
                  className="text-slate-600 dark:text-slate-400 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-green-400 to-blue-600">
              <img
                src="/burger.png"
                alt="Burger Emperor"
                className="h-48 w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Burger Emperor
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                A burger restaurant app made in React-Native with the newer expo
                library for better layout. it uses a database with two roles of
                admin and user to both manage and order through the app.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                  React-Native
                </span>
                <span className="px-3 py-1 text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">
                  MERN
                </span>
                <span className="px-3 py-1 text-xs bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full">
                  Expo
                </span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/omerlen312/food-app"
                  className="text-slate-600 dark:text-slate-400 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-600">
              <img
                src="/Rick-morty.png"
                alt="Rick and Morty"
                className="h-48 w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Rick and Morty API
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                A RESTful API for retrieving information about the Rick and
                Morty universe, including characters, episodes, and locations.
                this was my first full project in pure JavaScript, HTML and CSS
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                  Javascript
                </span>
                <span className="px-3 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                  API
                </span>
                <span className="px-3 py-1 text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full">
                  HTML
                </span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yuvalpelleg/Rick-andMorty-Explorer"
                  className="text-slate-600 dark:text-slate-400 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
