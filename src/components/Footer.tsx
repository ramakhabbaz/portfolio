export default function Footer() {
  return (
    <footer id="footer" className="bg-pink-200 py-8 px-12">
      <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left section: Title + Flower + Subtitle */}
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <p className="text-3xl">🌷</p>
          <div>
            <h2 className="text-xl font-semibold text-gray-700">
              Get In Touch
            </h2>
            <p className="text-sm italic text-gray-600">I'd love to chat!</p>
          </div>
        </div>

        {/* Right section: Contact links */}
        <div className="w-full md:w-auto space-y-2 text-sm md:text-base">
          {/* Email row */}
          <div className="flex justify-between w-full md:w-96">
            <span className="text-gray-700 font-medium">Email 📧</span>
            <a
              href="mailto:ramakhabbaz@gmail.com"
              className="text-pink-800 text-right italic underline hover:text-pink-900"
            >
              ramakhabbaz@gmail.com
            </a>
          </div>

          {/* LinkedIn row */}
          <div className="flex justify-between w-full md:w-96">
            <span className="text-gray-700 font-medium">LinkedIn 💼</span>
            <a
              href="https://linkedin.com/in/rama-khabbaz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-800 underline hover:text-pink-900 text-right italic"
            >
              linkedin.com/in/rama-khabbaz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
