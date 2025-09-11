export default function Footer() {
  return (
    <footer className="bg-pink-200 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left section: Title + Flower + Subtitle */}
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <p className="text-3xl">🌷</p>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Get In Touch
            </h2>
            <p className="text-sm italic text-gray-600">I'd love to chat!</p>
          </div>
        </div>

        {/* Right section: Contact links */}
        <div className="flex items-center space-x-6">
          <a
            href="mailto:ramakhabbaz@gmail.com"
            className="text-lg text-pink-800 hover:underline"
          >
            Email
          </a>
          <span className="text-gray-600">/</span>
          <a
            href="https://linkedin.com/in/rama-khabbaz"
            className="text-lg text-pink-800 hover:underline"
            target="_blank"
            /* for safety */
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
