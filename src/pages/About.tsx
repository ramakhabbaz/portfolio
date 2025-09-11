export default function About() {
  return (
    <section className="bg-pink-100 min-h-screen flex items-center justify-center px-6 py-16">
      <div className="relative max-w-4xl w-full">
        {/* Shadow box behind */}
        <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl z-0 bg-pink-800" />

        {/* Foreground card */}
        <div className="relative rounded-xl p-8 md:p-12 shadow-md z-10 text-center bg-pink-300">
          <h1 className="text-4xl font-bold text-gray-700 mb-6">
            🌷 Hi, I’m Rama! 🌷
          </h1>
          <p className="text-lg text-left text-gray-700 mb-4">
            Hi, I’m Rama Khabbaz! I’m passionate about front-end development and
            UX design, and I’m excited about building interfaces that solve real
            problems. I earned my B.S. in Computer Science from Georgia Tech and
            am currently pursuing my Master’s in Human Computer Interaction.
          </p>
          <p className="text-lg text-left text-gray-700 mb-4">
            One of my strengths is end-to-end thinking, carefully considering
            how users engage with a product to create seamless experiences. I
            bring a high level of organization and attention to detail to
            everything I do, and I’m always eager to learn and grow. I pick up
            new concepts quickly and enjoy challenging myself to step outside my
            comfort zone through new programming languages and courses.
          </p>
          <p className="text-lg text-left text-gray-700">
            As President of the Girls Who Code College Loop at Georgia Tech, I
            lead social events for members, organize networking opportunities
            with corporate sponsors, and coordinate volunteer programs where
            members mentor younger students interested in computer
            science—finding just as much joy in helping others grow as I do in
            growing myself.
          </p>

          {/* Horizontal Divider*/}
          <hr className="border-pink-800 my-10" />
          {/* Resume Section */}
          <h2 className="text-2xl font-bold text-gray-700">Resume</h2>
          <div className="text-center mb-8">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-pink-800 hover:text-pink-900 text-m"
            >
              Open Resume ↗
            </a>
          </div>
          <div className="w-11/12 h-[500px] mx-auto">
            <iframe
              src="/Resume.pdf"
              className="w-full h-full rounded-md border"
              title="Rama Khabbaz's Resume"
            />
          </div>

          {/* Horizontal Divider*/}
          <hr className="border-pink-800 my-10" />

          {/* Fun Facts Section */}
          <h2 className="text-2xl font-bold text-gray-700 mb-8">I love...</h2>
          <div className="flex justify-center">
            <ul className="text-left text-lg text-gray-700 space-y-2">
              <li>🏋️‍♀️ Working out (pilates & weight lifting)</li>
              <li>
                👩‍🍳 Cooking & baking (I even have my own cooking Instagram page)
              </li>
              <li>👩‍💻 Studying (bonus points if it's at a cafe or library)</li>
              <li>📚 Reading (especially of fantasy genre)</li>
              <li>🍵 Taste testing any & all matcha I can find</li>
            </ul>
          </div>

          <p className="mt-6 text-gray-800 text-lg italic">
            <a
              href="/contact"
              className="underline text-pink-800 hover:text-pink-900"
            >
              Contact me
            </a>{" "}
            if we have any similar interests!
          </p>
        </div>
      </div>
    </section>
  );
}
