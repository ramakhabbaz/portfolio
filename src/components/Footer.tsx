export default function Footer() {
    return (
      <footer className="bg-pink-200 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-lg font-medium">© {new Date().getFullYear()} Rama Khabbaz</p>
  
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="mailto:ramakhabbaz@gmail.com"
              className="hover:text-pink-700 transition-colors"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/rama-khabbaz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-700 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    );
  }
  