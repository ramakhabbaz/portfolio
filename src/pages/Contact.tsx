export default function Contact() {
    return (
      <section className="bg-pink-100 min-h-screen flex items-center justify-center px-6 py-16">
        <div className="relative max-w-4xl w-full">
          {/* Shadow box behind */}
        <div
          className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl z-0 bg-pink-800"
        />

        {/* Foreground card */}
        <div
          className="relative rounded-xl p-8 md:p-12 shadow-md z-10 bg-pink-300"
        >
            <h1 className="text-4xl font-bold text-gray-700 mb-6">
              Contact Me!
            </h1>
            <form action="https://formspree.io/f/xanbdjqd" method="POST" className="space-y-6">
                <input type="text" name="name" required placeholder="Name" className="w-full p-3 rounded-md border border-gray-300"/>
                <br></br>
                <input type="email" name="email" required placeholder="Email" className="w-full p-3 rounded-md border border-gray-300"/>
                <br></br>
                <textarea name="message" placeholder="Message..." rows={5} required className="w-full p-3 rounded-md border border-gray-300"/>
                <br></br>
                <button type="submit" className="bg-gray-700 text-gray-200 font-semibold py-2 px-6 rounded hover:bg-pink-900 transition">Submit</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
  