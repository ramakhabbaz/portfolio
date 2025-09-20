export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-pink-100 min-h-screen px-6 py-16"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* About Me Card*/}
        <div className="relative">
          {/* Title Box with Shadow */}
          <div className="relative max-w-7xl mx-auto mb-12">
            <div className="absolute inset-0 translate-x-2 translate-y-2 bg-pink-800 rounded-xl z-0" />
            <div className="relative bg-pink-300 text-center rounded-xl px-6 py-4 z-10 shadow-md">
              <h1 className="text-4xl font-bold text-gray-700">About Me 🌷</h1>
            </div>
          </div>
          <div className="bg-pink-300 shadow-md rounded-xl p-6 md:px-10 md:py-6 mb-8 relative">
            <p className="text-lg text-left text-gray-700 mb-4">
              Hi, I’m Rama Khabbaz! I’m passionate about building technology
              that starts with the user—understanding how people think, what
              they need, and how they engage with products. Whether through
              frontend development, UX design, or product strategy, I’m excited
              by the challenge of translating user insights into interfaces and
              experiences that solve real problems.
            </p>

            <p className="text-lg text-left text-gray-700 mb-4">
              I earned my B.S. in Computer Science from Georgia Tech and am
              currently pursuing my Master’s in CS with a concentration in Human
              Computer Interaction. One of my strengths is end-to-end thinking,
              carefully considering how users engage with a product to ensure
              every detail creates a seamless experience. I bring a high level
              of organization and attention to detail to everything I do, and
              I’m always eager to learn and grow. I pick up new concepts quickly
              and enjoy challenging myself to step outside my comfort zone
              through new programming languages and courses.
            </p>
            <p className="text-lg text-left text-gray-700 mb-4">
              Currently, I'm a research assistant for the Ubicomp Health &
              Wellness Lab at Georgia Tech with Dr. Arriaga, where I've had the
              opportunity to focus on user-centered work to support health and
              wellness issues, such as nurse burnout. Our work emphasizes
              patient engagement, point of care, and continuity of care through
              projects that deepen my interest in designing technology that
              makes a real impact on people’s lives.
            </p>
            <p className="text-lg text-left text-gray-700">
              Outside of tech, I enjoy reading, working out, and experimenting
              in the kitchen. I also serve as President of the Girls Who Code
              College Loop at Georgia Tech, where I lead social events for
              members, organize networking opportunities with corporate
              sponsors, and coordinate volunteer programs where members mentor
              younger students interested in computer science. These experiences
              continue to shape me as both a leader and a learner, driven by a
              commitment to people first, whether that’s users or my community.
            </p>
          </div>
        </div>

        {/* Resume Card */}
        <div className="relative">
          <div className="relative bg-pink-300 rounded-xl p-8 shadow-md z-10 text-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Resume</h2>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-pink-800 hover:text-pink-900 text-m"
            >
              Open Resume ↗
            </a>
            <div className="w-11/12 h-[500px] mx-auto mt-6">
              <iframe
                src="/Resume.pdf"
                className="w-full h-full rounded-md border"
                title="Rama Khabbaz's Resume"
              />
            </div>
          </div>
        </div>

        {/* Fun Facts Card */}
        <div className="relative">
          <div className="relative bg-pink-300 rounded-xl p-8 shadow-md z-10 text-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              For fun, I love...
            </h2>
            <h1 className="text-xl font-medium text-gray-700 mb-2"></h1>
            <div className="flex justify-center">
              <ul className="text-left text-lg text-gray-700 space-y-2">
                <li>🏋️‍♀️ Working out (pilates & weight lifting)</li>
                <li>
                  👩‍🍳 Cooking & baking (I even have my own cooking Instagram
                  page)
                </li>
                <li>👩‍💻 Studying (bonus points if it's at a cafe or library)</li>
                <li>📚 Reading (especially in the fantasy genre)</li>
                <li>🍵 Taste testing any & all matcha I can find</li>
              </ul>
            </div>

            <p className="mt-6 text-gray-700 text-lg italic">
              <a
                href="#contact"
                className="underline text-pink-800 hover:text-pink-900"
              >
                Contact me ↗
              </a>{" "}
              if we have any similar interests!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
