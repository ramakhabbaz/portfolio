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

export default function Work() {
  return (
    <section className="bg-pink-100 min-h-screen px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Title Box with Shadow */}
        <div className="relative max-w-7xl mx-auto mb-12">
          <div className="absolute inset-0 translate-x-2 translate-y-2 bg-pink-800 rounded-xl z-0" />
          <div className="relative bg-pink-300 text-center rounded-xl px-6 py-4 z-10 shadow-md">
            <h1 className="text-4xl font-bold text-gray-800">My Work</h1>
          </div>
        </div>

        {/* Project Card Gut Health */}
        <div className="bg-pink-300 shadow-md rounded-xl p-6 md:p-10 mb-12 relative">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
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

          <h3 className="text-xl font-semibold text-pink-800 mb-4">
            Prototypes
          </h3>

          {/* Lo-Fi Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold">Lo-Fi Prototype</h3>
            <a
              href="https://www.figma.com/design/D4ZSosIFA2pju9gZkPZfvl/Gut-Health-App-Prototype-1?t=pLuZEXHZgYFtIAL8-1"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-gray-600 hover:text-pink-900 italic"
            >
              Link
            </a>

            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <a
                href={guthealthlofi1}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={guthealthlofi1}
                  alt="Lo-Fi Image 1"
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
                  alt="Lo-Fi Image 2"
                  className="rounded shadow w-[450px] h-auto hover:scale-105 transition-transform duration-200"
                />
              </a>
            </div>
          </div>

          {/* Hi-Fi Section */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold">Hi-Fi Prototype</h3>
            <a
              href="https://www.figma.com/design/vep72mROIYtUhpdbMSeOTh/Gut-Health-App?node-id=0-1&p=f&t=pLuZEXHZgYFtIAL8-0"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-gray-600 hover:text-pink-900 italic"
            >
              Link
            </a>

            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <img
                src={guthealthhifi1}
                alt="Hi-Fi Image 1"
                className="w-[350px] max-w-full h-auto rounded shadow hover:scale-105 transition-transform duration-200 cursor-pointer"
                onClick={() => window.open(guthealthhifi1, "_blank")}
              />
              <img
                src={guthealthhifi2}
                alt="Hi-Fi Image 2"
                className="w-[300px] max-w-full h-auto rounded shadow hover:scale-105 transition-transform duration-200 cursor-pointer"
                onClick={() => window.open(guthealthhifi2, "_blank")}
              />
              <img
                src={guthealthhifi3}
                alt="Hi-Fi Image 3"
                className="w-[300px] max-w-full h-auto rounded shadow hover:scale-105 transition-transform duration-200 cursor-pointer"
                onClick={() => window.open(guthealthhifi3, "_blank")}
              />
            </div>
          </div>
        </div>

        {/* Project Card Portfolio Website */}
        <div className="bg-pink-300 shadow-md rounded-xl p-6 md:p-10 mb-12 relative">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
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
            technical skills. I designed the layout and flow of this site using
            Figma. I coded it using React, TypeScript, Vite, and Tailwind CSS,
            with routing powered by React Router. This project helped me
            strengthen my front-end development skills and apply best practices
            in UI/UX, code modularity, and deployment workflows using Netlify.
            <br />I designed the layout and flow of this site using Figma. I
            created it using React, TypeScript, Vite, and Tailwind CSS, with
            routing powered by React Router. This project helped me strengthen
            my front-end development skills and apply best practices in UI/UX,
            code modularity, and deployment using Netlify.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            See my code in Github{" "}
            <a
              href="https://github.com/ramakhabbaz/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-gray-600 hover:text-pink-900 italic"
            >
              here.
            </a>
          </p>

          <hr className="border-pink-800 mb-6" />

          <h3 className="text-xl font-semibold text-pink-800 mb-4">
            Prototypes
          </h3>

          {/* Lo-Fi Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold">Lo-Fi Prototype</h3>
            <a
              href="https://www.figma.com/design/ilEM8AedFxISEyegc4N7wL/Portfolio?node-id=24-21&t=8H1FAsoxFIPxY7B2-1"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-gray-600 hover:text-pink-900 italic"
            >
              Link
            </a>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href={portfolioLofi} target="_blank" rel="noopener noreferrer">
                <img
                  src={portfolioLofi}
                  alt="Lo-Fi Image"
                  className="rounded shadow w-[300px] h-auto hover:scale-105 transition-transform duration-200"
                />
              </a>
            </div>
          </div>

          {/* Hi-Fi Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold">Hi-Fi Prototype</h3>
            <a
              href="https://www.figma.com/design/teyS0g5SuQgzIeYVcW1Yun/Portfolio-Hi-FI?t=XA3U6tA5JIcsyW1F-1"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-gray-600 hover:text-pink-900 italic"
            >
              Link
            </a>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href={portfolioHifi} target="_blank" rel="noopener noreferrer">
                <img
                  src={portfolioHifi}
                  alt="Hi-Fi Image"
                  className="rounded shadow w-[300px] h-auto hover:scale-105 transition-transform duration-200"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Project Card Cooking App */}
        <div className="bg-pink-300 shadow-md rounded-xl p-6 md:p-10 mb-12 relative">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Cooking App</h2>
          <p className="text-sm text-gray-600 italic mb-4">April 2024</p>
          <p className="text-lg text-gray-700 mb-6">
            Within a group in CS 3751: Intro to UI Design, we created a Figma
            prototype for an app that provides detailed cooking guidelines for
            beginners and curated recipes based on ingredient inventory. The
            goal is to address the issue of students' financial and time
            constraints regarding cooking healthy meals. We each conducted
            detailed user research, potential user interviews, heuristic
            evaluation and user testing interviews to iterate. We also each
            covered one feature of the app, mine being cooking guidelines for
            beginners.
            <br />
            As a team, we conducted comprehensive user research including
            interviews with potential users to evaluate needs, as well as
            heuristic evaluations and user testing for design iteration. Each
            team member was responsible for designing and prototyping a core
            feature of the app. My focus was on developing the beginner-friendly
            cooking guidelines pages to support those who are new in the
            kitchen.
          </p>

          <hr className="border-pink-800 mb-6" />

          <h3 className="text-xl font-semibold text-pink-800 mb-4">
            Prototypes
          </h3>

          {/* Hi-Fi Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold">Hi-Fi Prototype</h3>
            <a
              href="https://www.figma.com/proto/lIXXPzO0SyDj93JlQybUrd/Hi-fidelity?node-id=356-4962&starting-point-node-id=356%3A4962&t=2tLfIkS4T3M0tqlF-1"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-gray-600 hover:text-pink-900 italic"
            >
              Link
            </a>

            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <a href={cooking1} target="_blank" rel="noopener noreferrer">
                <img
                  src={cooking1}
                  alt="Lo-Fi Image 1"
                  className="rounded shadow w-[450px] h-auto hover:scale-105 transition-transform duration-200"
                />
              </a>
              <a href={cooking2} target="_blank" rel="noopener noreferrer">
                <img
                  src={cooking2}
                  alt="Lo-Fi Image 2"
                  className="rounded shadow w-[450px] h-auto hover:scale-105 transition-transform duration-200"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Cancer Detection Website */}
        <div className="bg-pink-300 shadow-md rounded-xl p-6 md:p-10 mb-12 relative">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            <a
              href="https://github.com/gt-big-data/cancer-detection"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-900 hover:underline"
            >
              Big Data Big Impact's Cancer Detection ↗
            </a>
          </h2>
          <p className="text-sm text-gray-600 italic mb-4">May 2023</p>
          <p className="text-lg text-gray-700 mb-6">
            I worked on the data visualization team to create a website for the
            cancer detection project within Big Data Big Impact at Georgia Tech.
            Our goal was to create a program that made it easier for doctors in
            underprivileged areas to assess cancer results.
            <br /> I personally implemented the critical tumor image upload
            button to provide an accessibility-friendly user experience.
          </p>
        </div>
      </div>
    </section>
  );
}
