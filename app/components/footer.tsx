export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Omer Len</h3>
          <p className="text-slate-400 mb-6">Full Stack Developer</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/omerlen312?tab=repositories#"
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/omer-len-29541a146/"
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-slate-500 text-sm">&copy; 2025 Omer Len.</p>
        </div>
      </div>
    </footer>
  );
};
