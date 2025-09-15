export default function About() {
  return (
    <section className="bg-pink-100 min-h-screen px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* About Me Card*/}
        <div className="relative">
          <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-xl bg-pink-800 z-0" />
          <div className="relative bg-pink-300 rounded-xl p-8 shadow-md z-10 text-center">
            <h1 className="text-4xl font-bold text-gray-700 mb-6">
              About Me 🌷
            </h1>
            <p className="text-lg text-left text-gray-700 mb-4">
              Hi, I’m Rama Khabbaz! I’m passionate about front-end development
              and UX design, and building interfaces that solve real problems
              excites me. I earned my B.S. in Computer Science from Georgia Tech
              and am currently pursuing my Master’s in Human Computer
              Interaction.
            </p>
            <p className="text-lg text-left text-gray-700 mb-4">
              One of my strengths is end-to-end thinking, carefully considering
              how users engage with a product to create seamless experiences. I
              bring a high level of organization and attention to detail to
              everything I do, and I’m always eager to learn and grow. I pick up
              new concepts quickly and enjoy challenging myself to step outside
              my comfort zone through new programming languages and courses. I'm
              currently a research assistant for the Ubicomp Health & Wellness
              Lab at Georgia Tech with Dr. Arriaga, where I'm further enjoying
              the act of acquiring knowledge, with a focus on user-centered
              work. We are working to create technology that addresses health &
              wellness challenges, centered around patient engagement, point of
              care, and continuity of care.
            </p>
            <p className="text-lg text-left text-gray-700">
              Outside of tech, I enjoy reading, working out, and experimenting
              in the kitchen. I also serve as President of the Girls Who Code
              College Loop at Georgia Tech, I lead social events for members,
              organize networking opportunities with corporate sponsors, and
              coordinate volunteer programs where members mentor younger
              students interested in computer science. Together, these passions
              keep my life balanced, while continuing to grow as both a leader
              and a learner.
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
                <li>📚 Reading (especially of fantasy genre)</li>
                <li>🍵 Taste testing any & all matcha I can find</li>
              </ul>
            </div>

            <p className="mt-6 text-gray-700 text-lg italic">
              <a
                href="/contact"
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
