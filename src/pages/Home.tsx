import profilePic from '../assets/profile-pic.jpg';

export default function Home() {
  return (
    <section className="min-h-screen bg-pink-100 flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl w-full bg-pink-300 rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-between p-8 md:p-16">
        {/* Left: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Hi, I’m Rama!</h1>
          <p className="text-2xl text-gray-700">
            Aspiring UI/UX & Frontend Developer <br />
            HCI Master’s Student @ Georgia Tech
          </p>
        </div>

        {/* Right: Profile Image */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
          {/* Shadow box */}
          <div className="absolute w-80 h-96 bg-pink-800 rounded-md z-0 translate-x-3 translate-y-3" />

          {/* Profile image */}
          <img
            src={profilePic}
            alt="Rama"
            className="relative w-80 h-96 object-cover rounded-md z-10"
          />
        </div>
      </div>
    </section>
  );
}