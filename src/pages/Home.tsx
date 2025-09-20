import profilePic from "../assets/profile-pic.jpg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="min-h-screen bg-pink-100 flex items-center justify-center px-6 py-12 md:">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-6xl w-full"
      >
        {/* Shadow card behind main content card */}
        <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl z-0 bg-pink-800" />

        {/* Foreground of main content card */}
        <div className="relative rounded-xl p-8 md:p-12 shadow-md z-10 bg-pink-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left: Text */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-pink-900 mb-6">
                Hi, I’m Rama! 👋
              </h1>
              <p className="text-md md:text-xl text-gray-600 italic">
                Master’s Student @ Georgia Tech in CS, HCI <br />
                Aspiring UI/UX Designer | Frontend Developer | Product Manager
              </p>
            </div>

            {/* Right: Profile Image */}
            <div className="md:w-1/2 flex justify-center mt-2 md:mt-0 relative">
              {/* Shadow box behind profile image*/}
              <div className="absolute w-full max-w-[320px] h-[400px] bg-pink-700 rounded-md z-0 translate-x-3 translate-y-3" />

              {/* Profile image */}
              <img
                src={profilePic}
                alt="Image of Rama"
                className="relative w-full max-w-[320px] h-[400px] object-cover rounded-md z-10"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
