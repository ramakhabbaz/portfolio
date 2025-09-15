import guthealthlofi1 from "../assets/guthealthlofi1.png";
import guthealthlofi2 from "../assets/guthealthlofi2.png";
import guthealthhifi1 from "../assets/guthealthhifi1.png";
import guthealthhifi2 from "../assets/guthealthhifi2.png";
import guthealthhifi3 from "../assets/guthealthhifi3.png";
import portfolioHifi from "../assets/portfolioHifi.png";
import portfolioLofi from "../assets/portfolioLofi.png";
import portfolioFinal from "../assets/portfolioFinal.png";
import cooking1 from "../assets/cookingHiFi1.png";
import cooking2 from "../assets/cookingHiFi2.png";
import kahoothifi1 from "../assets/kahoothifi1.png";
import kahoothifi2 from "../assets/kahoothifi2.png";
import kahootlofi1 from "../assets/kahootlofi1.png";
import kahootlofi2 from "../assets/kahootlofi2.png";
import kahootlofi3 from "../assets/kahootlofi3.png";

export default function Work() {
  return (
    <section className="bg-pink-100 min-h-screen px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Title Box with Shadow */}
        <div className="relative max-w-7xl mx-auto mb-12">
          <div className="absolute inset-0 translate-x-2 translate-y-2 bg-pink-800 rounded-xl z-0" />
          <div className="relative bg-pink-300 text-center rounded-xl px-6 py-4 z-10 shadow-md">
            <h1 className="text-4xl font-bold text-gray-700">My Work</h1>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-pink-300 shadow-md rounded-xl p-6 md:px-10 md:py-6 mb-8 relative">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Table of Contents
          </h2>
          <ul className="list-inside text-lg text-pink-800 underline">
            <li>
              <a href="#guthealth" className="hover:text-pink-900">
                Gut Health App
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-pink-900">
                Portfolio Website
              </a>
            </li>
            <li>
              <a href="#kahoot" className="hover:text-pink-900">
                Kahoot Recreation Website
              </a>
            </li>
            <li>
              <a href="#cooking" className="hover:text-pink-900">
                Cooking App
              </a>
            </li>
            <li>
              <a href="#cancer" className="hover:text-pink-900">
                Cancer Detection Website
              </a>
            </li>
          </ul>
        </div>

        {/* Project Card Gut Health Website */}
        <div
          id="guthealth"
          className="scroll-mt-[100px] bg-pink-300 shadow-md rounded-xl p-6 md:p-10 mb-12 relative"
        >
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Gut Health App
          </h2>
          <p className="text-sm text-gray-600 italic mb-4">In Progress</p>
          <p className="text-lg text-gray-700 mb-6">
            At age 16, I was diagnosed with ulcerative colitis. After years of
            struggling with symptoms and feeling alone, I realized an app could
            aid those with gut health issues. The prototype of my app includes
            features to track healthy habits, learn more about gut health,
            journal daily about side effects, find recipes, and socialize with
            others. The final app is still in progress. Read on to see the
            development of my prototypes in Figma.
          </p>

          <hr className="border-pink-800 mb-6" />

          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Prototypes
          </h3>

          {/* Lo-Fi Section */}
          <div className="mb-8">
            <h3 className="text-lg text-font-semibold underline text-pink-800 hover:text-pink-900 italic">
              <a
                href="https://www.figma.com/design/D4ZSosIFA2pju9gZkPZfvl/Gut-Health-App-Prototype-1?t=pLuZEXHZgYFtIAL8-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lo-Fi Prototype
              </a>
            </h3>

            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <a
                href={guthealthlofi1}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={guthealthlofi1}
                  alt="Gut Health App Lo-Fi Image 1"
                  className="rounded shadow w-[450px] h-auto hover:scale-105 transition-transform duration-200"
                />
              </a>
              <a
                href={guthealthlofi2}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={guthealthlofi2}
                  alt="Gut Health App Lo-Fi Image 2"
                  className="rounded shadow w-[450px] h-auto hover:scale-105 transition-transform duration-200"
                />
              </a>
            </div>
          </div>

          {/* Hi-Fi Section */}
          <div className="mt-10">
            <h3 className="text-lg text-font-semibold underline text-pink-800 hover:text-pink-900 italic">
              <a
                href="https://www.figma.com/design/vep72mROIYtUhpdbMSeOTh/Gut-Health-App?node-id=0-1&p=f&t=pLuZEXHZgYFtIAL8-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hi-Fi Prototype
              </a>
            </h3>

            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <img
                src={guthealthhifi1}
                alt="Gut Health App Hi-Fi Image 1"
                className="w-[350px] max-w-full h-auto rounded shadow hover:scale-105 transition-transform duration-200 cursor-pointer"
                onClick={() => window.open(guthealthhifi1, "_blank")}
              />
              <img
                src={guthealthhifi2}
                alt="Gut Health App Hi-Fi Image 2"
                className="w-[300px] max-w-full h-auto rounded shadow hover:scale-105 transition-transform duration-200 cursor-pointer"
                onClick={() => window.open(guthealthhifi2, "_blank")}
              />
              <img
                src={guthealthhifi3}
                alt="Gut Health App Hi-Fi Image 3"
                className="w-[300px] max-w-full h-auto rounded shadow hover:scale-105 transition-transform duration-200 cursor-pointer"
                onClick={() => window.open(guthealthhifi3, "_blank")}
              />
            </div>
          </div>
        </div>

        {/* Project Card Portfolio Website */}
        <div
          id="portfolio"
          className="scroll-mt-[100px] bg-pink-300 shadow-md rounded-xl p-6 md:p-10 mb-12 relative"
        >
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            <a
              href="https://ramakhabbaz-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-900 hover:underline"
            >
              Portfolio Website 😉 ↗
            </a>
          </h2>
          <p className="text-sm text-gray-600 italic mb-4">September 2025</p>
          <p className="text-lg text-gray-700 mb-2">
            I designed and coded this website as a personal portfolio to
            showcase my professional experiences and allow viewers to connect
            with me on a more personal level. My goal was to develop an
            aesthetically pleasing site that reflected both my personality and
            technical skills.
            <br />I designed the layout and flow of this site using Figma. I
            coded it using React, TypeScript, Vite, and Tailwind CSS, with the
            help of generative AI. Using the inspect tool, I fixed the layout to
            adapt to phones as well (although computers are recommended at this
            stage of the site). This project helped me strengthen my front-end
            development skills and apply best practices in UI/UX, code
            modularity, and deployment using Netlify.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            See my code in Github{" "}
            <a
              href="https://github.com/ramakhabbaz/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-pink-800 hover:text-pink-900 italic"
            >
              here
            </a>
            . Access my website{" "}
            <a
              href="https://ramakhabbaz-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-pink-800 hover:text-pink-900 italic"
            >
              here
            </a>
            .
          </p>

          <hr className="border-pink-800 mb-6" />

          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Prototypes
          </h3>

          {/* Lo-Fi Section */}
          <div className="mb-8">
            <h3 className="text-lg text-font-semibold underline text-pink-800 hover:text-pink-900 italic">
              <a
                href="https://www.figma.com/design/ilEM8AedFxISEyegc4N7wL/Portfolio?node-id=24-21&t=8H1FAsoxFIPxY7B2-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lo-Fi Prototype
              </a>
            </h3>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href={portfolioLofi} target="_blank" rel="noopener noreferrer">
                <img
                  src={portfolioLofi}
                  alt="Portfolio Website Lo-Fi Image"
                  className="rounded shadow w-[300px] h-auto hover:scale-105 transition-transform duration-200"
                />
              </a>
            </div>
          </div>

          {/* Hi-Fi Section */}
          <div className="mb-8">
            <h3 className="text-lg text-font-semibold underline text-pink-800 hover:text-pink-900 italic">
              <a
                href="https://www.figma.com/design/teyS0g5SuQgzIeYVcW1Yun/Portfolio-Hi-FI?t=XA3U6tA5JIcsyW1F-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hi-Fi Prototype
              </a>
            </h3>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href={portfolioHifi} target="_blank" rel="noopener noreferrer">
                <img
                  src={portfolioHifi}
                  alt="Portfolio Website Hi-Fi Image"
                  className="rounded shadow w-[300px] h-auto hover:scale-105 transition-transform duration-200"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Project Card Kahoot Recreation Website */}
        <div
          id="kahoot"
          className="scroll-mt-[100px] bg-pink-300 shadow-md rounded-xl p-6 md:p-10 mb-12 relative"
        >
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Kahoot Recreation Website
          </h2>
          <p className="text-sm text-gray-600 italic mb-4">April 2025</p>
          <p className="text-lg text-gray-700 mb-2">
            Within a group with three of my peers in CS 6460: Education
            Technology, we recreated Kahoot to address income and racial
            inequalities to facilitate better learning. Features we added
            include an accuracy mode that emphasizes answer accuracy rather than
            speed to level the playing field for students in underprivileged
            circumstances, an explanation feature that explains why each answer
            is correct and incorrect to provide immediate feedback, content
            resources that offer links to learn more, Kahoot Certified that
            allows teachers to receive certifications to help students with gaps
            in knowledge, and discussion communties for users to discuss topics
            for individualized help. <br />
            We each did personas, contextual inquiries, affinity diagramming,
            and storyboards to better understand what needed to be done. Then,
            we began iterating and performing user testing on our prototypes. I
            was responsible for the explanation feature, in which I attempted to
            mimic the Kahoot layout to the best of my ability, while also
            adapting to the new feature and considering UI suggestions from my
            user tests.
          </p>

          <hr className="border-pink-800 mb-6" />

          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Prototypes
          </h3>

          {/* Mid-Fi Section */}
          <div className="mb-8">
            <h3 className="text-lg text-font-semibold underline text-pink-800 hover:text-pink-900 italic">
              <a href="/kahoot.pdf" target="_blank" rel="noopener noreferrer">
                Mid-Fi Prototype
              </a>
            </h3>

            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <img
                src={kahootlofi1}
                alt="Kahoot Recreation Website Mid-Fi Image 1"
                className="w-[350px] max-w-full h-auto rounded shadow hover:scale-105 transition-transform duration-200 cursor-pointer"
                onClick={() => window.open(kahootlofi1, "_blank")}
              />
              <img
                src={kahootlofi2}
                alt="Kahoot Recreation Website Mid-Fi Image 2"
                className="w-[300px] max-w-full h-auto rounded shadow hover:scale-105 transition-transform duration-200 cursor-pointer"
                onClick={() => window.open(kahootlofi2, "_blank")}
              />
              <img
                src={kahootlofi3}
                alt="Kahoot Recreation Website Mid-Fi Image 3"
                className="w-[300px] max-w-full h-auto rounded shadow hover:scale-105 transition-transform duration-200 cursor-pointer"
                onClick={() => window.open(kahootlofi3, "_blank")}
              />
            </div>
          </div>

          {/* Hi-Fi Section */}
          <div className="mb-8">
            <h3 className="text-lg text-font-semibold underline text-pink-800 hover:text-pink-900 italic">
              <a
                href="https://www.figma.com/proto/0d7uWRGfhMP8RJofTAudni/Kahoot-prototype?node-id=0-1&t=u9ytGkpInsJegEHv-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hi-Fi Prototype
              </a>
            </h3>

            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <a href={kahoothifi1} target="_blank" rel="noopener noreferrer">
                <img
                  src={kahoothifi1}
                  alt="Kahoot Recreation Website Hi-Fi Image 1"
                  className="rounded shadow w-[450px] h-auto hover:scale-105 transition-transform duration-200"
                />
              </a>
              <a href={kahoothifi2} target="_blank" rel="noopener noreferrer">
                <img
                  src={kahoothifi2}
                  alt="Kahoot Recreation Website Hi-Fi Image 2"
                  className="rounded shadow w-[450px] h-auto hover:scale-105 transition-transform duration-200"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Project Card Cooking App */}
        <div
          id="cooking"
          className="scroll-mt-[100px] bg-pink-300 shadow-md rounded-xl p-6 md:p-10 mb-12 relative"
        >
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Cooking App</h2>
          <p className="text-sm text-gray-600 italic mb-4">April 2024</p>
          <p className="text-lg text-gray-700 mb-6">
            Within a group with three of my peers in CS 3751: Intro to UI
            Design, we created a Figma prototype for an app that provides
            detailed cooking guidelines for beginners and curated recipes based
            on ingredient inventory. The goal was to address the issue of
            students' financial and time constraints regarding cooking healthy
            meals.
            <br />
            As a team, we conducted comprehensive user research including
            interviews with potential users to evaluate needs, as well as
            heuristic evaluations and user testing for design iteration. Each
            team member was responsible for designing and prototyping a core
            feature of the app. My focus was on developing the beginner-friendly
            cooking guidelines to support those who are new in the kitchen.
          </p>

          <hr className="border-pink-800 mb-6" />

          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Prototypes
          </h3>

          {/* Hi-Fi Section */}
          <div className="mb-8">
            <h3 className="text-lg text-font-semibold underline text-pink-800 hover:text-pink-900 italic">
              <a
                href="https://www.figma.com/proto/lIXXPzO0SyDj93JlQybUrd/Hi-fidelity?node-id=356-4962&starting-point-node-id=356%3A4962&t=2tLfIkS4T3M0tqlF-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hi-Fi Prototype
              </a>
            </h3>

            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <a href={cooking1} target="_blank" rel="noopener noreferrer">
                <img
                  src={cooking1}
                  alt="Cooking App Hi-Fi Image 1"
                  className="rounded shadow w-[450px] h-auto hover:scale-105 transition-transform duration-200"
                />
              </a>
              <a href={cooking2} target="_blank" rel="noopener noreferrer">
                <img
                  src={cooking2}
                  alt="Cooking App Hi-Fi Image 2"
                  className="rounded shadow w-[450px] h-auto hover:scale-105 transition-transform duration-200"
                />
              </a>
            </div>
          </div>
        </div>

        {/*  Project Card Cancer Detection Website */}
        <div
          id="cancer"
          className="scroll-mt-[100px] bg-pink-300 shadow-md rounded-xl p-6 md:p-10 mb-12 relative"
        >
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            <a
              href="https://github.com/gt-big-data/cancer-detection"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-900 hover:underline"
            >
              Big Data Big Impact's Cancer Detection Website ↗
            </a>
          </h2>
          <p className="text-sm text-gray-600 italic mb-4">May 2023</p>
          <p className="text-lg text-gray-700 mb-2">
            I worked on the data visualization team to create a website for the
            cancer detection project within Big Data Big Impact at Georgia Tech.
            Our goal was to create a program that made it easier for doctors in
            underprivileged areas to assess cancer results.
            <br /> I personally implemented the critical tumor image upload
            button to provide an accessibility-friendly user experience.
          </p>
          <p className="text-lg text-gray-700">
            See our code in Github{" "}
            <a
              href="https://github.com/gt-big-data/cancer-detection"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-pink-800 hover:text-pink-900 italic"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-pink-800 hover:bg-pink-900 text-gray-200 px-4 py-2 rounded-full shadow-lg transition-colors duration-200 z-50"
        aria-label="Back to top"
      >
        ↑ Top
      </button>
    </section>
  );
}
