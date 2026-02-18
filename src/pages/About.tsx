import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const funFacts = [
  "🏋️‍♀️ Working out (pilates & weight lifting)",
  "👩‍🍳 Cooking & baking (I even have my own cooking Instagram page)",
  "👩‍💻 Studying (bonus points if it's at a cafe or library)",
  "📚 Reading (especially the fantasy genre)",
  "🍵 Taste testing any & all matcha I can find",
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-mesh min-h-screen px-6 py-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title - full width */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="relative mb-10"
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

        {/* Two columns: main content (left) | sidebar Resume + Fun Facts (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:gap-10">
          {/* Left: Bio */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-30px" }}
            variants={stagger}
            className="space-y-6 min-w-0"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-pink-150 border border-pink-200/60 shadow-card rounded-xl p-6 md:p-8 hover:shadow-card-hover transition-smooth"
            >
              <h2 className="font-display text-lg font-bold text-pink-900 mb-3">
                Intro
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Hi, I'm Rama Khabbaz! I'm passionate about building technology
                that starts with the user—understanding how people think, what
                they need, and how they engage with products. Whether through
                frontend development, UX design, or product strategy, I'm
                excited by the challenge of translating user insights into
                interfaces and experiences that solve real problems.
              </p>

              <h2 className="font-display text-lg font-bold text-pink-900 mb-3">
                Education
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                I earned my B.S. in Computer Science from Georgia Tech and am
                currently pursuing my Master's in CS with a concentration in
                Human-Computer Interaction. One of my strengths is end-to-end
                thinking—considering how users engage with a product so every
                detail creates a seamless experience. I bring strong
                organization and attention to detail, and I'm always eager to
                learn and step outside my comfort zone through new languages and
                courses.
              </p>

              <h2 className="font-display text-lg font-bold text-pink-900 mb-3">
                Current Work
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                I'm a research assistant for the Ubicomp Health & Wellness Lab
                at Georgia Tech with Dr. Arriaga. I focus on user-centered work
                supporting health and wellness—including topics like nurse
                burnout. Our work emphasizes patient engagement, point of care,
                and continuity of care through projects that deepen my interest
                in technology that makes a real impact on people's lives.
              </p>

              <h2 className="font-display text-lg font-bold text-pink-900 mb-3">
                Beyond Tech
              </h2>
              <p className="text-gray-700 leading-relaxed">
                I serve as President of the Girls Who Code College Loop at
                Georgia Tech—leading social events, organizing networking with
                corporate sponsors, and coordinating volunteer programs where
                members mentor younger students. Outside of tech, I enjoy
                reading, working out, and experimenting in the kitchen. These
                experiences shape me as both a leader and a learner, with a
                commitment to people first—whether that's users or my community.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Resume + Fun Facts (sticky on desktop) */}
          <aside className="lg:sticky lg:top-24 lg:self-start space-y-6">
            {/* Resume card */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-20px" }}
              variants={stagger}
            >
              <motion.div
                variants={fadeInUp}
                className="bg-pink-150 border border-pink-200/60 rounded-xl p-6 shadow-card hover:shadow-card-hover transition-smooth"
              >
                <h2 className="font-display text-xl font-bold text-pink-900 mb-3">
                  Resume
                </h2>
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-pink-600 text-white font-semibold py-2.5 px-4 hover:bg-pink-700 transition-smooth"
                >
                  Open Resume <span aria-hidden>↗</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Fun Facts card */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-20px" }}
              variants={stagger}
            >
              <motion.div
                variants={fadeInUp}
                className="bg-pink-150 border border-pink-200/60 rounded-xl p-6 shadow-card hover:shadow-card-hover transition-smooth"
              >
                <h2 className="font-display text-xl font-bold text-pink-900 mb-4">
                  For fun, I love...
                </h2>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {funFacts.map((line, i) => (
                    <motion.li
                      key={i}
                      variants={fadeInUp}
                      className="flex items-start gap-2"
                    >
                      {line}
                    </motion.li>
                  ))}
                </ul>
                <p className="mt-4 text-gray-700 text-sm italic">
                  <a
                    href="#contact"
                    className="underline text-pink-700 hover:text-pink-800 font-medium transition-colors"
                  >
                    Contact me ↗
                  </a>{" "}
                  if we have similar interests!
                </p>
              </motion.div>
            </motion.div>
          </aside>
        </div>
      </div>
    </section>
  );
}
