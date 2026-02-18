import guthealthlofi1 from "../assets/guthealthlofi1.png";
import guthealthlofi2 from "../assets/guthealthlofi2.png";
import guthealthhifi1 from "../assets/guthealthhifi1.png";
import guthealthhifi2 from "../assets/guthealthhifi2.png";
import guthealthhifi3 from "../assets/guthealthhifi3.png";
import portfolioHifi from "../assets/portfolioHifi.png";
import portfolioLofi from "../assets/portfolioLofi.png";
import cooking1 from "../assets/cookingHiFi1.png";
import cooking2 from "../assets/cookingHiFi2.png";
import kahoothifi1 from "../assets/kahoothifi1.png";
import kahoothifi2 from "../assets/kahoothifi2.png";
import kahootlofi1 from "../assets/kahootlofi1.png";
import kahootlofi2 from "../assets/kahootlofi2.png";
import kahootlofi3 from "../assets/kahootlofi3.png";
import { useState } from "react";
import { motion } from "framer-motion";

type ProjectId = "guthealth" | "portfolio" | "kahoot" | "cooking" | "cancer";

const projectSummaries: Record<
  ProjectId,
  { title: string; date: string; summary: string }
> = {
  guthealth: {
    title: "Gut Health App",
    date: "In Progress",
    summary:
      "A Figma prototype for an app that helps users with chronic gut health track habits, journal symptoms, find recipes, and connect with others.",
  },
  portfolio: {
    title: "Portfolio Website",
    date: "September 2025",
    summary:
      "Designed and built this site with React, TypeScript, Vite, and Tailwind to showcase my journey and keep users at the center of every design decision.",
  },
  kahoot: {
    title: "Kahoot Recreation Website",
    date: "April 2025",
    summary:
      "Recreated Kahoot with a team to address inequities—accuracy mode, explanation feature, and certifications—so all learners have a fair chance to succeed.",
  },
  cooking: {
    title: "Cooking App",
    date: "April 2024",
    summary:
      "Figma prototype for an app that gives beginners step-by-step cooking guidelines and recipes based on ingredient inventory.",
  },
  cancer: {
    title: "Cancer Detection Website",
    date: "May 2023",
    summary:
      "Data visualization and tumor image upload for a tool that helps doctors in under-resourced areas interpret test results quickly and accurately.",
  },
};

const PROJECT_ORDER: ProjectId[] = [
  "guthealth",
  "portfolio",
  "kahoot",
  "cooking",
  "cancer",
];

