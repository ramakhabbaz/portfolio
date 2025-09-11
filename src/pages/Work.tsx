import guthealthlofi1 from "../assets/guthealthlofi1.png";
import guthealthlofi2 from "../assets/guthealthlofi2.png";
import guthealthhifi1 from "../assets/guthealthhifi1.png";
import guthealthhifi2 from "../assets/guthealthhifi2.png";
import guthealthhifi3 from "../assets/guthealthhifi3.png";
import portfolioHifi from "../assets/portfolioHifi.png";
import portfolioLofi from "../assets/portfolioLofi.png";
import portfolioFinal from "../assets/portfolioFinal.png";

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
            [Brief project description goes here. What was the goal? What did
            you do?]
          </p>

          <hr className="border-pink-800 mb-6" />

          <h3 className="text-xl font-semibold text-pink-800 mb-4">
            Prototypes
          </h3>

          {/* Lo-Fi Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold">Lo-Fi Prototype</h3>
            <a
              href="https://www.figma.com/proto/D4ZSosIFA2pju9gZkPZfvl/Gut-Health-App-Prototype-1?node-id=0-1&t=XGuqPGF243cBmHw0-1"
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
              href="https://www.figma.com/proto/vep72mROIYtUhpdbMSeOTh/Gut-Health-App?node-id=0-1&t=XGuqPGF243cBmHw0-1"
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
            Portfolio Website 😉
          </h2>
          <p className="text-sm text-gray-600 italic mb-4">September 2025</p>
          <p className="text-lg text-gray-700 mb-6">
            [Brief project description goes here. What was the goal? What did
            you do?]
          </p>

          <hr className="border-pink-800 mb-6" />

          <h3 className="text-xl font-semibold text-pink-800 mb-4">
            Prototypes
          </h3>

          {/* Lo-Fi Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold">Lo-Fi Prototype</h3>
            <a
              href="https://www.figma.com/proto/D4ZSosIFA2pju9gZkPZfvl/Gut-Health-App-Prototype-1?node-id=0-1&t=XGuqPGF243cBmHw0-1"
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
              href="https://www.figma.com/proto/D4ZSosIFA2pju9gZkPZfvl/Gut-Health-App-Prototype-1?node-id=0-1&t=XGuqPGF243cBmHw0-1"
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

          {/*Final Product*/}
          <div className="mb-8">
            <h3 className="text-lg font-semibold">Final Product</h3>
            <a
              href="https://www.figma.com/proto/D4ZSosIFA2pju9gZkPZfvl/Gut-Health-App-Prototype-1?node-id=0-1&t=XGuqPGF243cBmHw0-1"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-gray-600 hover:text-pink-900 italic"
            >
              This Website
            </a>
            <br></br>
            <a
              href="https://www.figma.com/proto/D4ZSosIFA2pju9gZkPZfvl/Gut-Health-App-Prototype-1?node-id=0-1&t=XGuqPGF243cBmHw0-1"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-gray-600 hover:text-pink-900 italic"
            >
              GitHub Link
            </a>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={portfolioFinal}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={portfolioFinal}
                  alt="Final Website Image"
                  className="rounded shadow w-[300px] h-auto hover:scale-105 transition-transform duration-200"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Cancer Detection Website */}
        <div className="bg-pink-300 shadow-md rounded-xl p-6 md:p-10 mb-12 relative">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Big Data Big Impact's Cancer d
          </h2>
          <p className="text-sm text-gray-600 italic mb-4">September 2025</p>
          <p className="text-lg text-gray-700 mb-6">
            [Brief project description goes here. What was the goal? What did
            you do?]
          </p>

          <hr className="border-pink-800 mb-6" />

          <h3 className="text-xl font-semibold text-pink-800 mb-4">
            Prototypes
          </h3>

          {/* Hi-Fi Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold">Hi-Fi Prototype</h3>
            <a
              href="https://www.figma.com/proto/D4ZSosIFA2pju9gZkPZfvl/Gut-Health-App-Prototype-1?node-id=0-1&t=XGuqPGF243cBmHw0-1"
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
      </div>
    </section>
  );
}
