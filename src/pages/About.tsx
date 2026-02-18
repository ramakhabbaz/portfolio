import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-mesh min-h-screen px-6 py-16"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Title */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="relative max-w-7xl mx-auto mb-12"
        >
          <div className="absolute inset-0 translate-x-2 translate-y-2 bg-pink-800/90 rounded-xl z-0" />
          <motion.div
            variants={fadeInUp}
            className="relative bg-pink-150 border border-pink-200/60 text-center rounded-xl px-6 py-4 z-10 shadow-card"
          >
            <h1 className="font-display text-4xl font-bold text-pink-900">
              About Me <span className="text-pink-500">🌷</span>
            </h1>
          </motion.div>
        </motion.div>

        {/* About Me Card */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="relative"
        >
          <motion.div
            variants={fadeInUp}
            className="bg-pink-150 border border-pink-200/60 shadow-card rounded-xl p-6 md:px-10 md:py-6 mb-8 relative hover:shadow-card-hover transition-smooth"
          >
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Hi, I'm Rama Khabbaz! I'm passionate about building technology
              that starts with the user—understanding how people think, what
              they need, and how they engage with products. Whether through
              frontend development, UX design, or product strategy, I'm excited
              by the challenge of translating user insights into interfaces and
              experiences that solve real problems.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              I earned my B.S. in Computer Science from Georgia Tech and am
              currently pursuing my Master's in CS with a concentration in Human
              Computer Interaction. One of my strengths is end-to-end thinking,
              carefully considering how users engage with a product to ensure
              every detail creates a seamless experience. I bring a high level
              of organization and attention to detail to everything I do, and
              I'm always eager to learn and grow. I pick up new concepts quickly
              and enjoy challenging myself to step outside my comfort zone
              through new programming languages and courses.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Currently, I'm a research assistant for the Ubicomp Health &
              Wellness Lab at Georgia Tech with Dr. Arriaga, where I've had the
              opportunity to focus on user-centered work to support health and
              wellness issues, such as nurse burnout. Our work emphasizes
              patient engagement, point of care, and continuity of care through
              projects that deepen my interest in designing technology that
              makes a real impact on people's lives.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Outside of tech, I enjoy reading, working out, and experimenting
              in the kitchen. I also serve as President of the Girls Who Code
              College Loop at Georgia Tech, where I lead social events for
              members, organize networking opportunities with corporate
              sponsors, and coordinate volunteer programs where members mentor
              younger students interested in computer science. These experiences
              continue to shape me as both a leader and a learner, driven by a
              commitment to people first, whether that's users or my community.
            </p>
          </motion.div>
        </motion.div>

        {/* Resume Card */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="relative"
        >
          <motion.div
            variants={fadeInUp}
            className="relative bg-pink-150 border border-pink-200/60 rounded-xl p-8 shadow-card text-center hover:shadow-card-hover transition-smooth"
          >
            <h2 className="font-display text-2xl font-bold text-pink-900 mb-2">
              Resume
            </h2>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-pink-700 font-medium hover:text-pink-800 underline underline-offset-2 transition-colors"
            >
              Open Resume <span aria-hidden>↗</span>
            </a>
            <div className="w-11/12 h-[500px] mx-auto mt-6 rounded-lg overflow-hidden border border-pink-200/60 shadow-inner">
              <iframe
                src="/Resume.pdf"
                className="w-full h-full"
                title="Rama Khabbaz's Resume"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Fun Facts Card */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="relative"
        >
          <motion.div
            variants={fadeInUp}
            className="relative bg-pink-150 border border-pink-200/60 rounded-xl p-8 shadow-card text-center hover:shadow-card-hover transition-smooth"
          >
            <h2 className="font-display text-2xl font-bold text-pink-900 mb-4">
              For fun, I love...
            </h2>
            <ul className="text-left text-lg text-gray-700 space-y-2 max-w-md mx-auto">
              {[
                "🏋️‍♀️ Working out (pilates & weight lifting)",
                "👩‍🍳 Cooking & baking (I even have my own cooking Instagram page)",
                "👩‍💻 Studying (bonus points if it's at a cafe or library)",
                "📚 Reading (especially in the fantasy genre)",
                "🍵 Taste testing any & all matcha I can find",
              ].map((line, i) => (
                <motion.li
                  key={i}
                  variants={fadeInUp}
                  className="flex items-center gap-2"
                >
                  {line}
                </motion.li>
              ))}
            </ul>
            <p className="mt-6 text-gray-700 text-lg italic">
              <a
                href="#contact"
                className="underline text-pink-700 hover:text-pink-800 font-medium transition-colors"
              >
                Contact me ↗
              </a>{" "}
              if we have any similar interests!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