export default function Work() {
  const [expandedId, setExpandedId] = useState<ProjectId | null>(null);

  const toggle = (id: ProjectId) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="work"
      className="scroll-mt-24 relative bg-mesh min-h-screen px-6 py-16"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-7xl mx-auto mb-12"
        >
          <div className="absolute inset-0 translate-x-2 translate-y-2 bg-pink-800/90 rounded-xl z-0" />
          <div className="relative bg-pink-150 border border-pink-200/60 text-center rounded-xl px-6 py-4 z-10 shadow-card">
            <h1 className="font-display text-4xl font-bold text-pink-900">
              My Work 👩‍💻
            </h1>
          </div>
        </motion.div>

        <div className="space-y-4">
          {PROJECT_ORDER.map((id, index) => {
            const meta = projectSummaries[id];
            const isExpanded = expandedId === id;
            return (
              <motion.article
                key={id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="bg-pink-150 border border-pink-200/60 shadow-card rounded-xl overflow-hidden hover:shadow-card-hover transition-smooth"
              >
                <button
                  type="button"
                  onClick={() => toggle(id)}
                  className="w-full text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-5 md:p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/50 focus-visible:ring-inset rounded-xl"
                  aria-expanded={isExpanded}
                  aria-controls={`work-content-${id}`}
                  id={`work-header-${id}`}
                >
                  <div className="flex-1 min-w-0">
                    <h2 className="font-display text-xl md:text-2xl font-bold text-pink-900 mb-0.5">
                      {id === "portfolio" ? (
                        <a
                          href="https://ramakhabbaz-portfolio.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-pink-800 hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {meta.title} 😉 ↗
                        </a>
                      ) : id === "cancer" ? (
                        <a
                          href="https://github.com/gt-big-data/cancer-detection"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-pink-800 hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {meta.title} ↗
                        </a>
                      ) : (
                        meta.title
                      )}
                    </h2>
                    <p className="text-sm text-gray-600 italic mb-1">
                      {meta.date}
                    </p>
                    <p className="text-gray-700 text-sm md:text-base line-clamp-2">
                      {meta.summary}
                    </p>
                  </div>
                  <span
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-200/60 flex items-center justify-center text-pink-700 transition-transform duration-300"
                    aria-hidden
                    style={{
                      transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    ▼
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div
                    id={`work-content-${id}`}
                    role="region"
                    aria-labelledby={`work-header-${id}`}
                    className="min-h-0 overflow-hidden"
                  >
                    <div className="px-5 pb-6 md:px-6 md:pb-8 pt-0 border-t border-pink-200/60">
                      {id === "guthealth" && <GutHealthContent />}
                      {id === "portfolio" && <PortfolioContent />}
                      {id === "kahoot" && <KahootContent />}
                      {id === "cooking" && <CookingContent />}
                      {id === "cancer" && <CancerContent />}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function GutHealthContent() {
  return (
    <>
      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
        At age 16, I was diagnosed with ulcerative colitis. After years of
        struggling with symptoms and feeling alone, I realized an app could
        empower others facing similar gut health challenges. My prototype
        focuses on helping users take control of their health by tracking
        healthy habits, learning more about gut health, journaling daily about
        symptoms, finding recipes, and connecting with others. Currently, I'm
        iterating in Figma with the goal of building an app that not only
        supports daily well-being but also creates a sense of belonging for
        other people with chronic gut health issues. Read on to see the
        development of my prototypes in Figma.
      </p>
      <hr className="border-pink-300 mb-6" />
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Prototypes</h3>
      <div className="mb-8">
        <a
          href="https://www.figma.com/design/D4ZSosIFA2pju9gZkPZfvl/Gut-Health-App-Prototype-1?t=pLuZEXHZgYFtIAL8-1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold underline text-pink-700 hover:text-pink-800 italic"
        >
          Lo-Fi Prototype
        </a>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          <a
            href={guthealthlofi1}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow p-3 hover:scale-[1.02] transition-transform"
          >
            <img
              src={guthealthlofi1}
              alt="Gut Health App Lo-Fi 1"
              className="rounded w-full h-auto object-contain max-h-80"
            />
          </a>
          <a
            href={guthealthlofi2}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow p-3 hover:scale-[1.02] transition-transform"
          >
            <img
              src={guthealthlofi2}
              alt="Gut Health App Lo-Fi 2"
              className="rounded w-full h-auto object-contain max-h-80"
            />
          </a>
        </div>
      </div>
      <div>
        <a
          href="https://www.figma.com/design/vep72mROIYtUhpdbMSeOTh/Gut-Health-App?node-id=0-1&p=f&t=pLuZEXHZgYFtIAL8-0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold underline text-pink-700 hover:text-pink-800 italic"
        >
          Hi-Fi Prototype
        </a>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
          {[guthealthhifi1, guthealthhifi2, guthealthhifi3].map((src, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-3">
              <img
                src={src}
                alt={`Gut Health App Hi-Fi ${i + 1}`}
                className="w-full max-h-80 object-contain rounded cursor-pointer"
                onClick={() => window.open(src, "_blank")}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function PortfolioContent() {
  return (
    <>
      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
        I designed and coded this website to give recruiters and peers a clear,
        user-friendly way to understand my professional and technical journey,
        while also making it personable and approachable. My goal was to develop
        an aesthetically pleasing site that reflected both my personality and
        technical skills. Before starting, I researched several portfolio sites
        to understand layouts, flows, and design patterns that feel intuitive
        for visitors. Throughout the build, I paid close attention to
        interaction details. I designed the layout and flow in Figma and built
        it using React, TypeScript, Vite, and Tailwind CSS, with the help of
        generative AI. This project helped me strengthen my front-end
        development skills and apply best practices in UI/UX.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        👉 See my code on{" "}
        <a
          href="https://github.com/ramakhabbaz/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-pink-700 hover:text-pink-800 italic"
        >
          GitHub
        </a>
        . 👉 Access the site{" "}
        <a
          href="https://ramakhabbaz-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-pink-700 hover:text-pink-800 italic"
        >
          here
        </a>
        .
      </p>
      <hr className="border-pink-300 mb-6" />
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Prototypes</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <a
            href="https://www.figma.com/design/ilEM8AedFxISEyegc4N7wL/Portfolio?node-id=24-21&t=8H1FAsoxFIPxY7B2-1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold underline text-pink-700 hover:text-pink-800 italic"
          >
            Lo-Fi Prototype
          </a>
          <div className="mt-4 bg-white rounded-lg shadow p-3">
            <a href={portfolioLofi} target="_blank" rel="noopener noreferrer">
              <img
                src={portfolioLofi}
                alt="Portfolio Lo-Fi"
                className="rounded w-full h-auto object-contain max-h-72"
              />
            </a>
          </div>
        </div>
        <div>
          <a
            href="https://www.figma.com/design/teyS0g5SuQgzIeYVcW1Yun/Portfolio-Hi-FI?t=XA3U6tA5JIcsyW1F-1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold underline text-pink-700 hover:text-pink-800 italic"
          >
            Hi-Fi Prototype
          </a>
          <div className="mt-4 bg-white rounded-lg shadow p-3">
            <a href={portfolioHifi} target="_blank" rel="noopener noreferrer">
              <img
                src={portfolioHifi}
                alt="Portfolio Hi-Fi"
                className="rounded w-full h-auto object-contain max-h-72"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function KahootContent() {
  return (
    <>
      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
        With three peers in CS 6460: Education Technology, we recreated Kahoot
        to address income and racial inequalities. We added an accuracy mode
        (emphasis on correctness over speed), an explanation feature for
        immediate feedback, content resources, Kahoot Certified for teachers,
        and discussion communities. I led the explanation feature, ensuring it
        felt familiar to Kahoot users while providing clear feedback. Through
        user testing, I made the interface intuitive and supportive. This
        project reinforced my belief that design can reduce inequities and give
        all learners a fair chance to succeed.
      </p>
      <hr className="border-pink-300 mb-6" />
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Prototypes</h3>
      <div className="mb-8">
        <a
          href="/kahoot.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold underline text-pink-700 hover:text-pink-800 italic"
        >
          Mid-Fi Prototype
        </a>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
          {[kahootlofi1, kahootlofi2, kahootlofi3].map((src, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-3">
              <img
                src={src}
                alt={`Kahoot Mid-Fi ${i + 1}`}
                className="w-full max-h-56 object-contain rounded cursor-pointer"
                onClick={() => window.open(src, "_blank")}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <a
          href="https://www.figma.com/proto/0d7uWRGfhMP8RJofTAudni/Kahoot-prototype?node-id=0-1&t=u9ytGkpInsJegEHv-1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold underline text-pink-700 hover:text-pink-800 italic"
        >
          Hi-Fi Prototype
        </a>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          {[kahoothifi1, kahoothifi2].map((src, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-3">
              <a href={src} target="_blank" rel="noopener noreferrer">
                <img
                  src={src}
                  alt={`Kahoot Hi-Fi ${i + 1}`}
                  className="max-h-56 w-auto object-contain rounded mx-auto block"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function CookingContent() {
  return (
    <>
      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
        With three peers in CS 3751: Intro to UI Design, we created a Figma
        prototype for an app that provides detailed cooking guidelines for
        beginners and curated recipes based on ingredient inventory. We
        conducted user research, interviews, heuristic evaluations, and user
        testing. I focused on step-by-step, beginner-friendly cooking
        guidelines. Our team created an app that saves students time and money
        and empowers them to make healthy meals without stress.
      </p>
      <hr className="border-pink-300 mb-6" />
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Prototypes</h3>
      <a
        href="https://www.figma.com/proto/lIXXPzO0SyDj93JlQybUrd/Hi-fidelity?node-id=356-4962&starting-point-node-id=356%3A4962&t=2tLfIkS4T3M0tqlF-1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-semibold underline text-pink-700 hover:text-pink-800 italic"
      >
        Hi-Fi Prototype
      </a>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
        {[cooking1, cooking2].map((src, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-3">
            <a href={src} target="_blank" rel="noopener noreferrer">
              <img
                src={src}
                alt={`Cooking App Hi-Fi ${i + 1}`}
                className="w-full max-h-48 object-contain rounded"
              />
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

function CancerContent() {
  return (
    <>
      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
        As part of the data visualization team for Georgia Tech's Big Data Big
        Impact, I worked on a cancer detection tool for doctors in
        under-resourced areas. I implemented the tumor image upload feature with
        an emphasis on accessibility and usability so clinicians could
        seamlessly interact with the tool.
      </p>
      <p className="text-lg text-gray-700">
        👉 See our code on{" "}
        <a
          href="https://github.com/gt-big-data/cancer-detection"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-pink-700 hover:text-pink-800 italic"
        >
          GitHub
        </a>
        .
      </p>
    </>
  );
}
